<?php

use App\Http\Controllers\Clinic\Appointment\AppointmentController;
use App\Http\Controllers\Clinic\Appointment\AppointmentListController;
use App\Http\Controllers\Clinic\Patient\PatientController;
use App\Http\Controllers\Clinic\Patient\PatientMediaController;
use App\Http\Controllers\Clinic\Patient\PatientPaymentController;
use App\Http\Controllers\Clinic\Patient\PatientToothController;
use App\Http\Controllers\Clinic\Patient\TreatmentController;
use Illuminate\Support\Facades\Route;




Route::middleware(['auth', 'verified'])->prefix('clinic')->name('clinic.')->group(function () {



    Route::get('/appointments', [App\Http\Controllers\Clinic\Appointment\AppointmentController::class, 'index'])->name('appointments.index');


    Route::get('/appointments/create', [App\Http\Controllers\Clinic\Appointment\AppointmentController::class, 'create'])->name('appointments.create');

    Route::post('/appointments', [App\Http\Controllers\Clinic\Appointment\AppointmentController::class, 'store'])->name('appointments.store');


    Route::post('/appointments/create-patient' , [App\Http\Controllers\Clinic\Appointment\AppointmentController::class, 'create_patient'])->name('appointments.create.patient');




    Route::get('/appointments/list', [App\Http\Controllers\Clinic\Appointment\AppointmentListController::class, 'index'])->name('appointments.list.index');


    Route::post('/appointments/action', [AppointmentListController::class, 'action'])->name('appointments.list.action');


    Route::get('/appointments/fetch/events' , [AppointmentController::class , 'fetchEvents'])
        ->name('appointments.fetch.events');


    Route::get('/appointments/{appointment}', [App\Http\Controllers\Clinic\Appointment\AppointmentController::class, 'show'])->name('appointments.show');


    Route::get('/appointments/{appointment}/edit', [App\Http\Controllers\Clinic\Appointment\AppointmentController::class, 'edit'])->name('appointments.edit');

    Route::put('/appointments/{appointment}', [App\Http\Controllers\Clinic\Appointment\AppointmentController::class, 'update'])->name('appointments.update');



    Route::resource('patient' , PatientController::class);



    Route::get('/archive/patient', [PatientController::class, 'archive_index'])
        ->name('patient.archive');

    Route::post('/archive/patient/restore/{patient}', [PatientController::class, 'archive_restore'])
        ->name('patient.archive.restore')->withTrashed();

    Route::delete('/archive/patient/force-delete/{patient}', [PatientController::class, 'forceDelete'])
    ->name('patient.archive.forceDelete')->withTrashed();




    // Tooth

    Route::prefix('patients/{patient}')->group(function () {

            Route::get('/teeth', [PatientToothController::class, 'index'])
                ->name('patient.teeth');

            Route::post('/teeth/batch', [PatientToothController::class, 'updateBatch'])
                ->name('patient.teeth.updateBatch');

            Route::post('/teeth/single', [PatientToothController::class, 'updateSingle'])
                ->name('patient.teeth.updateSingle');


            // Traitments
            Route::post('/treatments', [TreatmentController::class, 'store'])
                ->name('patient.treatments.store');
            // Traitments update
            Route::put('/treatments/{treatment}' ,[TreatmentController::class, 'update'])
                ->name('patient.treatments.update');

            Route::post('/treatments/{treatmentStep}/done', [TreatmentController::class, 'markDone'])
                ->name('patient.treatments.markDone');


            Route::post('/treatments/{treatment}/complete', [TreatmentController::class, 'complete'])       
                ->name('patient.treatments.complete');

            Route::post('/treatments/{treatment}/cancel', [TreatmentController::class, 'cancel'])
                ->name('patient.treatments.cancel');

        //Media
            Route::post('/upload', [PatientMediaController::class, 'store'])
                ->name('patient.media.store');


        Route::delete('/media/{media}', [PatientMediaController::class, 'destroy'])
            ->name('patient.media.delete');


        }); // finish prefix 

        



        Route::post('/finances/payments', [PatientPaymentController::class, 'store'])
            ->name('patient.finances.payments.store');

 


});
 