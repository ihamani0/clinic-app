import { Icon } from '@/components/icon';
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { resolveUrl } from '@/lib/utils';

import { type ComponentPropsWithoutRef } from 'react';

export function NavFooter({
    className,
    ...props
}: ComponentPropsWithoutRef<typeof SidebarGroup>) {
    return (
        <SidebarGroup
            {...props}
            className={`group-data-[collapsible=icon]:p-0 ${className || ''}`}
        >
            <SidebarGroupContent>

            </SidebarGroupContent>
        </SidebarGroup>
    );
}
