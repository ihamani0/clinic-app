import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Clinic\Patient\PatientPaymentController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientPaymentController.php:15
 * @route '/clinic/finances/payments'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/clinic/finances/payments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientPaymentController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientPaymentController.php:15
 * @route '/clinic/finances/payments'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Clinic\Patient\PatientPaymentController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientPaymentController.php:15
 * @route '/clinic/finances/payments'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Clinic\Patient\PatientPaymentController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientPaymentController.php:15
 * @route '/clinic/finances/payments'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Clinic\Patient\PatientPaymentController::store
 * @see app/Http/Controllers/Clinic/Patient/PatientPaymentController.php:15
 * @route '/clinic/finances/payments'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const payments = {
    store: Object.assign(store, store),
}

export default payments