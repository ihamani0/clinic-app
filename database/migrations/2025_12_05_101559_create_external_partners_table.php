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
        Schema::create('external_partners', function (Blueprint $table) {
            $table->id();

            $table->string('clinic_name');
            $table->string('doctor_name'); // Dr. Outside

            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();

            // Lab Specifics
            $table->decimal('account_balance', 10, 2)->default(0); // Money they owe the Lab


            $table->enum('price_tier', ['standard', 'vip'])->default('standard');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('external_partners');
    }
};
