import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TreatmentStep } from "@/types"
import { useForm } from "@inertiajs/react"


type Props = {
    step : TreatmentStep ;
    onClose : () => void ;
}

export default function PaymentDialog({ step ,  onClose }: Props) {
  const form = useForm({
    method: 'cash',
  })

  const submit = () => {
    // form.post("route('payments.store')", {
    //   data: { treatment_step_id: step.id },
    //   onSuccess: onClose,
    // })
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Payment</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <p><strong>{step.title}</strong></p>
          <p>Amount: {step.cost} DA</p>

          <Select
            value={form.data.method}
            onValueChange={v => form.setData('method', v)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cash">Cash</SelectItem>
              <SelectItem value="card">Card</SelectItem>
              <SelectItem value="transfer">Transfer</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={submit} className="w-full">
            Confirm Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
