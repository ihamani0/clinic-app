import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateBatch
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:31
* @route '/clinic/patients/{patient}/teeth/batch'
*/
export const updateBatch = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateBatch.url(args, options),
    method: 'post',
})

updateBatch.definition = {
    methods: ["post"],
    url: '/clinic/patients/{patient}/teeth/batch',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateBatch
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:31
* @route '/clinic/patients/{patient}/teeth/batch'
*/
updateBatch.url = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateBatch.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateBatch
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:31
* @route '/clinic/patients/{patient}/teeth/batch'
*/
updateBatch.post = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateBatch.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateSingle
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:56
* @route '/clinic/patients/{patient}/teeth/single'
*/
export const updateSingle = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSingle.url(args, options),
    method: 'post',
})

updateSingle.definition = {
    methods: ["post"],
    url: '/clinic/patients/{patient}/teeth/single',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateSingle
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:56
* @route '/clinic/patients/{patient}/teeth/single'
*/
updateSingle.url = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return updateSingle.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateSingle
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:56
* @route '/clinic/patients/{patient}/teeth/single'
*/
updateSingle.post = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSingle.url(args, options),
    method: 'post',
})

const teeth = {
    updateBatch: Object.assign(updateBatch, updateBatch),
    updateSingle: Object.assign(updateSingle, updateSingle),
}

export default teeth