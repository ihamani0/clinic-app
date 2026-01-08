import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { dashboard } from "@/routes";
import clinic from "@/routes/clinic";
import { AppCategory, BreadcrumbItem, Patient, User } from "@/types";
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
    title: "Create Appointment",
    href: "#",
  },
];

type Props = {
  doctors: User[];
  categories: AppCategory[];
  patients: Patient[];
};

export default function Create({ doctors, categories, patients }: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="p-6">
        <Card className="p-4 shadow-sm border rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg ">
              Create Appointment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <AppointmentFormCopy
              patients={patients}
              initialData={{
                patient_id: "",
                doctor_id: "",
                category_id: "",
                appointment_type_id: "",
                start: null,
                duration: 30,
                status: "scheduled",
                note: "",
              }}
              doctors={doctors}
              categories={categories}
              submitLabel="Update Appointment"
              onSubmit={(form) => form.post(clinic.appointments.store().url)}
            />
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
