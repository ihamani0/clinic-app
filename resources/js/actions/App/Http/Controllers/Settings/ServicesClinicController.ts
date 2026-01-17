import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::index
* @see app/Http/Controllers/Settings/ServicesClinicController.php:17
* @route '/settings/services'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/settings/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::index
* @see app/Http/Controllers/Settings/ServicesClinicController.php:17
* @route '/settings/services'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::index
* @see app/Http/Controllers/Settings/ServicesClinicController.php:17
* @route '/settings/services'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::index
* @see app/Http/Controllers/Settings/ServicesClinicController.php:17
* @route '/settings/services'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::index
* @see app/Http/Controllers/Settings/ServicesClinicController.php:17
* @route '/settings/services'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::index
* @see app/Http/Controllers/Settings/ServicesClinicController.php:17
* @route '/settings/services'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::index
* @see app/Http/Controllers/Settings/ServicesClinicController.php:17
* @route '/settings/services'
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
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:28
* @route '/settings/services/categories'
*/
export const storeCategory = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategory.url(options),
    method: 'post',
})

storeCategory.definition = {
    methods: ["post"],
    url: '/settings/services/categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:28
* @route '/settings/services/categories'
*/
storeCategory.url = (options?: RouteQueryOptions) => {
    return storeCategory.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:28
* @route '/settings/services/categories'
*/
storeCategory.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeCategory.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:28
* @route '/settings/services/categories'
*/
const storeCategoryForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCategory.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:28
* @route '/settings/services/categories'
*/
storeCategoryForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeCategory.url(options),
    method: 'post',
})

storeCategory.form = storeCategoryForm

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
export const storeType = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeType.url(options),
    method: 'post',
})

storeType.definition = {
    methods: ["post"],
    url: '/settings/services/types',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
storeType.url = (options?: RouteQueryOptions) => {
    return storeType.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
storeType.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeType.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
const storeTypeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeType.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::storeType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:40
* @route '/settings/services/types'
*/
storeTypeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeType.url(options),
    method: 'post',
})

storeType.form = storeTypeForm

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:54
* @route '/settings/services/categories/{category}'
*/
export const updateCategory = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateCategory.url(args, options),
    method: 'put',
})

updateCategory.definition = {
    methods: ["put"],
    url: '/settings/services/categories/{category}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:54
* @route '/settings/services/categories/{category}'
*/
updateCategory.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return updateCategory.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:54
* @route '/settings/services/categories/{category}'
*/
updateCategory.put = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateCategory.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:54
* @route '/settings/services/categories/{category}'
*/
const updateCategoryForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:54
* @route '/settings/services/categories/{category}'
*/
updateCategoryForm.put = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateCategory.form = updateCategoryForm

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
export const updateType = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateType.url(args, options),
    method: 'put',
})

updateType.definition = {
    methods: ["put"],
    url: '/settings/services/type/{type}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
updateType.url = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return updateType.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
updateType.put = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateType.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
const updateTypeForm = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateType.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::updateType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:68
* @route '/settings/services/type/{type}'
*/
updateTypeForm.put = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateType.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateType.form = updateTypeForm

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:84
* @route '/settings/services/categories/{category}'
*/
export const destroyCategory = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyCategory.url(args, options),
    method: 'delete',
})

destroyCategory.definition = {
    methods: ["delete"],
    url: '/settings/services/categories/{category}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:84
* @route '/settings/services/categories/{category}'
*/
destroyCategory.url = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { category: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        category: typeof args.category === 'object'
        ? args.category.id
        : args.category,
    }

    return destroyCategory.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:84
* @route '/settings/services/categories/{category}'
*/
destroyCategory.delete = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyCategory.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:84
* @route '/settings/services/categories/{category}'
*/
const destroyCategoryForm = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyCategory
* @see app/Http/Controllers/Settings/ServicesClinicController.php:84
* @route '/settings/services/categories/{category}'
*/
destroyCategoryForm.delete = (args: { category: number | { id: number } } | [category: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyCategory.form = destroyCategoryForm

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
export const destroyType = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyType.url(args, options),
    method: 'delete',
})

destroyType.definition = {
    methods: ["delete"],
    url: '/settings/services/types/{type}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
destroyType.url = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroyType.definition.url
            .replace('{type}', parsedArgs.type.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
destroyType.delete = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyType.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
const destroyTypeForm = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyType.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ServicesClinicController::destroyType
* @see app/Http/Controllers/Settings/ServicesClinicController.php:92
* @route '/settings/services/types/{type}'
*/
destroyTypeForm.delete = (args: { type: number | { id: number } } | [type: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyType.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyType.form = destroyTypeForm

const ServicesClinicController = { index, storeCategory, storeType, updateCategory, updateType, destroyCategory, destroyType }

export default ServicesClinicController