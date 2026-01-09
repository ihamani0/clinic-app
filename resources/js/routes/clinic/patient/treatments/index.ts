import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::store
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:19
* @route '/clinic/patients/{patient}/treatments'
*/
export const store = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/clinic/patients/{patient}/treatments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::store
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:19
* @route '/clinic/patients/{patient}/treatments'
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
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::store
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:19
* @route '/clinic/patients/{patient}/treatments'
*/
store.post = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::update
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:92
* @route '/clinic/patients/{patient}/treatments/{treatment}'
*/
export const update = (args: { patient: string | number | { id: string | number }, treatment: string | number | { id: string | number } } | [patient: string | number | { id: string | number }, treatment: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/clinic/patients/{patient}/treatments/{treatment}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::update
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:92
* @route '/clinic/patients/{patient}/treatments/{treatment}'
*/
update.url = (args: { patient: string | number | { id: string | number }, treatment: string | number | { id: string | number } } | [patient: string | number | { id: string | number }, treatment: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            patient: args[0],
            treatment: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        patient: typeof args.patient === 'object'
        ? args.patient.id
        : args.patient,
        treatment: typeof args.treatment === 'object'
        ? args.treatment.id
        : args.treatment,
    }

    return update.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace('{treatment}', parsedArgs.treatment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::update
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:92
* @route '/clinic/patients/{patient}/treatments/{treatment}'
*/
update.put = (args: { patient: string | number | { id: string | number }, treatment: string | number | { id: string | number } } | [patient: string | number | { id: string | number }, treatment: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::markDone
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:68
* @route '/clinic/patients/{patient}/treatments/{treatmentStep}/done'
*/
export const markDone = (args: { patient: string | number | { id: string | number }, treatmentStep: string | number | { id: string | number } } | [patient: string | number | { id: string | number }, treatmentStep: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markDone.url(args, options),
    method: 'post',
})

markDone.definition = {
    methods: ["post"],
    url: '/clinic/patients/{patient}/treatments/{treatmentStep}/done',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::markDone
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:68
* @route '/clinic/patients/{patient}/treatments/{treatmentStep}/done'
*/
markDone.url = (args: { patient: string | number | { id: string | number }, treatmentStep: string | number | { id: string | number } } | [patient: string | number | { id: string | number }, treatmentStep: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            patient: args[0],
            treatmentStep: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        patient: typeof args.patient === 'object'
        ? args.patient.id
        : args.patient,
        treatmentStep: typeof args.treatmentStep === 'object'
        ? args.treatmentStep.id
        : args.treatmentStep,
    }

    return markDone.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace('{treatmentStep}', parsedArgs.treatmentStep.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::markDone
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:68
* @route '/clinic/patients/{patient}/treatments/{treatmentStep}/done'
*/
markDone.post = (args: { patient: string | number | { id: string | number }, treatmentStep: string | number | { id: string | number } } | [patient: string | number | { id: string | number }, treatmentStep: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markDone.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::complete
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:188
* @route '/clinic/patients/{patient}/treatments/{treatment}/complete'
*/
export const complete = (args: { patient: string | number, treatment: string | number | { id: string | number } } | [patient: string | number, treatment: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

complete.definition = {
    methods: ["post"],
    url: '/clinic/patients/{patient}/treatments/{treatment}/complete',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::complete
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:188
* @route '/clinic/patients/{patient}/treatments/{treatment}/complete'
*/
complete.url = (args: { patient: string | number, treatment: string | number | { id: string | number } } | [patient: string | number, treatment: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            patient: args[0],
            treatment: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        patient: args.patient,
        treatment: typeof args.treatment === 'object'
        ? args.treatment.id
        : args.treatment,
    }

    return complete.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace('{treatment}', parsedArgs.treatment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::complete
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:188
* @route '/clinic/patients/{patient}/treatments/{treatment}/complete'
*/
complete.post = (args: { patient: string | number, treatment: string | number | { id: string | number } } | [patient: string | number, treatment: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::cancel
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:213
* @route '/clinic/patients/{patient}/treatments/{treatment}/cancel'
*/
export const cancel = (args: { patient: string | number, treatment: string | number | { id: string | number } } | [patient: string | number, treatment: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/clinic/patients/{patient}/treatments/{treatment}/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::cancel
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:213
* @route '/clinic/patients/{patient}/treatments/{treatment}/cancel'
*/
cancel.url = (args: { patient: string | number, treatment: string | number | { id: string | number } } | [patient: string | number, treatment: string | number | { id: string | number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            patient: args[0],
            treatment: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        patient: args.patient,
        treatment: typeof args.treatment === 'object'
        ? args.treatment.id
        : args.treatment,
    }

    return cancel.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace('{treatment}', parsedArgs.treatment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::cancel
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:213
* @route '/clinic/patients/{patient}/treatments/{treatment}/cancel'
*/
cancel.post = (args: { patient: string | number, treatment: string | number | { id: string | number } } | [patient: string | number, treatment: string | number | { id: string | number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

const treatments = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    markDone: Object.assign(markDone, markDone),
    complete: Object.assign(complete, complete),
    cancel: Object.assign(cancel, cancel),
}

export default treatments