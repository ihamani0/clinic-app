import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::index
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:19
* @route '/clinic/patient'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/clinic/patient',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::index
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:19
* @route '/clinic/patient'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::index
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:19
* @route '/clinic/patient'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::index
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:19
* @route '/clinic/patient'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::create
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
* @route '/clinic/patient/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/clinic/patient/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::create
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
* @route '/clinic/patient/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::create
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
* @route '/clinic/patient/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::create
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
* @route '/clinic/patient/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::store
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:50
* @route '/clinic/patient'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/clinic/patient',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::store
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:50
* @route '/clinic/patient'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::store
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:50
* @route '/clinic/patient'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::show
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:79
* @route '/clinic/patient/{patient}'
*/
export const show = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/clinic/patient/{patient}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::show
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:79
* @route '/clinic/patient/{patient}'
*/
show.url = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::show
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:79
* @route '/clinic/patient/{patient}'
*/
show.get = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::show
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:79
* @route '/clinic/patient/{patient}'
*/
show.head = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::edit
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
* @route '/clinic/patient/{patient}/edit'
*/
export const edit = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/clinic/patient/{patient}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::edit
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
* @route '/clinic/patient/{patient}/edit'
*/
edit.url = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { patient: args }
    }

    if (Array.isArray(args)) {
        args = {
            patient: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        patient: args.patient,
    }

    return edit.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::edit
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
* @route '/clinic/patient/{patient}/edit'
*/
edit.get = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::edit
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
* @route '/clinic/patient/{patient}/edit'
*/
edit.head = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::update
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:169
* @route '/clinic/patient/{patient}'
*/
export const update = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/clinic/patient/{patient}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::update
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:169
* @route '/clinic/patient/{patient}'
*/
update.url = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { patient: args }
    }

    if (Array.isArray(args)) {
        args = {
            patient: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        patient: args.patient,
    }

    return update.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::update
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:169
* @route '/clinic/patient/{patient}'
*/
update.put = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::update
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:169
* @route '/clinic/patient/{patient}'
*/
update.patch = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::destroy
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:222
* @route '/clinic/patient/{patient}'
*/
export const destroy = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/clinic/patient/{patient}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::destroy
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:222
* @route '/clinic/patient/{patient}'
*/
destroy.url = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::destroy
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:222
* @route '/clinic/patient/{patient}'
*/
destroy.delete = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive_index
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
* @route '/clinic/archive/patient'
*/
export const archive_index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: archive_index.url(options),
    method: 'get',
})

archive_index.definition = {
    methods: ["get","head"],
    url: '/clinic/archive/patient',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive_index
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
* @route '/clinic/archive/patient'
*/
archive_index.url = (options?: RouteQueryOptions) => {
    return archive_index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive_index
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
* @route '/clinic/archive/patient'
*/
archive_index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: archive_index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive_index
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
* @route '/clinic/archive/patient'
*/
archive_index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: archive_index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive_restore
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:261
* @route '/clinic/archive/patient/restore/{patient}'
*/
export const archive_restore = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: archive_restore.url(args, options),
    method: 'post',
})

archive_restore.definition = {
    methods: ["post"],
    url: '/clinic/archive/patient/restore/{patient}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive_restore
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:261
* @route '/clinic/archive/patient/restore/{patient}'
*/
archive_restore.url = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return archive_restore.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive_restore
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:261
* @route '/clinic/archive/patient/restore/{patient}'
*/
archive_restore.post = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: archive_restore.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::forceDelete
* @see app/Http/Controllers/Clinic/Patient/PatientController.php:272
* @route '/clinic/archive/patient/force-delete/{patient}'
*/
export const forceDelete = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
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
forceDelete.url = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
forceDelete.delete = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: forceDelete.url(args, options),
    method: 'delete',
})

const PatientController = { index, create, store, show, edit, update, destroy, archive_index, archive_restore, forceDelete }

export default PatientController