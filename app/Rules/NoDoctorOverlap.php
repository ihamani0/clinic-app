<?php

namespace App\Rules;

use App\Models\Appointment;
use Carbon\Carbon;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NoDoctorOverlap implements ValidationRule
{
    protected $doctorId;
    protected $start;
    protected $end;

    protected $excludeId;


    public function __construct($doctorId, $start, $duration , $excludeId = null)
    {
        $this->doctorId = $doctorId;
        $this->start = Carbon::parse($start)->timezone('Africa/Algiers');
        $this->end = $this->start->copy()->addMinutes($duration); // Calculate end

        $this->excludeId = $excludeId;
    }
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
         $query = Appointment::where('user_id', $this->doctorId)
                ->where(function ($q) {
                    $q->whereBetween('start', [$this->start, $this->end])
                      ->orWhereBetween('end', [$this->start, $this->end])
                      ->orWhere(function ($q2) {
                          $q2->where('start', '<=', $this->start)
                             ->where('end', '>=', $this->end);
                      });
                });

        if ($this->excludeId) {
            $query->where('id', '!=', $this->excludeId);
        }

        if ($query->exists()) {
            $fail('Ce docteur a déjà un rendez-vous sur ce créneau.');
        }
    }
}
