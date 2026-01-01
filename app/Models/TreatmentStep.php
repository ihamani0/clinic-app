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


    public function treatment()
    {
        return $this->belongsTo(Treatment::class);
    }

    public function isDone(){
        return $this->status === 'done';
    }

    
}
