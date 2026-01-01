import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { dashboard } from "@/routes";
import { BreadcrumbItem } from "@/types";
import {  useForm } from "@inertiajs/react";
import axios from 'axios';
import { FormEvent, useRef, useState } from "react";
import frLocale from '@fullcalendar/core/locales/fr';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; // Required for time slots
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// import AppointmentModal from "./appointment-modal";
import type { EventClickArg, EventContentArg } from '@fullcalendar/core';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Badge, CalendarCheck,CalendarPlus, ClipboardList, Clock, LayoutList, Phone,PlusCircle, Save, Tags, UserIcon, UserPlus, UserRoundSearch, VenusAndMars } from "lucide-react";
import type { DateClickArg } from '@fullcalendar/interaction';
import appointments from "@/routes/clinic/appointments";
import { calculateEndTime, formatDateTime } from "@/lib/utils";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import clinic from "@/routes/clinic";
import { Label } from "@/components/ui/label";
import AppointmentEventDialog from "./AppointmentEventDialog";



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Appointments',
        href: '',
    }
];


// Types
type Doctor = { id: string; full_name: string };
type Patient = { id: number | string; first_name: string; last_name: string };
type Category = { id: number | string; name: string; color: string; types: { id: number | string; name: string }[] };
type Event = {

        id: string;
        title: string;
        start: string;
        end: string;
        backgroundColor: string;
        borderColor: string;
        resourceId: string;
        creator:  string;

        extendedProps: { patient_id: string | number; type_id: string | number };

};

interface AppointmentFormData {
  patient_id: string;
  doctor_id: string;
  appointment_type_id: string;
  start: string;
  duration: number;
  note: string;
}

interface PatientFormData {
  first_name: string;
  last_name: string;
  phone: string;
  dob: string;
  email:string;
  address: string;
  gender: 'male' | 'female';
}



export interface AppointmentExtendedProps {
    patient: string;
    doctor : string;
    type: string;
    category : string;
    status: "scheduled" | "confirmed" | "seated" | "completed" | "cancelled" | "missed";
    note: string | null;
    duration: number;
    start: string;
    end:string;
    creator:string
    categoryColor : string

}


interface PageProps {
    newPatient?: Patient;
    doctors: Doctor[];
    events: { data: Event }[]
    patients: Patient[]; categories: Category[]
}

export default function Index({doctors,  patients, categories}: PageProps) {



    //const { flash }  =  usePage<FalshProps>().props ;
    //    useEffect(()=>{
    //     if(flash.success){
    //         toast.success(flash.success)
    //     }

    //     if(flash.error){
    //         toast.error(flash.error)
    //     }
    // } , [flash])


    const calendarRef = useRef(null);


    const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
    const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);


    //list patient
    const [patientsList , setPatientsList] = useState<Patient[]>(patients);

    //state for new patient form


    const patientForm = useForm<PatientFormData>({
            first_name: "",
            last_name: "",
            phone: "",
            email:"",
            dob: "",
            address: "",
            gender: "male"
    })

    // Form handling
    const { data, setData, post, processing, errors, reset , transform} = useForm<AppointmentFormData>({
            patient_id: '',
            doctor_id:'',
            appointment_type_id: '',
            start: '',
            duration: 30,
            note: '',
    });


    // ---------------------------------------------
    // HANDLE SLOT CLICK
    // ---------------------------------------------
    const handleDateClick = (arg : DateClickArg) => {
        setData('start', arg.dateStr); // Set start time
        setData('doctor_id', arg.resource ? arg.resource.id : '');

        setIsAppointmentModalOpen(true);
    };




    // ---------------------------------------------
    // Fetch Events
    // ---------------------------------------------
    const fetchEvents = (info , successCallback, failureCallback)=>{
        axios.get(clinic.appointments.fetch.events().url , {
            params : {
                start_time : info.startStr,
                end_time : info.endStr
            }
        }).then(response =>{


            const events = response.data.map(event => {
                // If your resource logic is already good, just return event
                // Or ensure it matches the object structure here:
                return {
                   id: event.id,
                   resourceId: event.resourceId,
                   title: event.title,
                   start: event.start,
                   end: event.end,
                   backgroundColor: event.backgroundColor,
                   borderColor: event.borderColor,
                   extendedProps: event.extendedProps
                };
            });
            successCallback(events)
        })
        .catch(error => {
            console.error(error);
            failureCallback(error);
            toast.error("Failed to load appointments");
        })
    }

    // ---------------------------------------------
    // SUBMIT FORM
    // ---------------------------------------------
    const handleSubmit = (e : FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        post(appointments.store().url, {
            onSuccess: () => {
                toast.success('Appointment created successfully')
                setIsAppointmentModalOpen(false);
                reset();
            } ,
            onError : (errors) =>{
                toast.error('retry Again!!');
            }
        });
    };


    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const availableTypes = selectedCategory
    ? categories.find(c => String(c.id) === selectedCategory)?.types ?? []
    : [];

    // ---------------------------------------------
    // Event Clickable   RENDER
    // ---------------------------------------------

    const [selectedEvent, setSelectedEvent] = useState<AppointmentExtendedProps | null>(null);

    const [openEventDialog, setOpenEventDialog] = useState(false);

    const handleEventClick = (clickInfo : EventClickArg)=>{

        const event = clickInfo.event;

        const data = event.extendedProps as AppointmentExtendedProps;

        console.log(data);
        setSelectedEvent(data);

        setOpenEventDialog(true);
    }




    // ---------------------------------------------
    // CUSTOM EVENT RENDER
    // ---------------------------------------------
    const renderEventContent = (eventInfo: EventContentArg) => (
        <div className="flex flex-col px-1 overflow-hidden ">
            <b className="truncate">{eventInfo.timeText}</b>
            <span className="truncate font-normal text-sm ">{eventInfo.event.title}</span>
        </div>
    );



  return (
    <AppLayout
        breadcrumbs={breadcrumbs}
    >

        <Card>
            <CardHeader>

            </CardHeader>
            <CardContent>
                <div className="flex-1 p-4 overflow-hidden">
                    <div className="bg-white rounded-lg shadow h-full p-2">

                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, resourceTimeGridPlugin, interactionPlugin]}
                        initialView="resourceTimeGridDay"
                        height="85vh" // Fixed height for Firefox stability
                        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                        // Design
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'resourceTimeGridDay,timeGridWeek'
                        }}

                        // Logic
                        resources={doctors}
                        events={fetchEvents}
                        eventContent={renderEventContent} // Custom UI for events


                        eventClick={handleEventClick} // 👈 event clickable


                        dateClick={handleDateClick}

                        lazyFetching={true}
                        // Localization
                        locale={frLocale}
                        slotMinTime="08:00:00"
                        slotMaxTime="18:00:00"
                        allDaySlot={false}
                        slotDuration="00:15:00"
                        nowIndicator={true}
                        />


            <Dialog open={isAppointmentModalOpen} onOpenChange={setIsAppointmentModalOpen}>
                <DialogContent className="max-w-3xl p-6" style={{maxWidth : "768px"}}>
            <DialogHeader>
                <DialogTitle className="text-xl font-semibold flex items-center gap-2">
                <CalendarCheck /> Create Appointment
                </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* SECTION */}
                <div className="p-4 border rounded-xl bg-muted/30">
                <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                    <UserIcon /> Patient Information
                </h3>

                 {errors.duration  && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">{errors.duration}</span>
                    </div>
                    )}
                {errors.start  && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">{errors.start}</span>
                    </div>
                    )}


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* SELECT PATIENT */}
                    <div className="flex flex-col justify-center space-y-4">
                        <Select onValueChange={(val) => setData("patient_id", val)} value={data.patient_id}>
                        <SelectTrigger className="flex items-center gap-2">
                            <UserRoundSearch className="w-4 h-4 text-muted-foreground" />
                            <SelectValue placeholder="Select patient" />
                        </SelectTrigger>
                        <SelectContent>
                            {patientsList.map((p) => (
                            <SelectItem key={p.id} value={p.id.toString()}>
                                {p.first_name} {p.last_name}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>

                        {errors.patient_id && <p className="text-sm text-red-500 mt-1">{errors.patient_id}</p>}
                        </div>

                    <Button type="button" variant="destructive" className="cursor-pointer" onClick={() => setIsPatientModalOpen(true)}>
                        <PlusCircle className="w-4 h-4"/> Add New Patient
                    </Button>
                </div>
                </div>


                {/* SECTION */}
                <div className="p-4 border rounded-xl bg-muted/30">
                <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                    <LayoutList /> Appointment Type
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* CATEGORY */}
                    <div>
                        <Select onValueChange={(val) => setSelectedCategory(val)} value={selectedCategory || ''}>
                            <SelectTrigger className="flex items-center gap-2">
                                <Tags className="w-4 h-4 text-muted-foreground" />
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((cat) => (
                                <SelectItem key={cat.id} value={cat.id.toString()}>
                                    {cat.name}
                                </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* TYPE */}
                    <div className="flex flex-col justify-center space-y-4">
                        <Select
                        disabled={!selectedCategory}
                        value={data.appointment_type_id}
                        onValueChange={(val) => setData("appointment_type_id", val)}
                        >
                        <SelectTrigger className="flex item-center gap-2">
                            <ClipboardList className="w-4 h-4 text-muted-foreground"/>
                            <SelectValue placeholder="Select treatment" />
                        </SelectTrigger>
                        <SelectContent>
                            {availableTypes?.map((t) => (
                            <SelectItem key={t.id} value={t.id.toString()}>
                                {t.name}
                            </SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                        {errors.appointment_type_id && <p className="text-sm text-red-500 mt-1">{errors.appointment_type_id}</p>}

                    </div>
                </div>
                </div>


    {/* SECTION */}
    <div className="p-4 border rounded-xl bg-muted/30">
      <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
        <Clock /> Schedule
      </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input value={formatDateTime(data.start)} disabled />

        <Select
            value={data.duration.toString()}
            onValueChange={(val) => setData('duration', parseInt(val))}
        >
            <SelectTrigger>
            <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="15">15 min</SelectItem>
            <SelectItem value="30">30 min</SelectItem>
            <SelectItem value="60">1 hour</SelectItem>
            <SelectItem value="90">1.5 hours</SelectItem>
            <SelectItem value="120">2 hours</SelectItem>
            </SelectContent>
        </Select>
        </div>
    </div>

    <div className="p-4 border rounded-xl bg-muted/30">
        <div className="text-sm text-muted-foreground mt-2">
            <Clock className="inline w-4 h-4 mr-1" />
            Ends at: <span className="font-medium">{calculateEndTime(data.start, data.duration)}</span>
        </div>
    </div>

    <div className="mt-4">
        <label className="text-sm font-medium">Notes (optional)</label>
        <textarea
        className="w-full p-2 border rounded-md mt-1"
        rows={3}
        placeholder="Additional notes..."
        value={data.note}
        onChange={(e) => setData('note', e.target.value)}
        />
        {errors.note && <p className="text-sm text-red-500 mt-1">{errors.note}</p>}
    </div>


    <DialogFooter>
      <Button type="submit" className="w-full md:w-auto">
        <CalendarPlus/> Create Appointment
      </Button>
    </DialogFooter>
  </form>
</DialogContent>
            </Dialog>

            <Dialog open={isPatientModalOpen} onOpenChange={setIsPatientModalOpen}>
                <DialogContent className="max-w-3xl p-6" style={{maxWidth : "768px"}}>
                    <DialogHeader>
                        <DialogTitle className="text-xl font-semibold flex items-center gap-2">
                        <UserPlus /> Add New Patient
                        </DialogTitle>
                    </DialogHeader>

                <form

                    onSubmit={(e:FormEvent<HTMLFormElement>): void => {

                        e.preventDefault();

                        patientForm.post(
                            clinic.appointments.create.patient().url,
                        {
                            onSuccess: (page) => {

                                const { newPatient } = page.props.flash as { newPatient: Patient };

                                if (newPatient) {
                                    console.log(newPatient);
                                    setPatientsList(prev => [...prev, newPatient]);
                                    setData('patient_id', newPatient.id.toString());
                                    setIsPatientModalOpen(false);
                                }
                            }
                        });
                    }}
                className="space-y-6"
                >
                    <div className="p-4 border rounded-xl bg-muted/30 space-y-6">

                        <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                            <Badge /> Identity
                        </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input placeholder="First Name" value={patientForm.data.first_name}
                                    onChange={(e) => patientForm.setData( 'first_name' , e.target.value )} />
                                {patientForm.errors.first_name && <p className="text-sm text-red-500 mt-1">{patientForm.errors.first_name}</p>}

                                <Input placeholder="Last Name" value={patientForm.data.last_name}
                                    onChange={(e) => patientForm.setData( 'last_name' , e.target.value )} />
                                {patientForm.errors.last_name && <p className="text-sm text-red-500 mt-1">{patientForm.errors.last_name}</p>}

                                <Input type="date" placeholder="Birthday" value={patientForm.data.dob}
                                    onChange={(e) => patientForm.setData( 'dob' , e.target.value )} />
                                {patientForm.errors.dob && <p className="text-sm text-red-500 mt-1">{patientForm.errors.dob}</p>}
                                {/* Gender */}
                                <Select
                                    value={patientForm.data.gender}
                                    onValueChange={(v) => patientForm.setData('gender',  v )}
                                >
                                <SelectTrigger>
                                    <VenusAndMars className="w-4 h-4"/>
                                <SelectValue placeholder="select Gender " />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                                </Select>

                            </div>

                            {/* CONTACT */}
                        <div className="p-4 border rounded-xl bg-muted/30">
                            <h3 className="font-semibold text-sm flex items-center gap-2 mb-3">
                                <Phone /> Contact
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="flex flex-col space-y-3 justify-center">

                                    <Label>Phone</Label>
                                    <Input placeholder="Phone" value={patientForm.data.phone}
                                    onChange={(e) => patientForm.setData("phone",  e.target.value )} />
                                    {patientForm.errors.phone && <p className="text-sm text-red-500 mt-1">{patientForm.errors.phone}</p>}
                                </div>

                                <div className="flex flex-col space-y-3 justify-center">
                                    <Label>Email</Label>
                                    <Input placeholder="Email" value={patientForm.data.email}
                                    onChange={(e) => patientForm.setData("email",  e.target.value )} />
                                    {patientForm.errors.email && <p className="text-sm text-red-500 mt-1">{patientForm.errors.email}</p>}
                                </div>

                                <div className="flex flex-col space-y-3 justify-center">
                                    <Label>Addres</Label>
                                    <Input placeholder="Address" value={patientForm.data.address}
                                    onChange={(e) => patientForm.setData("address",  e.target.value )} />
                                    {patientForm.errors.address && <p className="text-sm text-red-500 mt-1">{patientForm.errors.address}</p>}
                                </div>


                            </div>
                        </div>

                    </div>
                        <DialogFooter>
                            <Button type="submit" className="w-full md:w-auto">
                                <Save /> Create Patient
                            </Button>
                        </DialogFooter>
                </form>
                </DialogContent>
            </Dialog>


            <Dialog open={processing} >
                <DialogContent className="flex items-center justify-center border-0 shadow-none">
                    <div className="flex flex-col items-center gap-4 p-6">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        <Spinner   />
                    </div>
                </DialogContent>
            </Dialog>

            {/* Patient Loading Dialog */}
            <Dialog open={patientForm.processing}>
            <DialogContent className="flex items-center justify-center border-0 shadow-none">
                <div className="flex flex-col items-center gap-4 p-6">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    <Spinner />
                </div>
            </DialogContent>
            </Dialog>



        {selectedEvent && (
            <AppointmentEventDialog
                isModalOpen={openEventDialog}
                setOpenDialog={setOpenEventDialog}
                selectedEvent={selectedEvent}
            />
        )}

        </div>
    </div>
</CardContent>
</Card>



    </AppLayout>
  )
}
