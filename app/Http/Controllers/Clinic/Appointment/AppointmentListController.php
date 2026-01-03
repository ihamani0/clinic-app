<?php


namespace App\Http\Controllers\Clinic\Appointment;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Appointment;



class AppointmentListController extends Controller {


    public function index(Request $request){

                $tab = $request->get('tab', 'today');

                $query = Appointment::query()
                        ->with(['patient' , 'doctor', 'type.category' , 'creator'])
                        ->latest('start');

                if($tab === 'today'){

                    $today = Carbon::today();
                    $query->whereDate('start' , $today);

                }elseif($tab === 'upcoming'){

                    $query->whereDate('start', '>', Carbon::today());

                }elseif ($tab === 'completed') {

                    $query->where('status', 'completed');

                }elseif ($tab === 'past') { 
                    // Option A: Appointments that happened before today (not deleted)
                    $query->whereDate('start', '<', Carbon::today());

                } elseif ($tab === 'archived') {
                    $query->onlyTrashed();
                }

                // Filters
                if ($request->filled('search')) {

                    $search = $request->get('search');

                    $query->whereHas('patient', function ($q) use ($search) {

                        $q->whereRaw("LOWER(first_name || ' ' || last_name) LIKE ?", ['%'.strtolower($search).'%'])
                            ->orWhere('phone', 'like', "%{$search}%");
                        });
                }


                if ($request->filled('doctor_id')) {
                    $query->where('user_id', $request->get('doctor_id'));
                }


                if ($request->filled('status')) {
                    $query->where('status', $request->get('status'));
                }



                if ($request->filled('date_from')) {
                    $query->whereDate('start', '>=', $request->get('date_from'));
                }
                if ($request->filled('date_to')) {
                    $query->whereDate('start', '<=', $request->get('date_to'));
                }

                $appointments = $query->get();

                $doctors = \App\Models\User::role('doctor')->get(['id', 'name']);



        return Inertia::render('Clinic/Appointments/List/appointment-list' ,[
            'appointments' => $appointments,
            'doctors' => $doctors,
            'filters' => $request->only(['search','doctor_id','status','tab']),
            'activeTab' => $request->tab ?? 'today'
        ]);
    }

    public function action(Request $request){

            $request->validate([
                'id' => 'required|exists:appointments,id',
                'action' => 'required|string'
            ]);


        $appointment = Appointment::findOrFail($request->id);


        switch ($request->action) {
            case 'confirm':
                $appointment->update(['status' => 'confirmed']);
                break;
            case 'checkin':
                $appointment->update(['status' => 'seated']);
                break;
            case 'complete':
                $appointment->update(['status' => 'completed']);
                break;
            case 'cancel':
                $appointment->update(['status' => 'cancelled']);
                break;
            case 'miss':
                $appointment->update(['status' => 'missed']);
                break;
            default:
                return back()->with('error', 'Unknown action');
        }
         return back()->with('success', 'Appointment updated.');
    }
 

}
