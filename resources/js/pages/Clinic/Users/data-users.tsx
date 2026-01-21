import { User, Role } from "@/types";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { router } from "@inertiajs/react";
import { Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import EditUser from "./edit-user";
import clinic from "@/routes/clinic";
 

type Props = {
    users: User[];
    roles: Role[];
};

export default function DataUsers({ users, roles }: Props) {
    
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(clinic.users.destroy({user:id}).url);
        }
    };

    const handleSuspendToggle = (id: number) => {
        router.put(clinic.users.toggle_status({user:id}).url, {}, {
            preserveScroll: true,
        });
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Suspend</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        {/* Name & Email */}
                        <TableCell>
                            <div className="flex flex-col">
                                <span className="font-medium">{user.name}</span>
                                <span className="text-xs text-muted-foreground">{user.email}</span>
                            </div>
                        </TableCell>

                        {/* Roles */}
                        <TableCell>
                            {user.roles.map(role => (
                                <Badge key={role.id} variant="outline" className="mr-1">
                                    {role.name}
                                </Badge>
                            ))}
                        </TableCell>

                        {/* Status Badge */}
                        <TableCell>
                            {user.is_suspended ? (
                                <Badge variant="destructive">Suspended</Badge>
                            ) : (
                                <Badge className="bg-green-600 hover:bg-green-700">Active</Badge>
                            )}
                        </TableCell>

                        {/* Suspension Switch */}
                        <TableCell>
                            <Switch
                                checked={!user.is_suspended} // Checked means Active
                                onCheckedChange={() => handleSuspendToggle(Number(user.id))}
                            />
                        </TableCell>

                        {/* Separate Actions */}
                        <TableCell className="text-right space-x-2">
                            {/* Edit Button Wrapper */}
                            <EditUser user={user} roles={roles} />

                            {/* Delete Button */}
                            <Button
                                variant="destructive"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => handleDelete(Number(user.id))}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}