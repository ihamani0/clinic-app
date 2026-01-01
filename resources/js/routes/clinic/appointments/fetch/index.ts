import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::events
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
 * @route '/clinic/appointments/fetch/events'
 */
export const events = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: events.url(options),
    method: 'get',
})

events.definition = {
    methods: ["get","head"],
    url: '/clinic/appointments/fetch/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::events
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
 * @route '/clinic/appointments/fetch/events'
 */
events.url = (options?: RouteQueryOptions) => {
    return events.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::events
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
 * @route '/clinic/appointments/fetch/events'
 */
events.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: events.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::events
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
 * @route '/clinic/appointments/fetch/events'
 */
events.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: events.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::events
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
 * @route '/clinic/appointments/fetch/events'
 */
    const eventsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: events.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::events
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
 * @route '/clinic/appointments/fetch/events'
 */
        eventsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: events.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::events
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
 * @route '/clinic/appointments/fetch/events'
 */
        eventsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: events.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    events.form = eventsForm
const fetch = {
    events: Object.assign(events, events),
}

export default fetch