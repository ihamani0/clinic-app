import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { dashboard } from "@/routes";
import clinic from "@/routes/clinic";
import { Appointment, BreadcrumbItem, User } from "@/types";
import {Tabs,TabsContent,TabsList,TabsTrigger,} from "@/components/ui/tabs"
import { useCallback, useMemo, useState } from "react";
import { router } from "@inertiajs/react";
import AppointmentSkeleton from "./appointment-skeleton";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SelectValue } from "@radix-ui/react-select";
import AppointmentTab from "./appointment-tab";

type Props = {
    appointments : Appointment[];
    activeTab : string
    doctors : User[]
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Appointments',
        href: clinic.appointments.index().url
    },
    {
        title: 'Appointments List',
        href: ""
    }
];


export default function AppointmentList({appointments , activeTab , doctors} : Props) {



    const [search, setSearch] = useState<string>('');
    const [doctorId, setDoctorId] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('');

    const [dateFrom, setDateFrom] = useState<string>('');
    const [dateTo, setDateTo] = useState<string>('');


    const [loading, setLoading] = useState(false);

    const Filappointments: Appointment[] = appointments || [];

    const filtered  = useMemo(() => {

        return Filappointments.filter((a) => {
                // search by patient name or phone
                const patientFull = `${a.patient.first_name} ${a.patient.last_name}`.toLowerCase();

                if (search && !patientFull.includes(search.toLowerCase()) && !(a.patient.phone || '').includes(search)) {
                    return false;
                }

                if (doctorId && String(a.doctor.id) !== doctorId) return false;

                if (statusFilter && a.status !== statusFilter) return false;

                if (dateFrom) {
                    if (new Date(a.start) < new Date(dateFrom)) return false;
                }
                if (dateTo) {
                    if (new Date(a.start) > new Date(dateTo)) return false;
                }

                return true;
            });

    }, [appointments, search, doctorId, statusFilter , dateFrom , dateTo]);




    const [tab, setTab] = useState<string>(activeTab ?? '');


    const getAppointmentList = useCallback((value: string) => {
    setLoading(true);
    setTab(value);

    router.get(
        clinic.appointments.list.index().url,
        { tab: value },
        {
        preserveState: true,
        onFinish: () => setLoading(false),
        }
    );
    }, []);

return (
<AppLayout
breadcrumbs={breadcrumbs}
>
<div className="p-6">

    <Card>
    <CardHeader>
        Appointment List
    </CardHeader>
    <CardContent>

        <div className="flex gap-3 items-center">
            <Input placeholder="Search patient or phone..." value={search} onChange={(e) => setSearch(e.target.value)} />



            <Input placeholder="From YYYY-MM-DD" value={dateFrom} onChange={(e)=> setDateFrom(e.target.value)} />
            <Input placeholder="To YYYY-MM-DD" value={dateTo} onChange={(e)=> setDateTo(e.target.value)} />

            <Select onValueChange={(val) => setDoctorId(val)} value={doctorId || ''}>
                <SelectTrigger className="w-40">
                        <SelectValue placeholder="All doctors " />
                </SelectTrigger>
            <SelectContent>

                {doctors.map((doc: User) => (
                    <SelectItem key={doc.id} value={doc.id.toLocaleString()}>{doc.name}</SelectItem>
                ))}
            </SelectContent>
            </Select>


            <Select onValueChange={(val)=> setStatusFilter(val)} value={statusFilter || ''}>
                <SelectTrigger className="w-40">
                    <SelectValue placeholder="select status " />
                </SelectTrigger>
                <SelectContent>

                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="confirmed">Confirmed</SelectItem>
                        <SelectItem value="seated">Seated</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                        <SelectItem value="missed">Missed</SelectItem>
                </SelectContent>
            </Select>



            <Button onClick={()=> { setSearch(''); setDoctorId(''); setStatusFilter(''); }}>Clear</Button>


            <div className="ml-auto">
                <Button onClick={() => router.get(clinic.appointments.list.index().url , {tab})}>Refresh</Button>
            </div>
        </div>

            <Tabs   value={tab} onValueChange={getAppointmentList}>
                <TabsList className="w-full my-4">
                    <TabsTrigger value="today">Today</TabsTrigger>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                    <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>

                <TabsContent value="today">
                        {loading ? (
                            <>
                                <AppointmentSkeleton />
                                <AppointmentSkeleton />
                                <AppointmentSkeleton />
                            </>
                        ) : (
                                <AppointmentTab filtered={filtered} />
                        )}
                </TabsContent>
                <TabsContent value="upcoming">

                        {loading ? (
                            <>
                                <AppointmentSkeleton />
                                <AppointmentSkeleton />
                                <AppointmentSkeleton />
                            </>
                        ) : (
                            <AppointmentTab filtered={filtered} />
                        )}

                </TabsContent>

                <TabsContent value="completed">

                        {loading ? (
                            <>
                                <AppointmentSkeleton />
                                <AppointmentSkeleton />
                                <AppointmentSkeleton />
                            </>
                            ) : (
                            <AppointmentTab filtered={filtered} />
                        )}
                </TabsContent>
                <TabsContent value="past">

                        {loading ? (
                            <>
                                <AppointmentSkeleton />
                                <AppointmentSkeleton />
                                <AppointmentSkeleton />
                            </>
                            ) : (
                            <AppointmentTab filtered={filtered} />
                        )}
                </TabsContent>

                <TabsContent value="archived">

                    {loading ? (
                        <>
                            <AppointmentSkeleton />
                            <AppointmentSkeleton />
                            <AppointmentSkeleton />
                        </>
                    ) : (
                        <AppointmentTab filtered={filtered} />
                    )}
                </TabsContent>
            </Tabs>



    </CardContent>
    </Card>

</div>
</AppLayout>
)
}
