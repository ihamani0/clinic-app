<?php

namespace App\Rules;

use Closure;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;

class UniqueFullName implements ValidationRule
{
    private $first_name;
    private $last_name;
    private $ignore_id;


    public function __construct(?string $firstName , ?string $lastName , ?int $ignoreId=null)
    {
        $this->first_name = strtolower($firstName);
        $this->last_name = strtolower($lastName);
        $this->ignore_id = $ignoreId;
    }


    public function validate(string $attribute, mixed $value, Closure $fail): void
    {

        if (empty($this->first_name) || empty($value)) {
            $fail('This Filled  is Required.'); ; // or false? But better to let 'required' handle missing fields
        }

        $exists = DB::table('patients')
            ->whereRaw('LOWER(first_name) = ?', [$this->first_name])
            ->whereRaw('LOWER(last_name) = ?', [$this->last_name])
            ->when($this->ignore_id, fn($query) =>
                $query->where('id', '!=', $this->ignore_id)
            )
            ->exists();

        if ($exists) {
            $fail('This full name already exists in our records.');
        }
    }
}
