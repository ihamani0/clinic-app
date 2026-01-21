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
import { Archive, Calendar, CalendarDays, CalendarPlus, LayoutGrid,  UserCog,  Users } from 'lucide-react';
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
        title: 'Archived Patients',
        href: clinic.patient.archive().url,
        icon: Archive,
    },
];


const UsersNavItems: NavItem[] = [
    {
        title: 'User Mangments',
        href: clinic.users.index().url,
        icon: UserCog,
    }
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


                <NavMain items={UsersNavItems} titleNav='Users' />

    

            </SidebarContent>

            <SidebarFooter>
                <NavFooter  className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
