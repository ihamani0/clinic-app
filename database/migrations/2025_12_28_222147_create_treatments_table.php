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
        Schema::create('treatments', function (Blueprint $table) {
            $table->id();

            $table->foreignId('patient_id')->constrained()->cascadeOnDelete();
            $table->foreignId('doctor_id')->nullable()->constrained('users');

        // Treatment identity
            $table->string('title'); // "Crown", "Extraction", "Implant"
            $table->text('description')->nullable(); 
            
            
            // Lifecycle
            $table->enum('status', [
                'planned',
                'in_progress',
                'completed',
                'cancelled'
            ])->default('planned');

         // Financial
            $table->decimal('price', 10, 2)->default(0);
            $table->decimal('paid', 10, 2)->default(0);

            // Dates
            $table->date('planned_at')->nullable();
            $table->date('completed_at')->nullable();   
            
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('treatments');
    }
};
