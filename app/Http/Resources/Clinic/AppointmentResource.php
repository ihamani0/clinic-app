<?php

namespace App\Http\Resources\Clinic;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppointmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'resourceId' => $this->user_id,

            'title' => $this->patient->first_name . ' ' . $this->patient->last_name . ' - ' . ($this->type->name ?? 'Rdv'),

            'start' => $this->start,
            'end' => $this->end,


            'backgroundColor' => $this->type->category->color ?? '#3788d8' ,
            'borderColor' => $this->type->category->color ?? '#3788d8',


            'extendedProps' => [
                'doctor' => $this->doctor->name,
                'patient' => $this->patient->first_name." ".$this->patient->last_name,
                'category' => $this->type->category->name,
                'categoryColor'=> $this->type->category->color ,
                'duration' => $this->duration,
                'type' => $this->type->name,
                'note' => $this->note,
                'creator' => $this->creator->name ,
                'status' => $this->status,
                'start' => $this->start,
                'end' => $this->end,
            ],
        ];
    }
}
