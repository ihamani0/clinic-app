import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::store
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:19
* @route '/clinic/patients/{patient}/treatments'
*/
export const store = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
store.url = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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
store.post = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::store
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:19
* @route '/clinic/patients/{patient}/treatments'
*/
const storeForm = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::store
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:19
* @route '/clinic/patients/{patient}/treatments'
*/
storeForm.post = (args: { patient: number | { id: number } } | [patient: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(args, options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::update
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:92
* @route '/clinic/patients/{patient}/treatments/{treatment}'
*/
export const update = (args: { patient: number | { id: number }, treatment: number | { id: number } } | [patient: number | { id: number }, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
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
update.url = (args: { patient: number | { id: number }, treatment: number | { id: number } } | [patient: number | { id: number }, treatment: number | { id: number } ], options?: RouteQueryOptions) => {
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
update.put = (args: { patient: number | { id: number }, treatment: number | { id: number } } | [patient: number | { id: number }, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::update
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:92
* @route '/clinic/patients/{patient}/treatments/{treatment}'
*/
const updateForm = (args: { patient: number | { id: number }, treatment: number | { id: number } } | [patient: number | { id: number }, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::update
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:92
* @route '/clinic/patients/{patient}/treatments/{treatment}'
*/
updateForm.put = (args: { patient: number | { id: number }, treatment: number | { id: number } } | [patient: number | { id: number }, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::markDone
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:68
* @route '/clinic/patients/{patient}/treatments/{treatmentStep}/done'
*/
export const markDone = (args: { patient: number | { id: number }, treatmentStep: number | { id: number } } | [patient: number | { id: number }, treatmentStep: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
markDone.url = (args: { patient: number | { id: number }, treatmentStep: number | { id: number } } | [patient: number | { id: number }, treatmentStep: number | { id: number } ], options?: RouteQueryOptions) => {
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
markDone.post = (args: { patient: number | { id: number }, treatmentStep: number | { id: number } } | [patient: number | { id: number }, treatmentStep: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: markDone.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::markDone
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:68
* @route '/clinic/patients/{patient}/treatments/{treatmentStep}/done'
*/
const markDoneForm = (args: { patient: number | { id: number }, treatmentStep: number | { id: number } } | [patient: number | { id: number }, treatmentStep: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markDone.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::markDone
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:68
* @route '/clinic/patients/{patient}/treatments/{treatmentStep}/done'
*/
markDoneForm.post = (args: { patient: number | { id: number }, treatmentStep: number | { id: number } } | [patient: number | { id: number }, treatmentStep: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: markDone.url(args, options),
    method: 'post',
})

markDone.form = markDoneForm

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::complete
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:188
* @route '/clinic/patients/{patient}/treatments/{treatment}/complete'
*/
export const complete = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
complete.url = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions) => {
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
complete.post = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: complete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::complete
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:188
* @route '/clinic/patients/{patient}/treatments/{treatment}/complete'
*/
const completeForm = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::complete
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:188
* @route '/clinic/patients/{patient}/treatments/{treatment}/complete'
*/
completeForm.post = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: complete.url(args, options),
    method: 'post',
})

complete.form = completeForm

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::cancel
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:213
* @route '/clinic/patients/{patient}/treatments/{treatment}/cancel'
*/
export const cancel = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
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
cancel.url = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions) => {
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
cancel.post = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::cancel
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:213
* @route '/clinic/patients/{patient}/treatments/{treatment}/cancel'
*/
const cancelForm = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\TreatmentController::cancel
* @see app/Http/Controllers/Clinic/Patient/TreatmentController.php:213
* @route '/clinic/patients/{patient}/treatments/{treatment}/cancel'
*/
cancelForm.post = (args: { patient: string | number, treatment: number | { id: number } } | [patient: string | number, treatment: number | { id: number } ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, options),
    method: 'post',
})

cancel.form = cancelForm

const TreatmentController = { store, update, markDone, complete, cancel }

export default TreatmentController