import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::index
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:17
 * @route '/clinic/appointments/list'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/clinic/appointments/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::index
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:17
 * @route '/clinic/appointments/list'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::index
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:17
 * @route '/clinic/appointments/list'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::index
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:17
 * @route '/clinic/appointments/list'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::index
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:17
 * @route '/clinic/appointments/list'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::index
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:17
 * @route '/clinic/appointments/list'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::index
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:17
 * @route '/clinic/appointments/list'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::action
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:91
 * @route '/clinic/appointments/action'
 */
export const action = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(options),
    method: 'post',
})

action.definition = {
    methods: ["post"],
    url: '/clinic/appointments/action',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::action
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:91
 * @route '/clinic/appointments/action'
 */
action.url = (options?: RouteQueryOptions) => {
    return action.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::action
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:91
 * @route '/clinic/appointments/action'
 */
action.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: action.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::action
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:91
 * @route '/clinic/appointments/action'
 */
    const actionForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: action.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentListController::action
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentListController.php:91
 * @route '/clinic/appointments/action'
 */
        actionForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: action.url(options),
            method: 'post',
        })
    
    action.form = actionForm
const AppointmentListController = { index, action }

export default AppointmentListController