import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::restore
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:261
* @route '/clinic/archive/patient/restore/{patient}'
*/
export const restore = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(args, options),
    method: 'post',
})

restore.definition = {
    methods: ["post"],
    url: '/clinic/archive/patient/restore/{patient}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::restore
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:261
* @route '/clinic/archive/patient/restore/{patient}'
*/
restore.url = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return restore.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::restore
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:261
* @route '/clinic/archive/patient/restore/{patient}'
*/
restore.post = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: restore.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::restore
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:261
* @route '/clinic/archive/patient/restore/{patient}'
*/
const restoreForm = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::restore
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:261
* @route '/clinic/archive/patient/restore/{patient}'
*/
restoreForm.post = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: restore.url(args, options),
    method: 'post',
})

restore.form = restoreForm

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::forceDelete
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:272
* @route '/clinic/archive/patient/force-delete/{patient}'
*/
export const forceDelete = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

forceDelete.definition = {
    methods: ["delete"],
    url: '/clinic/archive/patient/force-delete/{patient}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::forceDelete
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:272
* @route '/clinic/archive/patient/force-delete/{patient}'
*/
forceDelete.url = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return forceDelete.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::forceDelete
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:272
* @route '/clinic/archive/patient/force-delete/{patient}'
*/
forceDelete.delete = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::forceDelete
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:272
* @route '/clinic/archive/patient/force-delete/{patient}'
*/
const forceDeleteForm = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::forceDelete
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:272
* @route '/clinic/archive/patient/force-delete/{patient}'
*/
forceDeleteForm.delete = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: forceDelete.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

forceDelete.form = forceDeleteForm

const archive = {
    restore: Object.assign(restore, restore),
    forceDelete: Object.assign(forceDelete, forceDelete),
}

export default archive