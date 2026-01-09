import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::deleteMethod
* @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:28
* @route '/clinic/patients/{patient}/media/{media}'
*/
export const deleteMethod = (args: { patient: string | number | { id: string | number }, media: string | number } | [patient: string | number | { id: string | number }, media: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/clinic/patients/{patient}/media/{media}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::deleteMethod
* @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:28
* @route '/clinic/patients/{patient}/media/{media}'
*/
deleteMethod.url = (args: { patient: string | number | { id: string | number }, media: string | number } | [patient: string | number | { id: string | number }, media: string | number ], options?: RouteQueryOptions) => {
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

    return deleteMethod.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace('{media}', parsedArgs.media.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientMediaController::deleteMethod
* @see app/Http/Controllers/Clinic/Patient/PatientMediaController.php:28
* @route '/clinic/patients/{patient}/media/{media}'
*/
deleteMethod.delete = (args: { patient: string | number | { id: string | number }, media: string | number } | [patient: string | number | { id: string | number }, media: string | number ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const media = {
    store: Object.assign(store, store),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default media