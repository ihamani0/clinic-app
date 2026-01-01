import { Card } from "@/components/ui/card";
import { Patient } from "@/types";


type Props = {
    patient : Patient
}
export default function PatientProfile({ patient } : Props) {
  return (
    <Card className="p-4 space-y-3 text-sm">
      <div>
        <p className="text-muted-foreground">Email</p>
        <p>{patient.email ?? "—"}</p>
      </div>

      <div>
        <p className="text-muted-foreground">Address</p>
        <p>{patient.address ?? "—"}</p>
      </div>

      {/* <div>
        <p className="text-muted-foreground">Insurance</p>
        <p>{patient.assurance_type ?? "—"}</p>
      </div> */}
    </Card>
  );
}
