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
        Schema::create('patient_teeth', function (Blueprint $table) {
            $table->id();

            $table->foreignId('patient_id')
                    ->constrained()
                    ->cascadeOnDelete();

                // FDI tooth number: 11 → 48
            $table->unsignedTinyInteger('tooth_number');

            $table->enum('status', [
                    'healthy',
                    'caries',
                    'crown',
                    'abutment',
                    'implant',
                    'missing',
                    'extracted',
                ])->default('healthy');

            $table->text('note')->nullable();
            
            $table->timestamps();
            $table->unique(['patient_id', 'tooth_number']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patient_teeth');
    }
};
