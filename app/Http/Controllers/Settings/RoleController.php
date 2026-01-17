<?php

namespace   App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class RoleController  extends Controller {

    /**
     * Show the user's Role settings page.
     */
    public function index(): Response
    {
       // Fetch only id and name, then get as a simple array
        $roles = Role::select('id', 'name')
            ->where('name', '!=', 'super-admin') // Optional: hide super admin
            ->get();

        return Inertia::render('settings/system' , [
            'roles' =>   $roles
            ] );
    }


    public function store(Request $request ) 
    {
        $validated = $request->validate([
        // Ensure name is unique in the roles table
        'name' => 'required|string|max:255|unique:roles,name',
    ]);

        // Spatie Role creation
        Role::create(['name' => $validated['name']]);

        return back()->with('message', 'Role created successfully!');
    }


    public function destroy(Role $role)
    {
         
        // Prevent deleting core roles if necessary
        if ($role->name === 'super-admin') {
            return back()->withErrors(['error' => 'Cannot delete protected role.']);
        }

        $role->delete();
        return back();
    }
}