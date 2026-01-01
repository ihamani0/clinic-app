<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppointmentType extends Model
{
    protected $guarded = [];
    public function category() { return $this->belongsTo(AppointmentCategory::class, 'appointment_category_id'); }
}
