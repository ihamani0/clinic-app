<?php

namespace App\Http\Controllers\Clinic\Appointment;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePatientRequest;
use App\Http\Resources\Clinic\AppointmentResource;
use App\Models\Appointment;
use App\Models\AppointmentCategory;
use App\Models\Patient;
use App\Models\User;
use App\Rules\NoDoctorOverlap;
use Carbon\Carbon;
use Error;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{

    public function index(Request $request){


         // 1. Get Doctors (Resources)
        $doctors = User::role('doctor')->get()->map(function($doc) {
            return [
                'id' => $doc->id,
                'title' => $doc->name,
                // Check if they have a provider profile for color, else default
                'eventColor' => $doc->providerProfile->color_code ?? '#3788d8'
            ];
        });

         // 3. Data for the " Dialoge Form"
        $patients = Patient::select('id', 'first_name', 'last_name')->get();

        $categories = AppointmentCategory::with('types')->get();


        return Inertia::render('Clinic/Appointments/Index', [
            'doctors' => $doctors,
            // 'events' => $events->collection,
            'patients' => $patients,
            'categories' => $categories
        ]);


    }


    public function fetchEvents(Request $request){


        // FullCalendar automatically sends 'start' and 'end' parameters
        $start = $request->start_time;
        $end = $request->end_time;

        $appointments = Appointment::with(['patient', 'type.category' , 'creator'])
                    ->where('start', '>=', $start) // Fetch from start date...
                    ->where('end', '<=', $end)     // ...to end date
                    ->get();

        // Use your existing Resource to format the data
        return  response()->json(AppointmentResource::collection($appointments));

    }




    public function create(){

        $doctors = User::role('doctor')->get()->map(function($doc) {
            return [
                'id' => $doc->id,
                'name' => $doc->name,
                // Check if they have a provider profile for color, else default
                'color' => $doc->providerProfile->color_code ?? '#3788d8'
            ];
        });

         // 3. Data for the " Dialoge Form"
        $patients = Patient::select('id', 'first_name', 'last_name')->get();

        $categories = AppointmentCategory::with('types')->get();


        return Inertia::render('Clinic/Appointments/Create', [
            'doctors' => $doctors,
            // 'events' => $events->collection,
            'patients' => $patients,
            'categories' => $categories
        ]);

    }
    public function store(Request $request){

        $validated = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:users,id',
            'appointment_type_id' => 'required|exists:appointment_types,id',
            'start' => 'required|date|after_or_equal:now',
            'duration' => [
            'required',
            'integer',
            'min:15',
            'max:480',
            new NoDoctorOverlap($request->doctor_id, $request->start, $request->duration) // Pass duration
            ],
            'note' => 'nullable|string|max:500',
            ]);



            $start = Carbon::parse($validated['start'])->timezone('Africa/Algiers');
            $end = $start->copy()->addMinutes($validated['duration']);

        // dd($start , $end);

        $appointment = Appointment::create([
            'patient_id' => $validated['patient_id'],
            'user_id' => $validated['doctor_id'],
            'appointment_type_id' => $validated['appointment_type_id'],
            'start' => $start->format('Y-m-d H:i:s'),
            'duration' => $validated['duration'],
            'end' => $end->format('Y-m-d H:i:s'),
            'note' => $validated['note'] ?? null,
            'status' => 'scheduled',
            'created_by' => auth()->id(),
        ]);

        //Save Provider for each Patient From First Appoitment 
        if($appointment->patient->primary_provider_id === null){
                $appointment->patient->update([
                    'primary_provider_id' => $validated['doctor_id'],
                ]);
        }

        return redirect()->route('clinic.appointments.index')->with('success', 'Appointment created successfully.');
    }



    public function create_patient(StorePatientRequest $request){

        // dd($request->validated());

        $patient = Patient::create($request->validated());


        return redirect()->back()->with([
            'newPatient' => $patient
        ]);

        // return

    }




    public function show(Appointment $appointment){

         
        $appointment->load(['patient', 'doctor', 'type.category', 'creator']);

         
        return Inertia::render('Clinic/Appointments/Show',
            [
                'app' => $appointment
            ]);
    }


    public function edit(Appointment $appointment){

        $appointment->load(['patient', 'doctor', 'type.category','creator']);


        $doctors = User::role('doctor')->get()->map(function($doc) {
            return [
                'id' => $doc->id,
                'name' => $doc->name,
            ];
        });

        $categories = AppointmentCategory::with('types')->get();
         
        return Inertia::render('Clinic/Appointments/Edit',
            [
                'appointment' => $appointment ,
                'doctors' => $doctors,
                'categories'=>$categories,
            ]);
    }



    public function update(Request $request, Appointment $appointment){


        $validated = $request->validate([
            'doctor_id' => 'required|exists:users,id',
            'appointment_type_id' => 'required|exists:appointment_types,id',
            'start' => 'required|date|after_or_equal:now', // ✅ prevents past
            'duration' => [
                'required',
                'integer',
                'min:15',
                'max:480',
                new NoDoctorOverlap($request->doctor_id, $request->start, $request->duration, $appointment->id), // pass appointment id to exclude self
            ],
            'note' => 'nullable|string|max:500',
        ]);

        $start = Carbon::parse($validated['start'])->timezone('Africa/Algiers');
        $end = $start->copy()->addMinutes($validated['duration']);

        $appointment->update([
            'user_id' => $validated['doctor_id'],
            'appointment_type_id' => $validated['appointment_type_id'],
            'start' => $start->format('Y-m-d H:i:s'),
            'duration' => $validated['duration'],
            'end' => $end->format('Y-m-d H:i:s'),
            'note' => $validated['note'] ?? null,
            'status' => $appointment->status,
            // status stays as-is
        ]);

        return redirect()->route('clinic.appointments.show' , $appointment->id )
         ->with('success', 'Appointment updated successfully.');
    }


    public function byBirthday(Request $request)
    {
        $date = $request->query('birthday');

        if (!$date) {
            return response()->json(['error' => 'Date parameter is required.'], 400);
        }

        try {
            $parsedDate = Carbon::parse($date);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Invalid date format.'], 400);
        }

        $month = $parsedDate->month;
        $day = $parsedDate->day;

        $patients = Patient::whereMonth('dob', $month)
            ->whereDay('dob', $day)
            ->orderBy('first_name')
            ->get();

        return response()->json($patients);
    }
}
