import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import clinic from "@/routes/clinic"
import { treatment } from "@/types"
import { useForm } from "@inertiajs/react"
import { PenBox, PlusCircle } from "lucide-react"
import { useState } from "react"

 
type FormStep = {
    id?: number | string; // Notice the '?'
    title: string;
    cost: number;
    status: "pending" | "done" | "skipped";
}


type Props = {
        Treatment:treatment
        patientId:number
}
export default function EditTreatmentModal({Treatment, patientId} : Props) {
  
  
  const [open, setOpen] = useState(false);

    const form = useForm<{
    title: string;
    description: string;
    steps: FormStep[]; // Tell useForm exactly what to expect
}>({
        title: Treatment.title,
        description: Treatment.description ?? "",
        steps: Treatment.steps.map(s => ({
            id: s.id,
            title: s.title,
            cost: s.cost,
            status: s.status,
        })),
    })


    const addStep = () => {
        form.setData('steps', [
        ...form.data.steps, 
            {title: "", cost: 0 , status:"pending" as "pending" | "done"|"skipped" }
        ]);
    };

    const submit = () => {
        form.put(
            clinic.patient.treatments.update({
                patient: patientId,
                treatment: Number(Treatment.id),
            }).url,
            {
                preserveScroll: true,
                onSuccess: () => setOpen(false),
            }
        )
     }


    return (
     <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <PenBox/> Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xl" style={{maxWidth:"36rem"}}>
        <DialogHeader>
          <DialogTitle>Edit Treatment</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          {/* Title */}
          <div className="flex flex-col space-y-1">

          <Input
            value={form.data.title}
            onChange={e => form.setData("title", e.target.value)}
            placeholder="Treatment title"
            />
            {form.errors.title && (
              <p className="text-sm text-red-600 mt-1">{form.errors.title}</p>
            )}
            </div>

          {/* Description */}
          <div className="flex flex-col space-y-1">
              <Textarea
                value={form.data.description}
                onChange={e =>
                  form.setData("description", e.target.value)
                }
                placeholder="Description"
              />
                {form.errors.description && (
                  <p className="text-sm text-red-600 mt-1">{form.errors.description}</p>
                )}
            </div>

          {/* Steps */}

          <div className="space-y-2">
            <p className="text-sm font-medium">Steps</p>

            {form.data.steps.map((step, index) => (
              <div key={step.id ?? index+1} className="flex flex-col space-y-1">
                <div className="flex items-center gap-x-2">

                  <Input
                    disabled={step.status === "done"}
                    value={step.title}
                    onChange={e => {
                      const steps = [...form.data.steps]
                      steps[index].title = e.target.value
                      form.setData("steps", steps)
                    }}
                  />

                  <Input
                    type="number"
                    disabled={step.status === "done"}
                    value={step.cost}
                    onChange={e => {
                      const steps = [...form.data.steps]
                      steps[index].cost = Number(e.target.value)
                      form.setData("steps", steps)
                    }}
                    className="w-32"
                  />
                </div>
                {form.errors.steps?.[index] && (
                  <p className="text-sm text-red-600 mt-1">{form.errors.steps?.[index]}</p>
                )}
            </div>

            ))}

            {/* Add step */}
            <Button
              variant="ghost"
              size="sm"
              onClick={addStep}
            >
              <PlusCircle />  Add step
            </Button>
          </div>

        </div>

        <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={submit} disabled={form.processing}>
              Save
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
    // title: string;
    // step_order: number;
    // status: "pending" | "done" | "skipped";
    // cost: number;
    // note?: string;