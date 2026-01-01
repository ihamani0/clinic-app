<?php

namespace App\Http\Controllers\Clinic\Patient;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\PatientTooth;
use Illuminate\Http\Request;

class PatientToothController extends Controller
{

    /**
     * Get all teeth for a patient
     */
    public function index(Patient $patient)
    {
        $teeth = $patient->teeth
            ->pluck('status', 'tooth_number'); // key = tooth_number

        return response()->json([
            'patient_id' => $patient->id,
            'teeth' => $teeth,
        ]);
    }


    /**
     * Save multiple teeth (batch)
     */
    public function updateBatch(Request $request, Patient $patient)
    {
        $data = $request->validate([
            'teeth' => 'required|array',
            'teeth.*' => 'string|in:healthy,caries,crown,abutment,implant,missing,extracted',
        ]);



        foreach ($data['teeth'] as $toothNumber => $status) {
            $patient->teeth()->updateOrCreate(
                ['tooth_number' => $toothNumber],
                ['status' => $status]
            );
        }

        return response()->json([
            'message' => 'Dental chart saved successfully',
        ]);
    }


    /**
     * Save single tooth (auto-save UX)
     */
    public function updateSingle(Request $request, Patient $patient)
    {

            try{
                $data = $request->validate([
                    'tooth_number' => 'required|integer|between:11,48',
                    'status' => 'required|in:healthy,caries,crown,abutment,implant,missing,extracted,rootCanal',
                    'note' => 'nullable|string',
                ]);

            PatientTooth::updateOrCreate(
                [
                    'patient_id' => $patient->id,
                    'tooth_number' => $data['tooth_number'],
                ],
                [
                    'status' => $data['status'],
                    'note' => $data['note'] ?? null,
                ]
            );

            return  back();
        }catch(\Exception $e){
             
            return back()->with('error' , 'An error occurred while saving the tooth data.');
        }
    }
}