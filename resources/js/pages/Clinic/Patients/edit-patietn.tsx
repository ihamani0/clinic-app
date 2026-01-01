 
import { Button } from "@/components/ui/button";
import {Sheet, SheetClose,SheetContent,SheetDescription, SheetFooter,SheetHeader,SheetTitle,SheetTrigger} from "@/components/ui/sheet"
 
import { Pen } from "lucide-react";
 
import { Patient } from "@/types";
import FormPatient from "./form-patient";
import clinic from "@/routes/clinic";


type Props = {
patient : Patient
}

export default function  EditPatient({patient} : Props) {




  return (
    <Sheet>
        <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                    <Pen />
                </Button>
        </SheetTrigger>
        <SheetContent side="right" className=""  style={{maxWidth:550}}>
            <SheetHeader>
                <SheetTitle>Edit Patient - {patient.first_name} {patient.last_name}</SheetTitle>
                <SheetDescription>
                    Make changes to Patient here. Click save when you&apos;re done.
                </SheetDescription>
            </SheetHeader>


                {/* Set FormDoctor Her for update */}
                <FormPatient
                    action={clinic.patient.update(patient.id).url}
                    method="put"
                    patient={patient}
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

