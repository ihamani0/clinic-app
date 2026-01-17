
import { useForm } from "@inertiajs/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  PlusCircle } from "lucide-react";
import service from "@/routes/service";
 

export function AddCategoryDialog() {
     
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        color: '#3788d8',
    });

    const submit = (e:React.FormEvent) => {
        e.preventDefault();
        post(service.categories.store().url, {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button size="sm"><PlusCircle className="w-4 h-4 mr-2" /> Add Category</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Service Category</DialogTitle>
                </DialogHeader>
                <form onSubmit={submit} className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Category Name</Label>
                        <Input id="name" value={data.name} onChange={e => setData('name', e.target.value)} placeholder="e.g., Orthodontics" />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="color">Theme Color</Label>
                        <Input id="color" type="color" value={data.color} onChange={e => setData('color', e.target.value)} className="h-10 p-1" />
                    </div>
                    <Button type="submit" className="w-full" disabled={processing}>Save Category</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}