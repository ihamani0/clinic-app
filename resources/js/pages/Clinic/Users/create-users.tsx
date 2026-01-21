import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PlusCircle } from "lucide-react";
import FormUser from "./form-user";
import { useState } from "react";
import { Role } from "@/types";

export default function CreateUser({ roles }: { roles: Role[] }) {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                    Create User <PlusCircle className="ml-2 h-4 w-4" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle>Add New User</SheetTitle>
                    <SheetDescription>
                        Create a new account and assign permissions.
                    </SheetDescription>
                </SheetHeader>

                <FormUser
                    action={''}
                    method="post"
                    roles={roles}
                    onSuccess={() => setOpen(false)}
                />

                <SheetFooter className="mt-4">
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}