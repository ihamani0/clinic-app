import DateTimePicker from '@/components/date-time-picker';
import BoxColor from '@/components/ui/box-color';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { DURATIONS } from '@/constants';
import clinic from '@/routes/clinic';
import { AppCategory, Appointment, AppointmentFormData, DateTimeValue, User , Patient} from '@/types';
import { Link, useForm } from '@inertiajs/react';
import { ClipboardList, Stethoscope, Tags, UserCircle2, UserCog2} from 'lucide-react';
import { useMemo, useState  } from 'react';

function toLocalDateTime(value: DateTimeValue)  {
    if (!value.date) return null;
    const date = new Date(value.date);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${value.hour}:${value.minute}:00`;
}


 
type Props = {
    appointment ?: Appointment;
    initialData: AppointmentFormData;
    doctors: User[];
    categories: AppCategory[];
    onSubmit: (form: ReturnType<typeof useForm<AppointmentFormData>>) => void;
    submitLabel?: string;
    patients?: Patient[];
};

export default function AppointmentFormCopy({
    appointment,
    initialData,
    doctors,
    categories,
    onSubmit,
    submitLabel,
    patients
}: Props) {
    const [startAt, setStartAt] = useState<DateTimeValue>(() => {

        if (!initialData.start) {
            return { date: undefined, hour: '09', minute: '00' };
        }

        const d = new Date(initialData.start);

        
 

        return {
            date: d,
            hour: d.getHours().toString().padStart(2, '0'),
            minute: d.getMinutes().toString().padStart(2, '0'),
        };
    });

    const form = useForm<AppointmentFormData>(initialData);
    const { data, setData, processing, errors, transform } = form;

    const [selectedCategory, setSelectedCategory] = useState<string | null>();

    // Wrap in useMemo
    const availableTypes = useMemo(() => {
        return selectedCategory
            ? categories.find((c) => String(c.id) === selectedCategory)?.types ?? []
            : [];
    }, [selectedCategory, categories]);



    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        transform((data) => ({
        ...data,
        start: toLocalDateTime(startAt),
         }));

        onSubmit(form);
    };

    return (
        <form onSubmit={submit}>
            <div className="mb-2 grid grid-cols-2 gap-4">
                {/* Doctor */}

                
                <div className="flex flex-col space-y-2">
                    <Label className="text-sm font-semibold">Doctor</Label>
                    <Select
                        value={String(data.doctor_id)}
                        onValueChange={(v) => setData('doctor_id', v)}
                    >
                        <SelectTrigger>
                            <Stethoscope className="h-4 w-4 text-muted-foreground" />
                            <SelectValue title="select Doctor" />
                        </SelectTrigger>
                        <SelectContent>
                            {doctors.map((doc) => (
                                <SelectItem key={doc.id} value={String(doc.id)}>
                                    {doc.color && <BoxColor color={doc.color} /> } 
                                    {doc.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>


                {appointment && (

                    <div className="flex flex-col space-y-2">

                    <Label className="flex items-center gap-x-2 text-sm">
                         <UserCog2 />
                        <span className="text-muted-foreground">
                            create by -{' '}
                        </span>
                        <span className="font-bold">
                            {appointment.creator?.name || "-"}
                        </span>
                    </Label> 
                </div>
                )}


                {
                    patients && (
                        <div className="flex flex-col space-y-2">
                            <Label className="text-sm font-semibold">Patient</Label>
                            <Select
                                value={String(data.patient_id)}
                                onValueChange={(v) => setData('patient_id', v)}
                            >
                                <SelectTrigger>
                                    <UserCircle2 className="h-4 w-4 text-muted-foreground" />
                                    <SelectValue title="select Doctor" />
                                </SelectTrigger>
                                <SelectContent>
                                    {patients.map((patient) => (
                                        <SelectItem key={patient.id} value={String(patient.id)}>
                                            {patient.first_name} {patient.last_name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    )
                }

 
            </div>

            <Separator />

            {/* Category */}

            <div className="my-2 grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                    
                    {appointment ? (
                        <Label className="flex items-center gap-x-2 text-sm">
                            <BoxColor color={appointment.type?.category.color} />
                            <span className="text-muted-foreground">
                                Category -{' '}
                            </span>
                            <span className="font-bold">
                                {appointment.type?.category.name}
                            </span>
                        </Label>
                    ) : (
                        <Label>Category</Label>
                    )}
                    

                    <Select
                        onValueChange={(val) => setSelectedCategory(val)}
                        value={selectedCategory || ''}
                    >
                        <SelectTrigger className="flex items-center gap-2">
                            <Tags className="h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem
                                    key={cat.id}
                                    value={cat.id.toString()}
                                >
                                    {cat.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Appointment Type */}

                <div className="flex flex-col space-y-2">

                    {appointment ? (
                        <Label className="text-sm">
                            <span className="text-muted-foreground">
                                Appointment Type -{' '}
                            </span>
                            <span className="font-bold">
                                {appointment.type?.name}
                            </span>
                        </Label>
                    ) : (
                        <Label>Appointment Type</Label>
                    )}

                    <Select
                        value={data.appointment_type_id}
                        onValueChange={(val) =>
                            setData('appointment_type_id', val)
                        }
                    >
                        <SelectTrigger className="item-center flex gap-2">
                            <ClipboardList className="h-4 w-4 text-muted-foreground" />
                            <SelectValue title="Select treatment" />
                        </SelectTrigger>
                        <SelectContent>
                            {availableTypes?.map((t) => (
                                <SelectItem key={t.id} value={t.id.toString()}>
                                    {t.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.appointment_type_id && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.appointment_type_id}
                        </p>
                    )}
                </div>
            </div>

            <Separator />

            {/* Time */}

            <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
                
                <DateTimePicker
                    label="Start Time"
                    value={startAt}
                    onChange={setStartAt}
                />

                <div className="flex flex-col space-y-2">
                    <Label className="text-sm">Duration</Label>
                    <Select
                        value={String(data.duration)}
                        onValueChange={(v) => setData('duration', Number(v))}
                    >
                        <SelectTrigger>
                            <SelectValue title="Duration" />
                        </SelectTrigger>
                        <SelectContent>
                            {DURATIONS.map((d) => (
                                <SelectItem key={d} value={String(d)}>
                                    {d} min
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>


            {/* Status */}
            {appointment && (
                <div className="my-3">
                    <Label className="flex items-center gap-x-2 text-sm font-semibold">
                        <Tags /> Status
                    </Label>
                    <Select
                        value={data.status}
                        onValueChange={(v) => setData('status', v)}
                    >
                        <SelectTrigger>
                            <SelectValue title="Select status" />
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
                </div>
            )}

            {/* Notes */}

            <div>
                <Label className="text-sm font-semibold">Notes</Label>
                <Textarea
                    value={data.note}
                    onChange={(e) => setData('note', e.target.value)}
                />
            </div>

            {/* Actions */}

            <div className="mt-3 flex justify-end gap-3">

                
                <Link
                    href={ appointment ? clinic.appointments.show({appointment: Number(appointment.id)}).url :  clinic.appointments.index().url
                    }
                >
                    <Button variant="outline" type="button">
                        
                        Cancel
                    </Button>
                </Link>

                <Button disabled={processing} type="submit">
                    {processing ? '... loading' : submitLabel}
                </Button>
            </div>
        </form>
    );
}
