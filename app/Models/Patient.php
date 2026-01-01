<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable = [
        'first_name', 'last_name', 'dob', 'gender', 'phone',
        'medical_history', 'medical_alert',
        'blood_type',
        'assurance_type', 'assurance_number',
        'primary_provider_id', 'referral_source_id' , 'email' , "address"
    ];

    protected $casts = [
        'medical_history' => 'array',
        'dob' => 'date'
    ];

    // Helper for Full Name
    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn () => "{$this->first_name} {$this->last_name}",
        );
    }

    // Relationships
    public function primaryDentist()
    {
        return $this->belongsTo(User::class, 'primary_provider_id');
    }

    public function teeth()
    {
        return $this->hasMany(PatientTooth::class);
    }


    public function treatments()
    {
        return $this->hasMany(Treatment::class);
    }


}
