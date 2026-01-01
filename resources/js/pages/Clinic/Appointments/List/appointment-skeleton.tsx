import { Skeleton } from "@/components/ui/skeleton";


export default function AppointmentSkeleton() {
  return (
        <div className="flex items-center justify-between p-4 border rounded-lg mb-2">
            <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-8 w-20" />
        </div>
  )
}
