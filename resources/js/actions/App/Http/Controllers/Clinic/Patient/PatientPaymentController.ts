import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
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

const PatientPaymentController = { store }

export default PatientPaymentController