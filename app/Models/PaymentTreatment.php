<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaymentTreatment extends Model
{
    //

    protected $table="payment_treatments";

    protected $fillable = [
        "patient_id",
        "treatment_id",
        "treatment_step_id",
        "amount","method","note","paid_at","is_paid" , "created_by"
    ];


    protected $casts = [
        "paid_at"=> "date"
    ];

    public function creator(){
        return $this->belongsTo(User::class , "created_by" , "id");
    }

    public function step(){
        return $this->belongsTo(TreatmentStep::class , "treatment_step_id" , "id");
    }

    public function treatment(){
        return $this->belongsTo(TreatmentStep::class , "treatment_id" , "id");
    }
}
