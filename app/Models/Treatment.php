<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Treatment extends Model
{
    //
    protected $fillable = [
            'patient_id',
            'doctor_id',
            'title',
            'description',
            'status',
            'price',
            'paid',
        ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }


    public function teeth()
    {
        return $this->hasMany(TreatmentTeeth::class);
    }

    public function steps()
    {
        return $this->hasMany(TreatmentStep::class);
    }


    //helper function 
    public function calculateTotalCost(){
        $total = $this->steps()->sum('cost');
        $this->price = $total;
        $this->save();
        return $total;
    }


    // paid amount me make it dynamic
    // public function calculatePaidAmount(){
    //     $paidAmount = $this->steps()->where('status' , 'done')->sum('cost');
    //     $this->paid = $paidAmount;
    //     $this->save();
    //     return $paidAmount;
    // }


    public function remainingAmount(){
        return $this->price - $this->paid;
    }

    public function reCalculateStatus(){
        $totalSteps = $this->steps()->count();
        $totalStepsDone = $this->steps()->where('status' , 'done')->count();


        if($totalStepsDone == 0){
            $this->status = 'planned';
        }elseif($totalSteps == 0){
            $this->status = 'planned';
        }elseif($totalStepsDone < $totalSteps){
            $this->status = 'in_progress'; 
        }else{
            $this->status = 'completed';  
            $this->completed_at = now();
            $this->teeth()->each(function($tooth){
                // Update the tooth status
                PatientTooth::updateOrCreate(
                    [
                        'patient_id' => $this->patient_id,
                        'tooth_number' => $tooth->tooth_number,
                    ],
                    [
                        'status' => $this->mapTreatmentToToothStatus($this->title),
                    ]
                );
            });

            
        }

    }

    public function isLocked(){
        return $this->paid > 0;
    }


    private function mapTreatmentToToothStatus(string $title): string
    {
        return match (true) {
            str_contains(strtolower($title), 'implant') => 'implant',
            str_contains(strtolower($title), 'crown') => 'crown',
            str_contains(strtolower($title), 'coronne') => 'crown',
            str_contains(strtolower($title), 'abutment') => 'abutment',
            str_contains(strtolower($title), 'missing') => 'missing',
            str_contains(strtolower($title), 'extracted') => 'extracted',
            default => 'healthy',
        };
    }
    
}
