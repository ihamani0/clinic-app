import AppLayout from "@/layouts/app-layout"
import { BreadcrumbItem, Patient } from "@/types"
import { dashboard } from "@/routes"
import clinic from "@/routes/clinic"
import PatientProfile from "./Profile/PatientProfile"
import PatientTabs from "./Profile/PatientTabs"
import PatientHeader from "./Profile/PatientHeader"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Patient List',
        href: clinic.patient.index().url,
    } ,

];






export default function Show({patient} : {patient : Patient }) {

  // console.log("Teeth data in ShowPatient:", teeth);


  return (
    <AppLayout
      breadcrumbs={[
        ...breadcrumbs,
        {
          title: patient.first_name + ' ' + patient.last_name,
          href: '#',
        },
      ]}
    >
       <div className="p-6">
        <PatientHeader patient={patient} />
       </div>

      <div className="p-6 grid grid-cols-12 gap-4">
        {/* Left */}
        <div className="col-span-2">
          <PatientProfile patient={patient} />
        </div>

        {/* Right */}
        <div className="col-span-10">
          <PatientTabs patient={patient} />
        </div>
      </div>
    </AppLayout>
  )
}
