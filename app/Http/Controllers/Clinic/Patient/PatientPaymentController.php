<?php

namespace App\Http\Controllers\Clinic\Patient;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\PaymentTreatment;
use App\Models\TreatmentStep;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PatientPaymentController extends Controller
{
    public function store(Request $request, Patient $patient)
    {
         

        $data = $request->validate([
            'treatment_step_id' => 'required|exists:treatment_steps,id',
            'method' => 'required|in:cash,card,transfer',
        ]);

        $step = TreatmentStep::with('treatment')->findOrFail($data['treatment_step_id']);

        if ($step->is_paid) {
            abort(403, 'This step is already paid.');
        }

        DB::transaction(function () use ($step, $data) {

            PaymentTreatment::create([
                'patient_id' => $step->treatment->patient_id,
                'treatment_step_id' => $step->id,
                'amount' => $step->cost,
                'method' => $data['method'],
                'paid_at' => now(),
                'created_by' => Auth::user()->id ,
            ]);

            $step->is_paid = true;
            $step->save();



        });

        return back()->with('success', 'Payment recorded successfully');
    }
}
