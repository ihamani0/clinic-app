

import clinic from '@/routes/clinic';
import { router } from '@inertiajs/react';
import { CalendarOff, Plus } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';



type props = {
    title : string;
    description ?: string;
    showAction ?: boolean;
}

export default function EmptyState({ title, description , showAction}: props) {
  return (
    <div className="flex min-h-400pxb flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in duration-500">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <CalendarOff className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-xs mx-auto">
            {description}
        </p>
        {showAction && (
            <Button 
                onClick={() => router.get(clinic.appointments.create().url)} 
                className="mt-4"
            >
            <Plus className="mr-2 h-4 w-4" />
            New Appointment
            </Button>
        )}
    </div>
  )
}
