<?php

namespace App\Http\Requests;

use App\Rules\UniqueFullName;
use Illuminate\Foundation\Http\FormRequest;

class StorePatientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {

        // return auth()->user()?->hasRole('receptionist') ?? false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string',
            'last_name'  => [
                'required',
                new UniqueFullName(
                    $this->first_name,
                    $this->last_name,
                    null // because this is store (create)
                )
            ],
            'phone' => 'required|string|regex:/^\+?[0-9\s\-\(\)]{10,20}$/',
            'email' => 'nullable|string|email|max:255',
            'dob' => 'nullable',
            'address' => 'nullable|string|min:5|max:255',
            'gender' => 'required|in:male,female',
        ];
    }
}
