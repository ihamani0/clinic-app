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
        //The Clinical Profile.
        Schema::create('providers', function (Blueprint $table) {
            $table->id();

            // Link to the User Login
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            // Professional Details
            $table->string('specialty')->nullable(); // e.g., "Orthodontiste"
            $table->string('license_number')->nullable(); // N° d'ordre
            $table->string('color_code')->default('#3b82f6'); // For the Calendar

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('providers');
    }
};
