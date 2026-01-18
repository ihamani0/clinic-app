import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:13
 * @route '/clinic/patients/{patient}/upload'
 */
export const store = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/clinic/patients/{patient}/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:13
 * @route '/clinic/patients/{patient}/upload'
 */
store.url = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { patient: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { patient: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    patient: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        patient: typeof args.patient === 'object'
                ? args.patient.id
                : args.patient,
                }

    return store.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:13
 * @route '/clinic/patients/{patient}/upload'
 */
store.post = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:13
 * @route '/clinic/patients/{patient}/upload'
 */
    const storeForm = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:13
 * @route '/clinic/patients/{patient}/upload'
 */
        storeForm.post = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::destroy
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:28
 * @route '/clinic/patients/{patient}/media/{media}'
 */
export const destroy = (args: { patient: string | number | { id: string | number }, media: string | number } | [patient: string | number | { id: string | number }, media: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/clinic/patients/{patient}/media/{media}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::destroy
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:28
 * @route '/clinic/patients/{patient}/media/{media}'
 */
destroy.url = (args: { patient: string | number | { id: string | number }, media: string | number } | [patient: string | number | { id: string | number }, media: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    patient: args[0],
                    media: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        patient: typeof args.patient === 'object'
                ? args.patient.id
                : args.patient,
                                media: args.media,
                }

    return destroy.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::destroy
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:28
 * @route '/clinic/patients/{patient}/media/{media}'
 */
destroy.delete = (args: { patient: string | number | { id: string | number }, media: string | number } | [patient: string | number | { id: string | number }, media: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::destroy
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:28
 * @route '/clinic/patients/{patient}/media/{media}'
 */
    const destroyForm = (args: { patient: string | number | { id: string | number }, media: string | number } | [patient: string | number | { id: string | number }, media: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::destroy
 * @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:28
 * @route '/clinic/patients/{patient}/media/{media}'
 */
        destroyForm.delete = (args: { patient: string | number | { id: string | number }, media: string | number } | [patient: string | number | { id: string | number }, media: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const PatientMediaController = { store, destroy }

export default PatientMediaController