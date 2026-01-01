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
        Schema::create('treatment_steps', function (Blueprint $table) {
            $table->id();

            $table->foreignId('treatment_id')->constrained()->cascadeOnDelete();
            $table->foreignId('appointment_id')->nullable()->constrained()->cascadeOnDelete();

            $table->string('title'); // "Extraction", "Healing", "Implant placement"

            $table->enum('status', ['pending', 'done'])->default('pending');
            

            //step_order
            $table->integer('step_order')->default(0);
            
            $table->date('performed_at')->nullable();

            $table->boolean('is_paid')->default(false);

            $table->decimal('cost', 10, 2)->default(0);

            $table->text('note')->nullable();

            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('treatment_steps');
    }
};
