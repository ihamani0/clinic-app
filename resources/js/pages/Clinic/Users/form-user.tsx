import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
 
import { User, Role } from "@/types";

type Props = {
    user?: User;
    roles: Role[];
    method: "post" | "put";
    action: string;
    onSuccess?: () => void; // Callback to close sheet
};

export default function FormUser({ user, roles, method, action, onSuccess }: Props) {
    const form = useForm({
        name: user?.name || "",
        email: user?.email || "",
        password: "", // Empty by default
        role_name: user?.roles[0]?.name || "", // Grab first role if exists
    });

     

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        form[method](action, {
            preserveScroll: true,
            onSuccess: () => {
                form.reset();
                if (onSuccess) onSuccess();
            },
        });
    };

    return (
        <form onSubmit={submit} className="mt-6 px-1 space-y-4">
            
            {/* Name */}
            <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    value={form.data.name}
                    onChange={(e) => form.setData("name", e.target.value)}
                    placeholder="John Doe"
                />
                {form.errors.name && <span className="text-red-500 text-sm">{form.errors.name}</span>}
            </div>

            {/* Email */}
            <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={form.data.email}
                    onChange={(e) => form.setData("email", e.target.value)}
                    placeholder="john@example.com"
                />
                {form.errors.email && <span className="text-red-500 text-sm">{form.errors.email}</span>}
            </div>

            {/* Password - Optional on Edit */}
            <div className="space-y-1">
                <Label htmlFor="password">
                    Password {method === 'put' && <span className="text-xs text-muted-foreground">(Leave blank to keep current)</span>}
                </Label>
                <Input
                    id="password"
                    type="password"
                    value={form.data.password}
                    onChange={(e) => form.setData("password", e.target.value)}
                />
                {form.errors.password && <span className="text-red-500 text-sm">{form.errors.password}</span>}
            </div>

            {/* Role Selection */}
            <div className="space-y-1">
                <Label>Role</Label>
                <Select 
                    value={form.data.role_name} 
                    onValueChange={(val) => form.setData("role_name", val)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select a Role" />
                    </SelectTrigger>
                    <SelectContent>
                        {roles.map((role) => (
                            <SelectItem key={role.id} value={role.name}>
                                {role.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {form.errors.role_name && <span className="text-red-500 text-sm">{form.errors.role_name}</span>}
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full py-5 mt-4" disabled={form.processing}>
                {form.processing ? "Saving..." : "Save User"}
            </Button>
        </form>
    );
}