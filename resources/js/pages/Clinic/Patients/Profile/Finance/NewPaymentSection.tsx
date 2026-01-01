import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TreatmentStep } from '@/types'
import React, { useState } from 'react'
import PaymentDialog from './PaymentDialog'

export function NewPaymentSection({ steps }: { steps: TreatmentStep[] }) {
    

  console.log(steps)
  const [selectedStep, setSelectedStep] = useState<TreatmentStep | null>(null)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Unpaid Treatment Steps</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          {steps.map(step => (
            <div
              key={step.id}
              className="flex justify-between items-center border rounded-lg p-3"
            >
              <div>
                <p className="font-medium">{step.title}</p>
                <p className="text-xs text-muted-foreground">
                  {step?.treatment?.title || "-"}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-semibold">{step.cost} DA</span>
                <Button size="sm" onClick={() => setSelectedStep(step)}>
                  Pay
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {selectedStep && (
        <PaymentDialog
          step={selectedStep}
          onClose={() => setSelectedStep(null)}
        />
      )}
    </>
  )
}
