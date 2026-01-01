<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TreatmentStep extends Model
{
    //

    protected $fillable = [
        'treatment_id',
        'title',
        'cost',
        'step_order',
        'note'
    ];

    protected $casts = [
        'is_paid' => 'boolean',
    ];

    public function treatment()
    {
        return $this->belongsTo(Treatment::class);
    }


    public function payments()
    {
        return $this->hasMany(PaymentTreatment::class);
    }

    public function isDone(){
        return $this->status === 'done';
    }

    
}
