import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { dashboard } from "@/routes";
import clinic from "@/routes/clinic";
import { AppCategory, Appointment, BreadcrumbItem, User } from "@/types";
import AppointmentFormCopy from "./appointment-form";

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: "Dashboard",
    href: dashboard().url,
  },
  {
    title: "Appointments Calendar",
    href: clinic.appointments.index().url,
  },
  {
    title: "Edit Appointment",
    href: "#",
  },
];

type Props = {
  appointment: Appointment;
  doctors: User[];
  categories: AppCategory[];
};

export default function Edit({ appointment, doctors, categories }: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="p-6">
        <Card className="rounded-2xl border p-4 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              Edit Appointment -{" "}
              <Badge variant={"outline"}>
                {appointment.patient.first_name} {appointment.patient.last_name}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <AppointmentFormCopy
              appointment={appointment}
              initialData={{
                doctor_id: appointment.doctor.id,
                category_id: appointment.type?.category.id ?? "",
                appointment_type_id: appointment.type?.id ?? "",
                start: appointment.start,
                duration: appointment.duration ?? 30,
                status: appointment.status,
                note: appointment.note ?? "",
              }}
              doctors={doctors}
              categories={categories}
              submitLabel="Update Appointment"
              onSubmit={(form) =>
                form.put(clinic.appointments.update(Number(appointment.id)).url)
              }
            />
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
