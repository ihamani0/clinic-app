<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppointmentCategory extends Model
{
    protected $guarded = [];
    public function types() { return $this->hasMany(AppointmentType::class); }
}
