<?php

namespace Database\Seeders;

use App\Models\Provider;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class RolesAndAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $roleAdmin = Role::create(['name' => 'super_admin']);
        $roleDoctor = Role::create(['name' => 'doctor']);
        $roleReception = Role::create(['name' => 'receptionist']);
        $roleTech = Role::create(['name' => 'technician']);

        // 2. Create the First Super Admin User
        $admin = User::create([
            'name' => 'Super Admin',
            'email' => 'admin@dental.com',
            'password' => Hash::make('password'), // Change this!
            'is_active' => true,
        ]);
        $admin->assignRole($roleAdmin);

        // 3. Create a Demo Internal Doctor
        $doctor = User::create([
            'name' => 'Dr. Amine',
            'email' => 'amine@dental.com',
            'password' => Hash::make('password'),
            'is_active' => true,
        ]);
        $doctor->assignRole($roleDoctor);

        // Link to Provider Table (Important for Calendar/Clinical)
        Provider::create([
            'user_id' => $doctor->id,
            'specialty' => 'Généraliste',
            'color_code' => '#10b981', // Green
            'license_number' => 'DZ-12345'
        ]);

        $this->command->info('Super Admin and Dr. Amine created successfully!');
    }
}
