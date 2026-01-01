<?php

namespace Database\Seeders;

use App\Models\AppointmentCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        // Category 1: General
        $cat1 = AppointmentCategory::create(['name' => 'Général', 'color' => '#3b82f6']); // Blue
        $cat1->types()->createMany([
            ['name' => 'Consultation', 'default_duration' => 20, 'default_price' => 1500],
            ['name' => 'Urgence', 'default_duration' => 20, 'default_price' => 2000],
        ]);

        // Category 2: Soins (Treatment)
        $cat2 = AppointmentCategory::create(['name' => 'Soins', 'color' => '#10b981']); // Green
        $cat2->types()->createMany([
            ['name' => 'Détartrage', 'default_duration' => 30, 'default_price' => 4000],
            ['name' => 'Obturation (Carie)', 'default_duration' => 45, 'default_price' => 5000],
        ]);

        // Category 3: Prothèse (Lab Work)
        $cat3 = AppointmentCategory::create(['name' => 'Prothèse', 'color' => '#f59e0b']); // Orange
        $cat3->types()->createMany([
            ['name' => 'Empreinte', 'default_duration' => 30, 'default_price' => 0],
            ['name' => 'Essayage', 'default_duration' => 15, 'default_price' => 0],
            ['name' => 'Pose', 'default_duration' => 30, 'default_price' => 0],
        ]);
    }
}
