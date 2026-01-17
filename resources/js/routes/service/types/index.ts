import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::store
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/settings/services/types',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::store
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::store
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::store
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::store
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::update
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
export const update = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/settings/services/type/{type}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::update
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
update.url = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        type: typeof args.type === 'object'
        ? args.type.id
        : args.type,
    }

    return update.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::update
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
update.put = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::update
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
const updateForm = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::update
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
updateForm.put = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Settings\ServicesClinicController::deleteMethod
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
export const deleteMethod = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/settings/services/types/{type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::deleteMethod
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
deleteMethod.url = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { type: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { type: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            type: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        type: typeof args.type === 'object'
        ? args.type.id
        : args.type,
    }

    return deleteMethod.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::deleteMethod
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
deleteMethod.delete = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::deleteMethod
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
const deleteMethodForm = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::deleteMethod
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
deleteMethodForm.delete = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMethod.form = deleteMethodForm

const types = {
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default types