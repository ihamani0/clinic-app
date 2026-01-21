import { teeth } from './../routes/clinic/patient/index';
import { treatment } from './index.d';
import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';



export interface PaginationLink  {
    url: string | null;
    label: string;
    active: boolean;
};


export interface FiltersQuery  {
        search ?: string;
        category_id ?: string;
        brand_id ?: string;
        supplier_id?:string;
        sort_by ?: string;
        unit?:string;
        status?:string;
        type ?:string;
        doctor_id ?:string
        technician_id ?:string
        payment_status ?: string,
        amount_min ?:string,
        amount_max ?:string,
        date_from ?: string ,
        date_to ?: string
        per_page?:string
        dob ?: string
    }


export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface FalshProps
{
    flash: { success?: string; error?: string , [key: string]: any};
    [key: string]: any;

}

// export interface PageProps {
//     auth: Auth;
//     appName?: string;
//     flash ?: FalshProps;
//     [key: string]: unknown;
// }

export interface Role {
    id: number;
    name: string;
}
export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;

    is_suspended: boolean;
    roles: Role[];


    created_at: string;
    updated_at: string;
    color?: string;
    [key: string]: unknown; // This allows for additional properties...
}



export type Tooth = {
  number: number;
  status: ToothStatus;
  note:string | null;
};

export type TreatmentStep = {
    id: string;
    title: string;
    step_order: number;
    status: "pending" | "done" | "skipped";
    cost: number;
    note?: string;
    is_paid : boolean ;
    treatment?:treatment
};

export interface teeth {
    id: number;
    tooth_number : number;
}


export interface treatment {
    id: string;
    title: string;
    description: string;
    status: "planned" | "in_progress" | "completed";
    steps: TreatmentStep[];
    teeth: teeth[];
    paid :number;
    remaining ?: number;
    price ?: number;
}

export interface Payment {
    id : string ;
    amount : number ; 
    method : string ; 
    paid_at : string ; 
    step : TreatmentStep;
    creator: User | null ;
}

export interface Finance {
    totalCost : number;
    paid : number ;
    remaining : number ;
    payments : Payment[]
    unpaidSteps :TreatmentStep[];
}
// {totalCost , paid , remaining}

export interface MediaItem {
  id: number;
  file_name: string;
  mime_type: string;
  original_url: string;
}

export interface media{
    xrays : MediaItem[];
    reports : MediaItem[];
    photos : MediaItem[];
}
export interface Patient {
    id: string ;
    full_name?: string;
    first_name: string;
    last_name: string;
    phone : string;
    email : string ;
    address:string;
    photo ?: string;
    gender: 'male' | 'female' | '';
    dob:string;
    balance?: number,
    medical_alert?: string;
    teeth : Tooth[];
    treatments ?: treatment[];
    finance :Finance
    media : media;
}

export interface Category {
    id: number | string;
    name: string;
}

export interface Event {
    id: number | string;
    title?:  string;
    patient_id: number | string;
    doctor_id: number | string;
    appointment_type_id : number | string;
    start: string;
    end: string;
    duration: number;
}

export interface AppCategory {
    id : string;
    name:string
    color : string;
    types ?: AppType[]
}

export interface AppType { id: string; name: string ; category : AppCategory }

export interface Appointment  {
    id: string;
    patient: Patient;
    doctor: User; // doctor
    type?: AppType | null;
    start: string; // ISO
    end: string; // ISO
    status: 'confirmed'| 'seated'| 'completed'| 'cancelled'| 'missed' | 'scheduled';
    creator?: User | null;
    note?:string;
    duration?:number;
};

 

export interface  DateTimeValue {
  date: Date | undefined
  hour: string
  minute: string
}


export type AppointmentFormData = {
  patient_id?: string
  doctor_id: string
  category_id: string
  appointment_type_id: string
  start: string | null
  duration: number
  status: string
  note?: string
}

