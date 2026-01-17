// components/services/add-type-dialog.tsx
import { useForm } from "@inertiajs/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  Pencil } from "lucide-react";
import React from "react";
import service from "@/routes/service";
import { AppointmentType } from "../services";
 



export function EditTypeDialog({ type } : { type : AppointmentType}) {

    const { data, setData, put, processing, errors, reset } = useForm({
        appointment_category_id: type.appointment_category_id,
        name: type.name,
        default_duration: type.default_duration,
        default_price: type.default_price,
    });

    const submit = (e:React.FormEvent) => {

        e.preventDefault();
        put(service.types.update({type:type.id}).url, {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <Dialog >
            <DialogTrigger asChild className="w-full flex justify-start">
                <Button variant="ghost" size='sm' > 
                    <Pencil className="mr-2 h-4 w-4" /> Edit
                    </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Procedure</DialogTitle>
                </DialogHeader>
                <form onSubmit={submit} className="space-y-4">
                    <div className="flex flex-col justify-center">
                        <div className="grid gap-2">
                            <Label>Procedure Name</Label>
                            <Input value={data.name} onChange={e => setData('name', e.target.value)} placeholder="e.g., Scaling & Polishing" />
                        </div>
                        {
                            errors.name && (<p className="text-red-500">
                                {errors.name}</p>
                                )
                        }
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Duration (min)</Label>
                            <Input type="number" value={data.default_duration} onChange={e => setData('default_duration', Number(e.target.value))} />
                        </div>
                        <div className="grid gap-2">
                            <Label>Default Price ($)</Label>
                            <Input type="number" value={data.default_price} onChange={e => setData('default_price', Number(e.target.value))} />
                        </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={processing}>Update Procedure</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}