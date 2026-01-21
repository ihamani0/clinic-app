import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Pen } from "lucide-react";
import FormUser from "./form-user";
import { User, Role } from "@/types";
import { useState } from "react";

type Props = {
    user: User;
    roles: Role[];
};

export default function EditUser({ user, roles }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <Pen className="h-4 w-4" />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle>Edit User - {user.name}</SheetTitle>
                    <SheetDescription>
                        Update details and roles.
                    </SheetDescription>
                </SheetHeader>

                <FormUser
                    user={user}
                    roles={roles}
                    action={'users.update'}
                    method="put"
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