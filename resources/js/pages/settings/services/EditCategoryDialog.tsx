// components/services/edit-category-dialog.tsx

import { useForm } from "@inertiajs/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppointmentCategory } from "../services";
import { PenBox } from "lucide-react";
import service from "@/routes/service";

export function EditCategoryDialog({ category}: { category: AppointmentCategory }) {


    const { data, setData, put, processing, errors, reset } = useForm({
        name: category.name ,
        color: category.color,
    });


    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!category) return;
        
        put(service.categories.update({category:category.id}).url, {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <Dialog >
            <DialogTrigger asChild className="w-full flex justify-start">
                <Button variant="ghost" size="sm"  >
                    <PenBox/>
                        Edit Category
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Category: {category?.name}</DialogTitle>
                </DialogHeader>
                <form onSubmit={submit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label>Category Name</Label>

                        <Input value={data.name} 
                        onChange={e => setData('name', e.target.value)} />

                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label>Color</Label>
                        <Input type="color" value={data.color} 
                        onChange={e => setData('color', e.target.value)} />
                    </div>
                    <Button type="submit" className="w-full" disabled={processing}>Update Category</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}