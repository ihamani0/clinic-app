import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::patient
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:142
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
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:142
* @route '/clinic/appointments/create-patient'
*/
patient.url = (options?: RouteQueryOptions) => {
    return patient.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::patient
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:142
* @route '/clinic/appointments/create-patient'
*/
patient.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: patient.url(options),
    method: 'post',
})

const create = {
    patient: Object.assign(patient, patient),
}

export default create