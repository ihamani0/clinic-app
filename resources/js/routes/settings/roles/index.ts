import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\RoleController::index
* @see app/Http/Controllers/Settings/RoleController.php:16
* @route '/settings/role'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/role',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\RoleController::index
* @see app/Http/Controllers/Settings/RoleController.php:16
* @route '/settings/role'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\RoleController::index
* @see app/Http/Controllers/Settings/RoleController.php:16
* @route '/settings/role'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\RoleController::index
* @see app/Http/Controllers/Settings/RoleController.php:16
* @route '/settings/role'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\RoleController::index
* @see app/Http/Controllers/Settings/RoleController.php:16
* @route '/settings/role'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\RoleController::index
* @see app/Http/Controllers/Settings/RoleController.php:16
* @route '/settings/role'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\RoleController::index
* @see app/Http/Controllers/Settings/RoleController.php:16
* @route '/settings/role'
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
* @see \App\Http\Controllers\Settings\RoleController::store
* @see app/Http/Controllers/Settings/RoleController.php:29
* @route '/settings/roles'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/settings/roles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\RoleController::store
* @see app/Http/Controllers/Settings/RoleController.php:29
* @route '/settings/roles'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\RoleController::store
* @see app/Http/Controllers/Settings/RoleController.php:29
* @route '/settings/roles'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\RoleController::store
* @see app/Http/Controllers/Settings/RoleController.php:29
* @route '/settings/roles'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\RoleController::store
* @see app/Http/Controllers/Settings/RoleController.php:29
* @route '/settings/roles'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Settings\RoleController::deleteMethod
* @see app/Http/Controllers/Settings/RoleController.php:43
* @route '/settings/roles/{role}'
*/
export const deleteMethod = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/settings/roles/{role}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\RoleController::deleteMethod
* @see app/Http/Controllers/Settings/RoleController.php:43
* @route '/settings/roles/{role}'
*/
deleteMethod.url = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { role: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { role: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            role: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        role: typeof args.role === 'object'
        ? args.role.id
        : args.role,
    }

    return deleteMethod.definition.url
            .replace('{role}', parsedArgs.role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\RoleController::deleteMethod
* @see app/Http/Controllers/Settings/RoleController.php:43
* @route '/settings/roles/{role}'
*/
deleteMethod.delete = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Settings\RoleController::deleteMethod
* @see app/Http/Controllers/Settings/RoleController.php:43
* @route '/settings/roles/{role}'
*/
const deleteMethodForm = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\RoleController::deleteMethod
* @see app/Http/Controllers/Settings/RoleController.php:43
* @route '/settings/roles/{role}'
*/
deleteMethodForm.delete = (args: { role: number | { id: number } } | [role: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMethod.form = deleteMethodForm

const roles = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default roles