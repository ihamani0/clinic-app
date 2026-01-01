import { InertiaLinkProps } from '@inertiajs/react';
import { type ClassValue, clsx } from 'clsx';
import { differenceInYears, format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isSameUrl(
    url1: NonNullable<InertiaLinkProps['href']>,
    url2: NonNullable<InertiaLinkProps['href']>,
) {
    return resolveUrl(url1) === resolveUrl(url2);
}

export function resolveUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}



export function formatDateTime(dateStr : string) {
    if (!dateStr) return '';

    const date = new Date(dateStr);
    return date.toLocaleString('fr-FR', {
        timeZone: 'Africa/Algiers',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

export function calculateEndTime(start: string, duration: number) {
    if (!start) return '';
    const end = new Date(new Date(start).getTime() + duration * 60000);

    return end.toLocaleTimeString('fr-FR', {timeZone: 'Africa/Algiers', hour: '2-digit', minute: '2-digit' });
}


//'confirmed', 'seated', 'completed', 'cancelled', 'missed' | 'scheduled'
//
export function getBadgeVariantApp(status: string) {
  switch (status) {
    case "scheduled":
    case "confirmed":
      return "info";

    case "completed":
    case "seated":
      return "success";

    case "missed":
      return "warning";

    case "cancelled":
      return "destructive";

    default:
      return "secondary";
  }
}




export const getStatusVariant = (status: string) => {
  const statusMap: Record<string, "success" | "secondary" | "default" | "destructive" | "outline"> = {
    completed: "success",
    in_progress: "secondary",
    planned: "secondary",
    cancelled: "destructive", // Good to have for the future
    pending: "outline",
  };

  return statusMap[status] || "default";
};

export const formatDateForBackend = (date: Date) => {
  return format(date, "yyyy-MM-dd")
}

export const calculateAge = (date: Date) => {
  return differenceInYears(new Date(), date)
}

