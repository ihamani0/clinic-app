<?php

namespace Database\Seeders;

use App\Models\Provider;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([RolesAndAdminSeeder::class , AppointmentSeeder::class]);

        $doctor = User::create([
            'name' => 'Dr. Sabri',
            'email' => 'sabri@dental.com',
            'password' => Hash::make('password'),
            'is_active' => true,
        ]);
        $doctor->assignRole('doctor');

        // Link to Provider Table (Important for Calendar/Clinical)
        Provider::create([
            'user_id' => $doctor->id,
            'specialty' => 'Surgien Dentiste',
            'color_code' => "#10b981", //red
            'license_number' => 'DZ-12342'
        ]);

        $doctor = User::create([
            'name' => 'Dr. Mokrani',
            'email' => 'mokrani@dental.com',
            'password' => Hash::make('password'),
            'is_active' => true,
        ]);
        $doctor->assignRole('doctor');

        // Link to Provider Table (Important for Calendar/Clinical)
        Provider::create([
            'user_id' => $doctor->id,
            'specialty' => 'Surgien Dentiste',
            'color_code' => "#12cd23",
            'license_number' => 'DZ-12341'
        ]);
    }
}
