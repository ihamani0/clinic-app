<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TreatmentTeeth extends Model
{
    //
    protected $fillable = [
        'treatment_id',
        'tooth_number',
    ];

    public function treatment()
    {
        return $this->belongsTo(Treatment::class);
    }
}
