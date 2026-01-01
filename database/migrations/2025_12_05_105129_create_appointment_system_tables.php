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
        // 1. Categories (Grouping)
        Schema::create('appointment_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // "Consultation", "Prothèse", "Chirurgie"
            $table->string('color')->default('#3788d8'); // Default Blue
            $table->timestamps();
        });

        // 2. Types (The actual Menu Item)
        Schema::create('appointment_types', function (Blueprint $table) {
            $table->id();
            $table->foreignId('appointment_category_id')->constrained()->cascadeOnDelete();
            $table->string('name'); // "Detartrage", "Devitalisation"
            $table->integer('default_duration')->default(30); // Minutes
            $table->decimal('default_price', 10, 2)->default(0);
            $table->timestamps();
        });


                // 3. The Appointment
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained(); // The Doctor

            $table->foreignId('created_by')
            ->nullable()
            ->constrained('users')
            ->nullOnDelete(); // receptionist, admin, doctor...

            $table->foreignId('appointment_type_id')->nullable()->constrained(); // What are they doing?

            $table->dateTime('start');
            $table->dateTime('end');


            $table->integer('duration')->default(30);

            // Workflow Status
            $table->enum('status', ['scheduled', 'confirmed', 'seated', 'completed', 'cancelled', 'missed'])
                  ->default('scheduled');

            $table->text('note')->nullable(); // Receptionist notes

            $table->index('start');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
        Schema::dropIfExists('appointment_types');
        Schema::dropIfExists('appointment_categories');
    }
};
