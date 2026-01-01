import { Badge } from '@/components/ui/badge'
import { Payment } from '@/types'


 


export function PaymentList({ payments }: { payments: Payment[] }) {
  return (
    <div className="space-y-2">
        {payments.map(payment => (
                <div
                key={payment.id}
                className="flex justify-between items-center border rounded-lg p-3"
                >
                <div>
                    <p className="font-medium">{payment.amount} DA</p>
                    <p className="text-xs text-muted-foreground">
                    {payment.method} • {payment.paid_at}
                    </p>
                </div>

                <Badge variant="outline">
                    {payment.step?.title ?? 'General'}
                </Badge>
                </div>
        ))}
    </div>
  )
}