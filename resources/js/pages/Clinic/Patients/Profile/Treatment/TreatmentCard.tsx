import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn, getStatusVariant } from "@/lib/utils"
import { treatment } from "@/types"
import { TreatmentStepItem } from "./TreatmentStepItem"
import EditTreatmentModal from "./EditTreatmentModal"
 

export default function TreatmentCard({ treatment ,patientId }: { treatment: treatment, patientId:number }) {

  console.log("treatment", treatment);

  const canEdit =
    treatment.status !== "completed" &&
    Number(treatment.paid) === 0 // later comes from backend
   

  const completedSteps = treatment.steps.filter(s => s.status === "done").length
  const totalSteps = treatment.steps.length

  const progress = Math.round((completedSteps / totalSteps) * 100)

  // const remaining = treatment.total_cost - treatment.paid

  return (
    <Card className="relative overflow-hidden">

      {/* Status bar */}
      <div className={cn(
        "absolute left-0 top-0 h-full w-1",
        treatment.status === "completed"
          ? "bg-green-500"
          : treatment.status === "in_progress"
          ? "bg-primary"
          : "bg-muted"
      )} />

      <CardHeader className="space-y-2">

        {/* Title + Status */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="font-semibold text-base">
              {treatment.title}
            </h3>
            <p className="text-sm text-foreground ">{treatment.description}</p>

            {/* Teeth */}
            <div className="flex gap-1 mt-2">
              {treatment.teeth.map(t => (
                <Badge key={t.id} variant="outline">🦷 {t.tooth_number}</Badge>
              ))}
            </div>
          </div>

          <Badge variant={getStatusVariant(treatment.status)}>
            {treatment.status.replace("_", " ")}
          </Badge>
        </div>

        {/* Progress */}
        <div>
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>{completedSteps}/{totalSteps} steps</span>
            <span>{progress}%</span>
          </div>

          <Progress value={progress} />
        </div>


          {canEdit && (
            <EditTreatmentModal
                Treatment={treatment}
                patientId={patientId}
            />
          )}
      </CardHeader>

      <CardContent className="space-y-3">

        {treatment.steps.map(step => (
          <TreatmentStepItem
            key={step.id}
            step={step}
            patientId={patientId}
          />
        ))}

      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-between text-sm border-t pt-3">
          <div className="text-muted-foreground">
            Total: <span className="font-medium">{treatment.price} DA</span>
            <br />
            Paid: <span className="font-medium">{treatment.paid} DA</span>
          </div>

          <div className={cn(
            "font-semibold",
            treatment.remaining && treatment.remaining > 0 ? "text-red-600" : "text-green-600"
          )}>
            {treatment.remaining && treatment.remaining > 0 ? `Remaining: ${treatment.remaining} DA` : "Paid"}
          </div>
      </CardFooter>

    </Card>
  )
}
