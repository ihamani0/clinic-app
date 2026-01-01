import { Card, CardContent } from '@/components/ui/card'
import { Finance } from '@/types'


type Props = {
    finance : Finance,
}

export default function BalanceOverview({finance : {totalCost , paid , remaining}} : Props) {
  return (
    <Card className="bg-muted/50">
        <CardContent className="grid grid-cols-3 gap-4 p-4 text-center">
            <div>
            <p className="text-sm text-muted-foreground">Total Cost</p>
            <p className="text-xl font-bold">{totalCost} DA</p>
            </div>

            <div>
            <p className="text-sm text-muted-foreground">Paid</p>
            <p className="text-xl font-bold text-green-600">{paid} DA</p>
            </div>

            <div>
            <p className="text-sm text-muted-foreground">Remaining</p>
            <p className="text-xl font-bold text-red-600">{remaining} DA</p>
            </div>
        </CardContent>
    </Card>
  )
}
