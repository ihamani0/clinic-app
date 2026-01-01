<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->id();


            $table->foreignId('primary_provider_id')->nullable()->constrained('users');

            // --- IDENTITY ---
            $table->string('first_name');
            $table->string('last_name');

            $table->unique(['first_name', 'last_name']);
            
            $table->date('dob')->nullable();
            $table->enum('gender', ['male', 'female']);
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();

            // ---blood Type ---
            $table->string('blood_type')->nullable();

            // --- CLINICAL ---
            $table->json('medical_history')->nullable(); // ["Diabète", "Hypertension"]
            $table->text('medical_alert')->nullable(); // "Allergie Pénicilline"

            // --- ALGERIA SPECIFIC ---
            $table->string('assurance_type')->nullable(); // CNAS, CASNOS, MILITAIRE
            $table->string('assurance_number')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
