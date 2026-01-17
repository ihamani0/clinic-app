import React, { useState } from 'react';
import { router, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash2, Loader2 } from 'lucide-react';
import settings from '@/routes/settings';

type Prop = {
    roles: {
        id: string;
        name: string;
    }[]
}

export default function RolesManagement({ roles }: Prop) {
    const [open, setOpen] = useState(false);
    
    // Inertia Form Helper
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        name: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(settings.roles.store().url, {
            onSuccess: () => {
                setOpen(false);
                reset();
            },
        });
    };

    const deleteRole = (id: string) => {
        if (confirm('Are you sure? This will remove access for all users assigned to this role.')) {
            router.delete(settings.roles.delete({role:Number(id)}).url);
        }
    };

    return (
        <Card className="max-w-4xl mx-auto border-none shadow-none bg-transparent">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                <div>
                    <CardTitle className="text-2xl font-bold">User Roles</CardTitle>
                    <CardDescription>Define roles to control what users can see and do.</CardDescription>
                </div>

                <Dialog open={open} onOpenChange={(val) => { setOpen(val); clearErrors(); reset(); }}>
                    <DialogTrigger asChild>
                        <Button className="" variant={'outline'}>
                            <PlusCircle className="mr-2 h-4 w-4" /> New Role
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <form onSubmit={submit}>
                            <DialogHeader>
                                <DialogTitle>Create New Role</DialogTitle>
                                <DialogDescription>
                                    Add a new role to the system. You can assign permissions later.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Role Name</Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="e.g., Doctor, Receptionist"
                                        className={errors.name ? "border-red-500" : ""}
                                    />
                                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={processing}>
                                    {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Save Role
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-1 gap-4">
                    {roles.length === 0 && (
                        <div className="text-center py-10 border-2 border-dashed rounded-xl text-gray-400">
                            No roles found. Create one to get started.
                        </div>
                    )}
                    
                    {roles.map(role => (
                        <div key={role.id} className="bg-white border rounded-xl p-5 flex justify-between items-center hover:shadow-md transition shadow-sm group">
                            <div className="flex items-center space-x-4">
                                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                                    {role.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">{role.name}</h3>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">System Role</p>
                                </div>
                            </div>
                            <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-600" onClick={() => deleteRole(role.id)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}