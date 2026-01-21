<?php

namespace   App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Models\AppointmentCategory;
use App\Models\AppointmentType;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class ServicesClinicController  extends Controller {



    public function index(): Response
    {
       // Fetch only id and name, then get as a simple array
         
       $categories = AppointmentCategory::with('types')->get();

        return Inertia::render('settings/services' , [
            'categories' =>   $categories
            ] );
    }

    public function storeCategory(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'color' => 'required|string|max:7',
        ]);

        AppointmentCategory::create($validated);

        return back()->with('success', 'Category added successfully');
    }

    public function storeType(Request $request)
    {
        $validated = $request->validate([
            'appointment_category_id' => 'required|exists:appointment_categories,id',
            'name' => 'required|string|max:255',
            'default_duration' => 'required|integer|min:1',
            'default_price' => 'required|numeric|min:0',
        ]);

        AppointmentType::create($validated);

        return back()->with('success', 'Procedure added successfully');
    }

    public function updateCategory(Request $request, AppointmentCategory $category)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'color' => 'required|string|max:7',
        ]);

         
         
        $category->update($validated);

        return back()->with('success', 'Category updated successfully');
    }

    public function updateType(Request $request , AppointmentType $type)
    {
        $validated = $request->validate([
            'appointment_category_id' => 'required|exists:appointment_categories,id',
            'name' => 'required|string|max:255',
            'default_duration' => 'required|integer|min:1',
            'default_price' => 'required|numeric|min:0',
        ]);

        
       $type->update($validated);

        return back()->with('success', 'Procedure update successfully');
    }


    public function destroyCategory(AppointmentCategory $category)
    {
        // Laravel will automatically delete related types if you set up 
        // ->cascadeOnDelete() in your migration
        $category->delete();
        return back()->with('success', 'Category removed.');
    }

    public function destroyType(AppointmentType $type)
    {
        $type->delete();
        return back()->with('success', 'Procedure removed.');
    }

}