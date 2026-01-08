// components/clinic/CreateAppointmentDialog.tsx
import { useForm } from "@inertiajs/react";
import { PatientSelector } from "./PatientSelector";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// ... imports for UI



export function CreateAppointmentDialog({ open, onOpenChange, initialData, categories, onOpenNewPatient, newlyCreatedPatient }) 
{

    const [birthday, setBirthday] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        patient_id: '',
        doctor_id: initialData.doctor_id || '',
        appointment_type_id: '',
        start: initialData.start || '',
        duration: 30,
        note: '',
    });


    useEffect(() => {
        if (initialData.start) setData('start', initialData.start);
        if (initialData.doctor_id) setData('doctor_id', initialData.doctor_id);
    }, [initialData]);


    
    const submit = (e : React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        post(route('appointments.store'), { onSuccess: () => { onOpenChange(false); reset(); } });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl">
                <form onSubmit={submit} className="space-y-4">
                    <PatientSelector 
                        birthday={birthday}
                        onBirthdayChange={setBirthday}
                        selectedId={data.patient_id}
                        onSelect={(id) => setData('patient_id', id)}
                        newlyCreatedPatient={newlyCreatedPatient}
                        error={errors.patient_id}
                    />
                    <Button type="button" variant="link" onClick={onOpenNewPatient}>+ Create New Patient</Button>
                    
                    {/* Other fields: Category, Type, Time, etc */}
                    
                    <DialogFooter><Button disabled={processing}>Save Appointment</Button></DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}