import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Phone, AlertTriangle } from "lucide-react";
import { calculateAge } from "@/lib/utils";
import { Patient } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


type Props = {
    patient : Patient
}

export default function PatientHeader({ patient } : Props) {


  const age = patient.dob ? calculateAge(new Date(patient.dob)) : null;

  return (
    <Card className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
      <div className="p-4 flex items-center justify-between gap-4">
        {/* Identity */}
        <div className="flex items-center gap-4">
          
              <Avatar className="size-16  ">
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
                 
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          

          <div>
            <h2 className="text-lg font-semibold">
              {patient.first_name} {patient.last_name}
            </h2>
            <div className="flex gap-3 text-sm text-muted-foreground">
              {age && <span>{age} yrs</span>}
              <span>{patient.gender}</span>
              {patient.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  {patient.phone}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Alerts */}
        {patient.medical_alert && (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            Medical Alert
          </Badge>
        )}
      </div>
    </Card>
  );
}
