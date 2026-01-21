<?php

namespace App\Http\Controllers\Clinic\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePatientRequest;
use App\Models\Patient;
use App\Models\PatientTooth;
use App\Models\User;
use App\Rules\UniqueFullName;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
 
        
        public function index()
        {
            $users = User::with('roles')->latest()->paginate(10);
            $roles = Role::get(['id', 'name']); // Get roles for the dropdown

            return Inertia::render('Clinic/Users/Index', [
                'users' => $users,
                'roles' => $roles, // Pass roles to frontend
                'filters' => request()->all('per_page', 'search'),
            ]);
        }


        public function store(Request $request)
        {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8',
                'role' => 'required|exists:roles,name',
            ]);

            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => Hash::make($validated['password']),
            ]);

            $user->assignRole($validated['role']);

            return redirect()->back();
        }

        public function update(Request $request, User $user)
        {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email,' . $user->id,
                'role' => 'required|exists:roles,name',
            ]);

            $user->update([
                'name' => $validated['name'],
                'email' => $validated['email'],
            ]);

            $user->syncRoles([$validated['role']]);

            return redirect()->back();
        }

        public function destroy(User $user)
        {
            $user->delete();
            return redirect()->back();
        }


        public function toggle_status(User $user){
            $user->is_active = !$user->is_active;
            $user->save();

             return back()->with("success" , "operation is updated succsfully");
        }

}