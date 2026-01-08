<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Patient extends Model implements HasMedia
{
    use InteractsWithMedia ,SoftDeletes;

    protected $fillable = [
        'first_name', 'last_name', 'dob', 'gender', 'phone',
        'medical_history', 'medical_alert',
        'blood_type','primary_provider_id',
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

    public function payments()
    {
        return $this->hasMany(PaymentTreatment::class);
    }





    public function registerMediaCollections(): void
    {
                // 👤 Profile photo (ONLY ONE)
        $this->addMediaCollection('profile')
            ->useDisk('public')
            ->singleFile();
            
        $this->addMediaCollection('xrays')->useDisk('public');
        $this->addMediaCollection('reports')->useDisk('public');
        $this->addMediaCollection('photos')->useDisk('public');
    }

    // public function 

    // public function totalCostForPatient(){
    //     return $this->treatments->sum(fn ($t) => $t->TotalCostForTreatments());
    // }

    // public function totalDueForPatient(): float
    // {
    //     return $this->treatments->sum(fn ($t) => $t->remainingAmount());
    // }

    // public function totalPaidForPatient(): float
    // {
    //     return $this->payments()->sum('amount');
    // }

    public function getTotalCostForPatient() {
    // Sum the cost of ALL steps of ALL treatments
    return $this->treatments->sum(fn($t) => $t->total_cost);
    }

    public function totalPaidForPatient(): float {
        // Sum ALL payments belonging to this patient
        return $this->payments()->sum('amount');
    }

    public function totalDueForPatient(): float {
        return $this->getTotalCostForPatient() - $this->totalPaidForPatient();
    }

}
