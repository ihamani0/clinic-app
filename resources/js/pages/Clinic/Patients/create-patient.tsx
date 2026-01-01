
import { Button } from "@/components/ui/button"

import {Sheet, SheetClose,SheetContent,SheetDescription, SheetFooter,SheetHeader,SheetTitle,SheetTrigger} from "@/components/ui/sheet"
 
import { PlusCircle } from "lucide-react"
import FormPatient from "./form-patient"
import clinic from "@/routes/clinic"


function CreatePatient() {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant='outline' className="cursor-pointer">
                Create Patient <PlusCircle />
                </Button>
        </SheetTrigger>
        <SheetContent side="right" className=""  style={{maxWidth:550}}>
            <SheetHeader>
            <SheetTitle>Add New Patient</SheetTitle>
            <SheetDescription>
                Fill in the Patient details and save.
            </SheetDescription>
        </SheetHeader>

        <FormPatient
            action={clinic.patient.store().url}
            method="post"
        />

        <SheetFooter>
            <SheetClose asChild>
                <Button variant="outline">Close</Button>
            </SheetClose>
        </SheetFooter>
    </SheetContent>

    </Sheet>
  )
}
export default CreatePatient
