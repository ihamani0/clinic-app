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
import {   Recycle } from "lucide-react";
import { TooltipWrapper } from "@/components/ui/tool-tip-warraper";

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

    const clearFilter = () => { setSearch(''); setDoctorId(''); setStatusFilter(''); }


 
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

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-x-3 mb-6">

            <Input 
                className="lg:col-span-2  " 
                placeholder="Search patient..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <Input type="date" value={dateFrom} onChange={(e)=> setDateFrom(e.target.value)} />
            <Input type="date" value={dateTo} onChange={(e)=> setDateTo(e.target.value)} />
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


            <div className=" gap-x-2 flex ">
                <TooltipWrapper content="Clear Filters">
                    <Button onClick={clearFilter} size={'icon'} variant={"outline"}  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-brush-cleaning-icon lucide-brush-cleaning"><path d="m16 22-1-4"/><path d="M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1"/><path d="M19 14H5l-1.973 6.767A1 1.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5.5-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8-.8z"/><path d="m8,22,9,9"/></svg>
                    </Button>
                </TooltipWrapper>


                <TooltipWrapper content="Reset">
                    <Button onClick={() => router.get(clinic.appointments.list.index().url , {tab})}>
                        <Recycle />
                    </Button>
                </TooltipWrapper>
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
                                <AppointmentTab filtered={filtered} activeTab={tab} />
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
                            <AppointmentTab filtered={filtered} activeTab={tab}  />
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
                            <AppointmentTab filtered={filtered} activeTab={tab}  />
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
                            <AppointmentTab filtered={filtered} activeTab={tab} />
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
                        <AppointmentTab filtered={filtered} activetab={activeTab}  />
                    )}
                </TabsContent>
            </Tabs>



    </CardContent>
    </Card>

</div>
</AppLayout>
)
}
