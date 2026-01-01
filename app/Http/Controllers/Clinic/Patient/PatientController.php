<?php

namespace App\Http\Controllers\Clinic\Patient;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePatientRequest;
use App\Models\Patient;
use App\Models\PatientTooth;
use App\Rules\UniqueFullName;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $query = Patient::query();

        if($request->filled('search')){
            $search = strtolower($request->search);
            $query->whereRaw('LOWER(name) LIKE ?', ["%{$search}%"]);
        }

         $patients = $query->paginate($request->get('per_page', 15))
                    ->appends($request->only('search'));


         
        return Inertia::render('Clinic/Patients/Index' , [
            "patients"=>$patients ,
            'filters'=>$request->only(['search' , 'per_page']),
        ]);
        
    }

   
    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePatientRequest $request)
    {

        
        $validated = $request->validated();

        // Or even better: cast it to a Carbon instance at midnight UTC
        
        Patient::create($validated);

        return redirect()->route('clinic.patient.index')->with('success', 'Patient Created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Patient $patient)
    {
        $patient->load([
                'teeth' => fn ($q) =>
                    $q->select(
                        'id',
                        'patient_id',
                        'tooth_number',
                        'status',
                        'note'
                    )->orderBy('tooth_number'),
                'treatments' => fn ($q) =>
                    $q->latest()->limit(50),
            ]);

        return Inertia::render('Clinic/Patients/show-patient', [
                
            'patient' => [
                    'id' => $patient->id,
                    'first_name' => $patient->first_name,
                    'last_name' => $patient->last_name,
                    'gender' => $patient->gender,
                    'dob' => $patient->dob,
                    'phone' => $patient->phone,
                    'email' => $patient->email,
                    'address' => $patient->address,

                    // ✅ aggregate children
                    'teeth' => $patient->teeth->map(fn ($tooth) => [
                        'number' => $tooth->tooth_number,
                        'status' => $tooth->status,
                        'note' => $tooth->note,
                    ]),

                    'treatments' => $patient->treatments->map(fn ($t) => [
                        'id' => $t->id,
                        'title' => $t->title,
                        'description' => $t->description,
                        'status' => $t->status,
                        'paid'=> $t->paid,
                        'remaining'=> $t->remainingAmount(),
                        'price' => $t->price,
                        'created_at' => $t->created_at->toDateString(),
                        'steps'=> $t->steps->map(fn($step) => [
                            'id' => $step->id,
                            'title' => $step->title,
                            'cost' => $step->cost,
                            'note' => $step->note,
                            'status' => $step->status,
                        ]),

                        // Adding teeth info
                        'teeth' => $t->teeth->map(fn($tooth)=>[
                            'id' => $tooth->id,
                            'tooth_number' => $tooth->tooth_number,
                        ])
                    ])
                ]
            
            ]);

            
}
 
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        try{
            $validated = $request->validate(
            [
            'first_name' => 'required|string',
            'last_name'  => [
                'required',
                new UniqueFullName(
                    $request->first_name,
                    $request->last_name,
                    $id // because this is store (create)
                )
            ],
            'phone' => 'required|string|regex:/^\+?[0-9\s\-\(\)]{10,20}$/',
            'email' => 'nullable|string|email|max:255',
            'dob' => 'nullable',
            'address' => 'nullable|string|min:5|max:255',
            'gender' => 'required|in:male,female',
                ]
            );
 

        $patient = Patient::findOrFail($id);

        $patient->update($validated);

        return redirect()->route('clinic.patient.index')->with('success','Patient Update successfully ');

        }catch(\Exception $e){
             
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
