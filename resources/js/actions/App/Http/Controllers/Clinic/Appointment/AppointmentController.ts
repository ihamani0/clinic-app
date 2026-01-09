import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::index
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:21
* @route '/clinic/appointments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/clinic/appointments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::index
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:21
* @route '/clinic/appointments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::index
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:21
* @route '/clinic/appointments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::index
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:21
* @route '/clinic/appointments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::create
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:71
* @route '/clinic/appointments/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/clinic/appointments/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::create
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:71
* @route '/clinic/appointments/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::create
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:71
* @route '/clinic/appointments/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::create
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:71
* @route '/clinic/appointments/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::store
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:96
* @route '/clinic/appointments'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/clinic/appointments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::store
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:96
* @route '/clinic/appointments'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::store
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:96
* @route '/clinic/appointments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::create_patient
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:142
* @route '/clinic/appointments/create-patient'
*/
export const create_patient = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create_patient.url(options),
    method: 'post',
})

create_patient.definition = {
    methods: ["post"],
    url: '/clinic/appointments/create-patient',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::create_patient
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:142
* @route '/clinic/appointments/create-patient'
*/
create_patient.url = (options?: RouteQueryOptions) => {
    return create_patient.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::create_patient
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:142
* @route '/clinic/appointments/create-patient'
*/
create_patient.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: create_patient.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:233
* @route '/clinic/patients/by-birthday'
*/
export const byBirthday = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byBirthday.url(options),
    method: 'get',
})

byBirthday.definition = {
    methods: ["get","head"],
    url: '/clinic/patients/by-birthday',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:233
* @route '/clinic/patients/by-birthday'
*/
byBirthday.url = (options?: RouteQueryOptions) => {
    return byBirthday.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:233
* @route '/clinic/patients/by-birthday'
*/
byBirthday.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byBirthday.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:233
* @route '/clinic/patients/by-birthday'
*/
byBirthday.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byBirthday.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::fetchEvents
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
* @route '/clinic/appointments/fetch/events'
*/
export const fetchEvents = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fetchEvents.url(options),
    method: 'get',
})

fetchEvents.definition = {
    methods: ["get","head"],
    url: '/clinic/appointments/fetch/events',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::fetchEvents
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
* @route '/clinic/appointments/fetch/events'
*/
fetchEvents.url = (options?: RouteQueryOptions) => {
    return fetchEvents.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::fetchEvents
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
* @route '/clinic/appointments/fetch/events'
*/
fetchEvents.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: fetchEvents.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::fetchEvents
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:51
* @route '/clinic/appointments/fetch/events'
*/
fetchEvents.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: fetchEvents.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::show
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:160
* @route '/clinic/appointments/{appointment}'
*/
export const show = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/clinic/appointments/{appointment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::show
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:160
* @route '/clinic/appointments/{appointment}'
*/
show.url = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { appointment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            appointment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        appointment: typeof args.appointment === 'object'
        ? args.appointment.id
        : args.appointment,
    }

    return show.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::show
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:160
* @route '/clinic/appointments/{appointment}'
*/
show.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::show
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:160
* @route '/clinic/appointments/{appointment}'
*/
show.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::edit
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:173
* @route '/clinic/appointments/{appointment}/edit'
*/
export const edit = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/clinic/appointments/{appointment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::edit
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:173
* @route '/clinic/appointments/{appointment}/edit'
*/
edit.url = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { appointment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            appointment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        appointment: typeof args.appointment === 'object'
        ? args.appointment.id
        : args.appointment,
    }

    return edit.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::edit
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:173
* @route '/clinic/appointments/{appointment}/edit'
*/
edit.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::edit
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:173
* @route '/clinic/appointments/{appointment}/edit'
*/
edit.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::update
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:197
* @route '/clinic/appointments/{appointment}'
*/
export const update = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/clinic/appointments/{appointment}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::update
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:197
* @route '/clinic/appointments/{appointment}'
*/
update.url = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { appointment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            appointment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        appointment: typeof args.appointment === 'object'
        ? args.appointment.id
        : args.appointment,
    }

    return update.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::update
* @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:197
* @route '/clinic/appointments/{appointment}'
*/
update.put = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

const AppointmentController = { index, create, store, create_patient, byBirthday, fetchEvents, show, edit, update }

export default AppointmentController