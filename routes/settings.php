<?php

use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\RoleController;
use App\Http\Controllers\Settings\ServicesClinicController;
use App\Http\Controllers\Settings\TwoFactorAuthenticationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::redirect('settings', '/settings/profile');

    Route::get('settings/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('settings/password', [PasswordController::class, 'edit'])->name('user-password.edit');

    Route::put('settings/password', [PasswordController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('user-password.update');

    Route::get('settings/appearance', function () {
        return Inertia::render('settings/appearance');
    })->name('appearance.edit');

 

    Route::get('settings/role' ,[RoleController::class, 'index'])->name('settings.roles.index');


    Route::post('settings/roles', [RoleController::class, 'store'])->name('settings.roles.store');
    Route::delete('settings/roles/{role}', [RoleController::class, 'destroy'])->name('settings.roles.delete');



    Route::get('settings/services' ,[ServicesClinicController::class, 'index'] )->name('settings.services.index');

    Route::post('settings/services/categories', [ServicesClinicController::class, 'storeCategory'])->name('service.categories.store');

    Route::post('settings/services/types', [ServicesClinicController::class, 'storeType'])->name('service.types.store');




    Route::put('settings/services/categories/{category}', [ServicesClinicController::class, 'updateCategory'])
        ->name('service.categories.update');


    Route::put('settings/services/type/{type}', [ServicesClinicController::class, 'updateType'])
        ->name('service.types.update');


    Route::delete('settings/services/categories/{category}', [ServicesClinicController::class, 'destroyCategory'])->name('service.categories.delete');

    Route::delete('settings/services/types/{type}', [ServicesClinicController::class, 'destroyType'])->name('service.types.delete');

    // Route::get('/language', [LanguageController::class, 'index'])->name('settings.language');
    // Route::get('/format', [FormatController::class, 'index'])->name('settings.format');

});
