import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::index
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
* @route '/clinic/patients/{patient}/teeth'
*/
export const index = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/clinic/patients/{patient}/teeth',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::index
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
* @route '/clinic/patients/{patient}/teeth'
*/
index.url = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return index.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::index
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
* @route '/clinic/patients/{patient}/teeth'
*/
index.get = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::index
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
* @route '/clinic/patients/{patient}/teeth'
*/
index.head = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::index
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
* @route '/clinic/patients/{patient}/teeth'
*/
const indexForm = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::index
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
* @route '/clinic/patients/{patient}/teeth'
*/
indexForm.get = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::index
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
* @route '/clinic/patients/{patient}/teeth'
*/
indexForm.head = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateBatch
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:31
* @route '/clinic/patients/{patient}/teeth/batch'
*/
export const updateBatch = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
updateBatch.url = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
updateBatch.post = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateBatch.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateBatch
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:31
* @route '/clinic/patients/{patient}/teeth/batch'
*/
const updateBatchForm = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateBatch.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateBatch
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:31
* @route '/clinic/patients/{patient}/teeth/batch'
*/
updateBatchForm.post = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateBatch.url(args, options),
    method: 'post',
})

updateBatch.form = updateBatchForm

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateSingle
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:56
* @route '/clinic/patients/{patient}/teeth/single'
*/
export const updateSingle = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
updateSingle.url = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
updateSingle.post = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateSingle.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateSingle
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:56
* @route '/clinic/patients/{patient}/teeth/single'
*/
const updateSingleForm = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSingle.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::updateSingle
* @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:56
* @route '/clinic/patients/{patient}/teeth/single'
*/
updateSingleForm.post = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateSingle.url(args, options),
    method: 'post',
})

updateSingle.form = updateSingleForm

const PatientToothController = { index, updateBatch, updateSingle }

export default PatientToothController