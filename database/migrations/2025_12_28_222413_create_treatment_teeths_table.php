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
        Schema::create('treatment_teeths', function (Blueprint $table) {
            $table->id();

            $table->foreignId('treatment_id')->constrained()->cascadeOnDelete();
            
            $table->unsignedTinyInteger('tooth_number'); // 11–48

            $table->timestamps();

            $table->unique(['treatment_id', 'tooth_number']);
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('treatment_teeths');
    }
};
