// components/services/add-type-dialog.tsx


import { useForm } from "@inertiajs/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  PlusCircle } from "lucide-react";
import React from "react";
import service from "@/routes/service";
 



export function AddTypeDialog({ categoryId } : { categoryId : string}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        appointment_category_id: categoryId,
        name: '',
        default_duration: 30,
        default_price: 0,
    });

    const submit = (e:React.FormEvent) => {
        e.preventDefault();
        post(service.types.store().url, {
            onSuccess: () => {
                 
                reset();
            },
        });
    };

    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline" size="sm"><PlusCircle className="w-4 h-4 mr-2" /> Add Procedure</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Procedure</DialogTitle>
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
                    <Button type="submit" className="w-full" disabled={processing}>Save Procedure</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}