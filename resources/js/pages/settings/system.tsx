
import HeadingSmall from '@/components/heading-small';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { dashboard } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Separator } from '@radix-ui/react-separator';
import React from 'react'
import RolesManagment from './system/roles-managment';

type Prope = {
    roles : {
        id:string;
        name:string
    }[]
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'dashboard',
        href: dashboard().url,
    },
    {
        title: 'Appearance settings',
        href: "",
    },
];  


export default function System({roles} : Prope) {
  return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="System settings" />
            <SettingsLayout>
                <HeadingSmall
                    title="System settings"
                    description="Update your System settings"
                />
                {/* Roles */}
                <Separator/>
                    <RolesManagment roles={roles}  />
            </SettingsLayout>
        </AppLayout>
  )
}
