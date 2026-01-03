import { Badge } from '@/components/ui/badge'
import { Payment } from '@/types'
import { CalendarIcon, CreditCard, UserIcon, Wallet    } from 'lucide-react';


const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('fr-DZ', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};


export function PaymentList({ payments }: { payments: Payment[] }) {
  return (
    <div className="space-y-3">
      {payments.length === 0 ? (
        <p className="text-center text-muted-foreground py-4">No payments found.</p>
      ) : (
        payments.map((payment) => (
          <div
            key={payment.id}
            className="group flex justify-between items-center border rounded-xl p-4 bg-card hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              {/* Method Icon */}
              <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary">
                {payment.method === 'cash' ? <Wallet size={16} /> : <CreditCard size={16} />}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-lg">{payment.amount.toLocaleString()} DA</p>
                  <Badge variant="secondary" className="text-[10px] uppercase">
                    {payment.method}
                  </Badge>
                </div>
                
                <div className="flex flex-col gap-1 mt-1">
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <CalendarIcon size={12} />
                    {formatDate(payment.paid_at)}
                  </p>
                  
                  {/* Who made the payment */}
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <UserIcon size={12} />
                    Recorded by: <span className="font-medium text-foreground">{payment.creator?.name ?? 'System'}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-tight">
                Treatment Step
              </p>
              <Badge variant="outline" className="max-w-60 truncate block text-center">
                {payment.step?.title ?? 'General'}
              </Badge>
            </div>
          </div>
        ))
      )}
    </div>
  )
}