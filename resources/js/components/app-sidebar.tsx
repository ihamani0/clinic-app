import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Calendar, CalendarDays, CalendarPlus, LayoutGrid, Trash, UserPlus, Users } from 'lucide-react';
import AppLogo from './app-logo';
import clinic from '@/routes/clinic';


const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const AppointmentNavItems: NavItem[] = [
    {
        title: 'Calendar View',
        href: clinic.appointments.index().url,
        icon: Calendar,
    },

    {
        title: 'Appointment List',
        href: clinic.appointments.list.index().url,
        icon: CalendarDays,
    },

    {
        title: 'Add Appointment',
        href: clinic.appointments.create().url,
        icon: CalendarPlus,
    },

];


const PatientsNavItems: NavItem[] = [
    {
        title: 'Patient List',
        href: clinic.patient.index().url,
        icon: Users,
    },

    {
        title: 'Add Patient',
        href: clinic.patient.create().url,
        icon: UserPlus,
    },
    {
        title: 'Archived Patients',
        href: clinic.patient.index().url,
        icon: Trash,
    },
];



export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} titleNav='Paltform' />


                <NavMain items={AppointmentNavItems} titleNav='Appointments' />

                <NavMain items={PatientsNavItems} titleNav='Patients' />


            </SidebarContent>

            <SidebarFooter>
                <NavFooter  className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
