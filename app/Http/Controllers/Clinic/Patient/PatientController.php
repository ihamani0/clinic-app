<?php

namespace App\Http\Controllers\Clinic\Patient;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePatientRequest;
use App\Models\Patient;
use App\Models\PatientTooth;
use App\Rules\UniqueFullName;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
{
    $query = Patient::query();

    // Filter by Name
    if ($request->filled('search')) {
        $search = strtolower($request->search);
        $query->whereRaw('LOWER(First_name) LIKE ?', ["%{$search}%"])
        ->orWhereRaw('LOWER(Last_name) LIKE ?', ["%{$search}%"])
        ->orWhere('phone', 'LIKE', "%{$request->search}%");
    }

    // Filter by Birth Day (Exact date)
    if ($request->filled('dob')) {
        $query->whereDate('dob', $request->dob);
    }

    $patients = $query->latest() // Good practice to show newest patients first
                ->paginate($request->get('per_page', 15))
                ->appends($request->only(['search', 'dob', 'per_page']));

    return Inertia::render('Clinic/Patients/Index', [
        "patients" => $patients,
        'filters' => $request->only(['search', 'phone', 'dob', 'per_page']),
    ]);
}

   
    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePatientRequest $request)
    {

        
            // 1. Get validated data from your Request class
            $validated = $request->validated();

            // 2. Wrap in a transaction for data integrity
            $patient = DB::transaction(function () use ($validated, $request) {
                $patient = Patient::create($validated);

                // 3. Handle media inside the transaction
                if ($request->hasFile('photo')) {
                    $patient
                        ->addMediaFromRequest('photo')
                        ->toMediaCollection('profile');
                }

                return $patient;
            });

            return redirect()
                ->route('clinic.patient.index')
                ->with('success', 'Patient Created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Patient $patient)
    {
        // 1. Eager load everything in one go to prevent N+1 queries
            $patient->load([
                'teeth' => fn($q) => $q->orderBy('tooth_number'),
                'treatments.steps.treatment', // Nested eager loading
                'treatments.teeth',
                'payments.step.treatment' , 'payments.creator'
            ]);
        // 2. Get unpaid steps efficiently from the loaded treatments
            // We use flatMap to get all steps from all treatments, then filter
            $unpaidSteps = $patient->treatments->flatMap->steps->where('is_paid', false)
            ->where('status', 'done')
            ->groupBy('treatment_id')->map(function ($steps) {
                            return [
                                'treatment_title' => $steps->first()->treatment->title,
                                'steps' => $steps->values(),
                                'total_treatment_due' => $steps->sum('cost'),
                            ];
                        })->values();

         
                         
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
                    'photo' => $patient->getFirstMediaUrl('profile'),

                    //finance
                    'finance' => [
                            'totalCost' => $patient->getTotalCostForPatient(),
                            'paid' => $patient->totalPaidForPatient(),
                            'remaining' => $patient->totalDueForPatient(),
                            'payments' => $patient->payments, // Already loaded above
                            'unpaidSteps' => $unpaidSteps->values(), // Pass this to your React component!
                        ],

                    'teeth' => $patient->teeth,

                    'media' => [
                        'xrays' => $patient->getMedia('xrays'),
                        'reports' => $patient->getMedia('reports'),
                        'photos' => $patient->getMedia('photos'),
                    ],

                    'treatments' => $patient->treatments->map(fn($t) => [
                                    'id' => $t->id,
                                    'title' => $t->title,
                                    'description' => $t->description,
                                    'price' => $t->total_cost,
                                    'paid' => $t->total_paid,
                                    'remaining' => $t->remaining_amount,
                                    'status' => $t->status,
                                    'created_at' => $t->created_at->toDateString(),
                                    'steps' => $t->steps->map(fn($step) => [
                                        'id' => $step->id,
                                        'title' => $step->title,
                                        'status'=> $step->status,
                                        'cost' => $step->cost,
                                        'is_paid' => $step->is_paid, // Helpful for the UI
                                        'treatment' => [
                                            'id' => $step->treatment->id,
                                            'title' => $step->treatment->title,
                                        ]
                                    ]),

                                // Adding teeth info
                                'teeth' => $t->teeth->map(fn($tooth)=>[
                                    'id' => $tooth->id,
                                    'tooth_number' => $tooth->tooth_number,
                                ])
                            ])
                ] // end array
            
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
            'photo' => 'nullable|image|max:4096',

            ]
            );
 

        $patient = Patient::findOrFail($id);

        $patient->update($validated);




        // Only handle media if a new file was uploaded
        if ($request->hasFile('photo')) {
            $patient
                ->addMediaFromRequest('photo')
                ->toMediaCollection('profile'); 
                // Note: toMediaCollection() usually replaces the existing file 
                // if the collection is defined as 'singleFile' in your Model.
        }

        return redirect()->route('clinic.patient.index')->with('success','Patient Update successfully ');

        }catch(\Exception $e){
             
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
         
         $patient->delete();

        return redirect()
            ->route('clinic.patient.index')
            ->with('success', 'Patient archived successfully.');
    }




    public function archive_index(Request $request)
    {
        $query = Patient::onlyTrashed();

        if ($request->filled('search')) {
            $search = strtolower($request->search);
            $query->whereRaw('LOWER(First_name) LIKE ?', ["%{$search}%"])
            ->orWhereRaw('LOWER(Last_name) LIKE ?', ["%{$search}%"])
            ->orWhere('phone', 'LIKE', "%{$request->search}%");
        }

        // Filter by Birth Day (Exact date)
        if ($request->filled('dob')) {
            $query->whereDate('dob', $request->dob);
        }

        $patients = $query->latest() // Good practice to show newest patients first
                    ->paginate($request->get('per_page', 15))
                    ->appends($request->only(['search', 'dob', 'per_page']));

        return Inertia::render('Clinic/Patients/Archive/Index' , [
            "patients"=>$patients ,
            'filters'=>$request->only(['search' , 'per_page']),
        ]);
    }

    public function archive_restore(Patient $patient)
    {
        
        $patient->restore();

        return redirect()
            ->route('clinic.patient.index')
            ->with('success', 'Patient restored successfully.');
    }


    public function forceDelete(Patient $patient)
        {
            // This permanently removes the patient and their media
            $patient->forceDelete();

            return redirect()
                ->back()
                ->with('success', 'Patient permanently deleted.');
        }

}
