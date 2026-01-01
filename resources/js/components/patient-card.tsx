import { Card, CardContent } from "@/components/ui/card";
import { Patient } from "@/types";
import { User, Phone, Calendar, CreditCard } from "lucide-react";

type Props = {
  patient : Patient
}
export default function PatientCard({ patient }: Props) {
  const getGenderIcon = (gender: string) => {
    if (gender === "male") return "♂";
    if (gender === "female") return "♀";
    return "?";
  };

  const balanceColor = 
    patient.balance && patient.balance > 0 ? "text-red-600" : 
    patient.balance && patient.balance < 0 ? "text-green-600" : 
    "text-muted-foreground";

  return (
    <Card className="hover:shadow-md transition-shadow duration-200 border-border/60">
      <CardContent className="p-4 flex items-start gap-4">
        {/* Avatar / Initials Placeholder */}
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-6 h-6 text-primary" />
        </div>

        {/* Patient Info */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold truncate">
            {patient.first_name} {patient.last_name}
          </h2>
          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span>{getGenderIcon(patient.gender)}</span>
              {patient.gender}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {patient.bod}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              {patient.phone}
            </span>
          </div>
        </div>

        {/* Balance */}
        <div className="text-right flex-shrink-0 ml-2">
          <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
            <CreditCard className="w-3 h-3" />
            Balance
          </p>
          <p className={`text-lg font-bold mt-1 ${balanceColor}`}>
            {Math.abs(Number(patient.balance))} DA
            {patient.balance && patient.balance > 0 ? "" : patient.balance && patient.balance < 0 ? " (Credit)" : ""}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}