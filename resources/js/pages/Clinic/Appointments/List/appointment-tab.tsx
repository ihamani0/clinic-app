

import EmptyState from '@/components/empty-state';
import { Badge } from '@/components/ui/badge';
import BoxColor from '@/components/ui/box-color';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FORMAT_DATE, FORMAT_TIME } from '@/constants';
import { getBadgeVariantApp } from '@/lib/utils';
import clinic from '@/routes/clinic';
import { Appointment } from '@/types';
import {  router } from '@inertiajs/react';
import { format, parseISO } from 'date-fns';
import { Eye, MoreHorizontal, XCircle } from 'lucide-react';
import { toast } from 'sonner';



export default function AppointmentTab({filtered , activeTab} : {filtered : Appointment[] , activeTab : string}) {


    console.log(activeTab);
    // Quick action helper (confirm, checkin, complete, cancel)
    function quickAction(id: string, action: string) {

    if (!confirm(`Are you sure you want to ${action} this appointment?`)) return;

        router.post(clinic.appointments.list.action().url, { id, action }, {
        onSuccess: () => {
        // On success, Inertia will re-render page props, so nothing else needed.
            toast.success('update succssfully');
        }
    });
    }

    if (filtered.length === 0) {
        // Customize message based on the tab
        const messages = {
        today: { title: "No appointments today", desc: "Your schedule is clear for the rest of the day." },
        upcoming: { title: "No upcoming appointments", desc: "There are no appointments scheduled for the future yet." },
        completed: { title: "No completed visits", desc: "Appointments you finish will appear here." },
        archived: { title: "Archive is empty", desc: "Cancelled or old appointments will be stored here." },
        };

        const currentMessage = messages[activeTab as keyof typeof messages] || { 
            title: "No results found", 
            desc: "Try adjusting your filters or search terms." 
        };

        return (
        <EmptyState 
            title={currentMessage.title} 
            description={currentMessage.desc} 
            showAction={activeTab !== 'archived'} 
        />
        );
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

                <TableCell className='text-right'>
                    <div className="flex justify-end gap-2">
                        {/* Primary Action - Context Aware */}
                        {a.status === 'scheduled' && (
                            <Button size="sm" onClick={() => quickAction(a.id, 'confirm')}>Confirm</Button>
                        )}
                        {a.status === 'confirmed' && (
                            <Button size="sm" variant="outline" onClick={() => quickAction(a.id, 'checkin')}>Check-in</Button>
                        )}

                        {/* Action Menu for everything else */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm"><MoreHorizontal className="h-4 w-4" /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => router.get(clinic.appointments.show({appointment: Number(a.id)}).url)}>
                                    <Eye className="mr-2 h-4 w-4" /> View Details
                                </DropdownMenuItem>
                                
                                {a.status !== 'completed' && a.status !== 'cancelled' && (
                                    <DropdownMenuItem className="text-destructive" onClick={() => quickAction(a.id, 'cancel')}>
                                        <XCircle className="mr-2 h-4 w-4" /> Cancel Appointment
                                    </DropdownMenuItem>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </TableCell>
        </TableRow>
        ))}

        </TableBody>
        </Table>
  )
}
//appointment: a.id
