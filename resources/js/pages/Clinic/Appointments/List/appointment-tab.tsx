

import { Badge } from '@/components/ui/badge';
import BoxColor from '@/components/ui/box-color';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FORMAT_DATE, FORMAT_TIME } from '@/constants';
import { getBadgeVariantApp } from '@/lib/utils';
import clinic from '@/routes/clinic';
import { Appointment } from '@/types';
import { Link, router } from '@inertiajs/react';
import { format, parseISO } from 'date-fns';
import { toast } from 'sonner';



export default function AppointmentTab({filtered} : {filtered : Appointment[]}) {


    // Quick action helper (confirm, checkin, complete, cancel)
    function quickAction(id: string, action: string) {

    if (!confirm(`Are you sure you want to ${action} this appointment?`)) return;

        router.post(clinic.appointments.list.action().url, { id, action }, {
        onSuccess: (page) => {
        // On success, Inertia will re-render page props, so nothing else needed.
            toast.success('update succssfully');
        }
    });
    }


  return (
    <Table>
        <TableCaption>A list of your Today Appoinmetns .</TableCaption>
        <TableHeader>
        <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Patient</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        {filtered.map((a) => (
            <TableRow key={a.id}>
                <TableCell>{format(parseISO(a.start), FORMAT_DATE)}</TableCell>
                <TableCell>{format(parseISO(a.start), FORMAT_TIME)}</TableCell>

                <TableCell>
                    <div>{a.patient.first_name} {a.patient.last_name}</div>
                    <div className="text-sm text-muted-foreground">{a.patient.phone}</div>
                </TableCell>

                <TableCell>{a.doctor.name}</TableCell>

                <TableCell  >
                    <div className='flex items-center gap-x-2'>
                        <BoxColor color={a.type?.category.color} />
                        {a.type?.category.name}
                    </div>
                    {a.type?.name ?? '-'}
                </TableCell>

                <TableCell>

                    <Badge variant={getBadgeVariantApp(a.status?? 'scheduled')}>
                        {a.status}
                    </Badge>
                </TableCell>

                <TableCell className='space-x-2'>
                
                 
                {/* Actions hidden for completed appointments */}
                {a.status !== 'completed' && a.status === 'scheduled' && (
                    <>
                    <Button size="sm" onClick={() => quickAction(a.id, 'confirm')}>Confirm</Button>
                    <Button size="sm" onClick={() => quickAction(a.id, 'cancel')}>Cancel</Button>
                    </>
                )}


                {a.status !== 'completed' && a.status === 'confirmed' && (
                    <Button size="sm" onClick={() => quickAction(a.id, 'checkin')}>Check-in</Button>
                )}


                {a.status !== 'completed' && a.status === 'seated' && (
                    <Button size="sm" onClick={() => quickAction(a.id, 'complete')}>Complete</Button>
                )}


                <Link href={clinic.appointments.show({appointment: a.id}).url}>
                    <Button size="sm" >View</Button>
                </Link>
                </TableCell>
        </TableRow>
        ))}

        </TableBody>
        </Table>
  )
}
//appointment: a.id
