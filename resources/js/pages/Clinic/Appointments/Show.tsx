import AppLayout from "@/layouts/app-layout";
import { dashboard } from "@/routes";
import clinic from "@/routes/clinic";
import { Appointment, BreadcrumbItem } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, User, Stethoscope, Clock, FileText, UserCog2, Edit } from "lucide-react";
import { Link } from "@inertiajs/react";


type Props = {
    app : Appointment[]
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Appointments Calendra',
        href: clinic.appointments.index().url,
    },
    {
        title: 'Appointments List',
        href: clinic.appointments.list.index().url,
    },
    {
        title: "View Appointment",
        href: "#",
        },
];


export default function Show({app} : Props) {

 
  return (
    <AppLayout
        breadcrumbs={breadcrumbs}
    >

        <div className=" space-y-6 p-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* Title */}

            <div className="flex items-center justify-between">

            <h1 className="text-2xl font-bold">Appointment Details</h1>
                <Link href={clinic.appointments.edit({appointment:app.id}).url}>
                    <Button variant={'outline'}> <Edit /> Edit Appointment</Button>
                </Link>
            </div>


            {/* Main Card */}
            <Card className="p-4 shadow-sm border rounded-2xl">

                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <CalendarDays className="w-5 h-5" />
                        Appointment Overview
                    </CardTitle>
                </CardHeader>


            <CardContent className="space-y-6">

            {/* Creator By */}
                <div className="bg-muted p-4 rounded-xl flex items-center gap-3">
                    <UserCog2 className="w-5 h-5 text-primary" />
                    <div>
                        <p className="text-base">
                            Create by : {" "}
                        <span className="font-semibold ">{app.creator.name}</span>  
                        </p>
                        
                    </div>
                </div>
            {/* Patient */}
                <div className="bg-muted p-4 rounded-xl flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                        <p className="font-semibold text-base">
                        {app.patient.first_name} {app.patient.last_name}
                        </p>
                        <p className="text-xs text-muted-foreground">{app.patient.phone}</p>
                    </div>
                </div>


                <Separator />


                {/* Doctor & Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-3 items-center p-4 bg-muted rounded-xl">
                        <Stethoscope className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm font-semibold">Doctor</p>
                            <p className="text-xs text-muted-foreground">{app.doctor.name}</p>
                        </div>
                    </div>


                    <div className="flex gap-3 items-center p-4 bg-muted rounded-xl">
                            <FileText className="w-5 h-5 text-primary" />
                        <div>
                            <p className="text-sm font-semibold">Type</p>
                            <p className="text-xs text-muted-foreground">
                            {app.type.name} — {app.type.category.name}
                            </p>
                        </div>
                    </div>
                </div>


                {/* Status */}
                <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold">Status</p>
                        <Badge>{app.status}</Badge>
                </div>


                    {/* Time Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                    <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                            <p className="font-semibold text-sm">Start Time</p>
                            <p className="text-xs text-muted-foreground">
                            {new Date(app.start).toLocaleString()}
                            </p>
                        </div>
                    </div>


                    <div className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                            <p className="font-semibold text-sm">End Time</p>
                            <p className="text-xs text-muted-foreground">
                            {new Date(app.end).toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>


                {/* Notes */}
                {app.note && (
                <div className="mt-4 p-4 bg-muted rounded-xl">
                <p className="text-sm font-semibold mb-1">Notes</p>
                <p className="text-xs text-muted-foreground">{app.note}</p>
                </div>
                )}
            </CardContent>
            </Card>
            </div>
    </AppLayout>
  )
}
