import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import clinic from "@/routes/clinic"
import { TreatmentStep } from "@/types"
import { router } from "@inertiajs/react"
import { CheckCircle, Clock, LockKeyhole, XCircle } from "lucide-react"

export function TreatmentStepItem({
  step,
  patientId
}: {
  step: TreatmentStep
  patientId : number
}) {

  const markDone = () => {
    router.post(
      clinic.patient.treatments.markDone({
          patient: patientId,
          treatmentStep: Number(step.id),
      }).url,
      {},
      { preserveScroll: true }
    )
  }

  return (
    <div className={cn(
      "flex items-center justify-between rounded-lg border p-3",
      step.status === "done"
        ? "bg-muted/50"
        : "hover:border-primary"
    )}>

      <div className="flex items-center gap-3">
        {step.status === "done" ? (
          <CheckCircle className="w-4 h-4 text-green-600" />
        ) : (
          <Clock className="w-4 h-4 text-muted-foreground" />
        )}

        <div>
          <p className="font-medium">{step.title}</p>
          <p className="text-xs text-muted-foreground">
            {step.cost} DA
          </p>
        </div>
      </div>

      {step.status !== "done" && (
        <Button size="sm" onClick={markDone} className="cursor-pointer">
          <CheckCircle/>  Mark done
        </Button>
      )}

      {/* {step.status == "done" && (

      )} */}
      {step.status === "done" && (
        <div className="flex items-center gap-2">
          <Button size="icon" className="cursor-pointer" variant={"ghost"} onClick={markDone}>
            <XCircle />
          </Button>
          <Badge variant="secondary" className="text-xs">
            <LockKeyhole />
          </Badge>
        </div>
      )}

    </div>
  )
}