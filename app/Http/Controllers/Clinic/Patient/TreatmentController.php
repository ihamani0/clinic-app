<?php

namespace App\Http\Controllers\Clinic\Patient;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\PatientTooth;
use App\Models\Treatment;
use App\Models\TreatmentStep;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class TreatmentController extends Controller
{


    public function store(Request $request, Patient $patient){
        
         
        //dd($request->all());
        $data = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',

                'teeth' => 'required|array|min:1',
                'teeth.*' => 'integer|min:11|max:48',

                'steps' => 'required|array|min:1',
                'steps.*.name' => 'required|string',
                'steps.*.cost' => 'nullable|numeric|min:0',
                'steps.*.note' => 'nullable|string',
        ]);

        DB::transaction(function () use ($data, $patient) {

            $treatment = $patient->treatments()->create([
                'doctor_id' => Auth::user()->id,
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
                'status' => 'planned',
                'planned_at' => now(),
            ]);

            foreach ($data['steps'] as $index => $step) {
                $treatment->steps()->create([
                    'title' => $step['name'],
                    'cost' => $step['cost'] ?? 0,
                    'note' => $step['note'] ?? null ,
                    'step_order' => $index+1,
                ]);
            }


            foreach ($data['teeth'] as $toothNumber) {
                $treatment->teeth()->create([
                    'tooth_number' => $toothNumber,
                ]);
            }

        });

        return back()->with('success', 'Treatment created');
    }


    public function markDone(Patient $patient , TreatmentStep $treatmentStep){
        
 
        $treatment = $treatmentStep->treatment;

            abort_if($treatment->patient_id !== $patient->id, 404);

            if ($treatment->isLocked()) {
                return back()->withErrors('Treatment is locked');
            }

            if($treatmentStep->isDone()){
                // If already done, unmark it
                $treatmentStep->status = 'pending';
            }else {
                $treatmentStep->status = 'done';

            }

            $treatmentStep->save();

            return back();
    }

    public function update(Request $request, Patient $patient , Treatment $treatment){
        
         
        abort_if($treatment->patient_id !== $patient->id, 404);

        if($treatment->isLocked()){
            return back()->with('error', 'Treatment is locked due to payment. Cannot be edited.');
        }

        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',

            'steps' => 'required|array|min:1',
            'steps.*.id' => 'nullable',
            'steps.*.title' => 'required|string',
            'steps.*.cost' => 'nullable|numeric|min:0',
            'steps.*.note' => 'nullable|string',
        ]);

        DB::transaction(function() use($data,$treatment){
            try{

            $treatment->update([
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
            ]);

            $existingStepIds = $treatment->steps()->pluck('id')->toArray();
            $incomingIDs = collect($data['steps'])->pluck('id')->filter()->toArray();

            // ❌ Prevent deleting done steps
            $deleted = array_diff($existingStepIds, $incomingIDs);
            $doneSteps = $treatment->steps()
                ->whereIn('id', $deleted)
                ->where('status', 'done')
                ->count();

            if ($doneSteps > 0) {
                throw ValidationException::withMessages([
                    'steps' => 'Cannot remove completed steps',
                ]);
            }

            // Delete removed steps
            $treatment->steps()->whereIn('id', $deleted)->delete();


            //update or create steps
            foreach($data['steps'] as $index =>$stepData){



                if(isset($stepData['id']) ){
                    $model = TreatmentStep::find($stepData['id']);

                    if($model->isDone()) continue;

                    if ($model) {
                        if ($model->isDone()) continue;

                        $model->title = $stepData['title'];
                        $model->cost = $stepData['cost'] ?? 0;
                        $model->note = $stepData['note'] ?? null;
                        $model->step_order = $index + 1;
                        $model->save(); // Manually saving the instance
                    }

                }else{
                    // CREATE NEW
                        $model = new TreatmentStep();
                        $model->treatment_id = $treatment->id; // Must link it manually
                        $model->title = $stepData['title'];
                        $model->cost = $stepData['cost'] ?? 0;
                        $model->note = $stepData['note'] ?? null;
                        $model->step_order = $index + 1;
                        $model->status = 'pending'; // Default status
                        $model->save(); // Manually saving the new instance
                }

            }  // endforeach


            }catch(\Exception $e){dd($e->getMessage());}

        });

        

    }


     public function destroy(){

    }

    public function complete(Treatment $treatment){
         DB::transaction(function () use ($treatment) {

            $treatment->update([
                'status' => 'completed',
            ]);

            // 🔥 AUTO-SYNC teeth status
            foreach ($treatment->teeth as $tooth) {
                PatientTooth::updateOrCreate(
                    [
                        'patient_id' => $treatment->patient_id,
                        'tooth_number' => $tooth->tooth_number,
                    ],
                    [
                        'status' => $this->mapTreatmentToStatus($treatment),
                    ]
                );
            }
        });

        return back()->with('success', 'Treatment completed');
    }


    public function cancel(Treatment $treatment){
        $treatment->update(['status' => 'cancelled']);

        return back()->with('success', 'Treatment cancelled');
    }


    private function mapTreatmentToStatus(Treatment $treatment): string
    {
        return match (strtolower($treatment->title)) {
            'crown' => 'crown',
            'implant' => 'implant',
            'extraction' => 'extracted',
            default => 'healthy',
        };
    }
}