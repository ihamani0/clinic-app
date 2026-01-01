<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    // Auto-convert dates for React
    protected $casts = [
        'start' => 'datetime',
        'end' => 'datetime',
    ];

    public function patient() { return $this->belongsTo(Patient::class); }
    public function doctor() { return $this->belongsTo(User::class, 'user_id'); }
    public function type() { return $this->belongsTo(AppointmentType::class, 'appointment_type_id'); }

    public function creator() { return $this->belongsTo(User::class , 'created_by'); }

    //
}
