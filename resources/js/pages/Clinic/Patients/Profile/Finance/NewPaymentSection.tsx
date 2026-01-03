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
          {steps.map((group, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-muted/50 py-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
                    {group.treatment_title}
                  </CardTitle>
                  <span className="text-sm font-bold text-primary">
                    Total Due: {group.total_treatment_due} DA
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="divide-y">
                  {group.steps.map((step) => (
                    <div
                      key={step.id}
                      className="flex justify-between items-center p-4 hover:bg-accent/5 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-sm">{step.title}</p>
                        <p className="text-xs text-muted-foreground">
                          Status: {step.status}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-mono font-semibold">{step.cost} DA</span>
                        <Button size="sm" onClick={() => setSelectedStep(step)}>
                          Pay
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
        </Card>
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
