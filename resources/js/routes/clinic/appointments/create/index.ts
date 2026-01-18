import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::patient
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:144
 * @route '/clinic/appointments/create-patient'
 */
export const patient = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: patient.url(options),
    method: 'post',
})

patient.definition = {
    methods: ["post"],
    url: '/clinic/appointments/create-patient',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::patient
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:144
 * @route '/clinic/appointments/create-patient'
 */
patient.url = (options?: RouteQueryOptions) => {
    return patient.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::patient
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:144
 * @route '/clinic/appointments/create-patient'
 */
patient.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: patient.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::patient
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:144
 * @route '/clinic/appointments/create-patient'
 */
    const patientForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: patient.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::patient
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:144
 * @route '/clinic/appointments/create-patient'
 */
        patientForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: patient.url(options),
            method: 'post',
        })
    
    patient.form = patientForm
const create = {
    patient: Object.assign(patient, patient),
}

export default create