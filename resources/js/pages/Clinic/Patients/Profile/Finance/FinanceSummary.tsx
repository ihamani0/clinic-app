import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import BalanceOverview from './BalanceOverview'
 
 
import { Finance, TreatmentStep } from '@/types'
import { NewPaymentSection } from './NewPaymentSection'
import { PaymentList } from './PaymentList'
 


type Props = {
  finance: Finance
  unpaidSteps: TreatmentStep[]
}

export default function FinanceSummary({ finance, unpaidSteps }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Finance</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <BalanceOverview finance={finance} />
        <NewPaymentSection steps={unpaidSteps} />
        <PaymentList payments={finance.payments} />
      </CardContent>
    </Card>
  )
}
