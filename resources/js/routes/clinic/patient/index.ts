import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import archiveBc62fe from './archive'
import teethBf3329 from './teeth'
import treatments from './treatments'
import media from './media'
import finances from './finances'
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:235
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
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:235
 * @route '/clinic/patients/by-birthday'
 */
byBirthday.url = (options?: RouteQueryOptions) => {
    return byBirthday.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:235
 * @route '/clinic/patients/by-birthday'
 */
byBirthday.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byBirthday.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:235
 * @route '/clinic/patients/by-birthday'
 */
byBirthday.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byBirthday.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:235
 * @route '/clinic/patients/by-birthday'
 */
    const byBirthdayForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: byBirthday.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:235
 * @route '/clinic/patients/by-birthday'
 */
        byBirthdayForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: byBirthday.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Clinic\Appointment\AppointmentController::byBirthday
 * @see app/Http/Controllers/Clinic/Appointment/AppointmentController.php:235
 * @route '/clinic/patients/by-birthday'
 */
        byBirthdayForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: byBirthday.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    byBirthday.form = byBirthdayForm
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
* @see \App\Http\Controllers\Clinic\Patient\PatientController::index
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:19
 * @route '/clinic/patient'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::index
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:19
 * @route '/clinic/patient'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::index
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:19
 * @route '/clinic/patient'
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
* @see \App\Http\Controllers\Clinic\Patient\PatientController::create
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
 * @route '/clinic/patient/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::create
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
 * @route '/clinic/patient/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::create
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
 * @route '/clinic/patient/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
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
* @see \App\Http\Controllers\Clinic\Patient\PatientController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:50
 * @route '/clinic/patient'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:50
 * @route '/clinic/patient'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
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
* @see \App\Http\Controllers\Clinic\Patient\PatientController::show
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:79
 * @route '/clinic/patient/{patient}'
 */
    const showForm = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::show
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:79
 * @route '/clinic/patient/{patient}'
 */
        showForm.get = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::show
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:79
 * @route '/clinic/patient/{patient}'
 */
        showForm.head = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
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
* @see \App\Http\Controllers\Clinic\Patient\PatientController::edit
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
 * @route '/clinic/patient/{patient}/edit'
 */
    const editForm = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::edit
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
 * @route '/clinic/patient/{patient}/edit'
 */
        editForm.get = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::edit
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:0
 * @route '/clinic/patient/{patient}/edit'
 */
        editForm.head = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
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
* @see \App\Http\Controllers\Clinic\Patient\PatientController::update
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:169
 * @route '/clinic/patient/{patient}'
 */
    const updateForm = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::update
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:169
 * @route '/clinic/patient/{patient}'
 */
        updateForm.put = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::update
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:169
 * @route '/clinic/patient/{patient}'
 */
        updateForm.patch = (args: { patient: string | number } | [patient: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
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
* @see \App\Http\Controllers\Clinic\Patient\PatientController::destroy
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:222
 * @route '/clinic/patient/{patient}'
 */
    const destroyForm = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::destroy
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:222
 * @route '/clinic/patient/{patient}'
 */
        destroyForm.delete = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
 * @route '/clinic/archive/patient'
 */
export const archive = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: archive.url(options),
    method: 'get',
})

archive.definition = {
    methods: ["get","head"],
    url: '/clinic/archive/patient',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
 * @route '/clinic/archive/patient'
 */
archive.url = (options?: RouteQueryOptions) => {
    return archive.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
 * @route '/clinic/archive/patient'
 */
archive.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: archive.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
 * @route '/clinic/archive/patient'
 */
archive.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: archive.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
 * @route '/clinic/archive/patient'
 */
    const archiveForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: archive.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
 * @route '/clinic/archive/patient'
 */
        archiveForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: archive.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientController::archive
 * @see app/Http/Controllers/Clinic/Patient/PatientController.php:235
 * @route '/clinic/archive/patient'
 */
        archiveForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: archive.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    archive.form = archiveForm
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::teeth
 * @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
 * @route '/clinic/patients/{patient}/teeth'
 */
export const teeth = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teeth.url(args, options),
    method: 'get',
})

teeth.definition = {
    methods: ["get","head"],
    url: '/clinic/patients/{patient}/teeth',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::teeth
 * @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
 * @route '/clinic/patients/{patient}/teeth'
 */
teeth.url = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return teeth.definition.url
            .replace('{patient}', parsedArgs.patient.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::teeth
 * @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
 * @route '/clinic/patients/{patient}/teeth'
 */
teeth.get = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: teeth.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::teeth
 * @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
 * @route '/clinic/patients/{patient}/teeth'
 */
teeth.head = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: teeth.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::teeth
 * @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
 * @route '/clinic/patients/{patient}/teeth'
 */
    const teethForm = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: teeth.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::teeth
 * @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
 * @route '/clinic/patients/{patient}/teeth'
 */
        teethForm.get = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teeth.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientToothController::teeth
 * @see app/Http/Controllers/Clinic/Patient/PatientToothController.php:16
 * @route '/clinic/patients/{patient}/teeth'
 */
        teethForm.head = (args: { patient: string | number | { id: string | number } } | [patient: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: teeth.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    teeth.form = teethForm
const patient = {
    byBirthday: Object.assign(byBirthday, byBirthday),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
archive: Object.assign(archive, archiveBc62fe),
teeth: Object.assign(teeth, teethBf3329),
treatments: Object.assign(treatments, treatments),
media: Object.assign(media, media),
finances: Object.assign(finances, finances),
}

export default patient