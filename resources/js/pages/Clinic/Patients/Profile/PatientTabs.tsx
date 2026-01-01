import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import Odontogram from '../Odontogram/odontogram'
import FinanceSummary from './FinanceSummary'
import TreatmentTimeline from './Treatment/TreatmentTimeline'
import { Patient } from '@/types'
import TreatmentModal from './Treatment/TreatmentModal'


type Props = {
    patient : Patient,
}
//<Odontogram  patient_id={Number(patient.id)} teeth={teeth}
export default function PatientTabs({patient } : Props) {
  return (
    <Tabs defaultValue="chart">
        <TabsList>
            <TabsTrigger value="chart">Dental Chart</TabsTrigger>
            <TabsTrigger value="treatments"  >Treatments</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>

        <TabsContent value="chart">
            <Odontogram patient_id={Number(patient.id)} teeth={patient.teeth}  />
        </TabsContent>

        <TabsContent value="treatments">
            <div className='space-y-4 flex flex-col mt-2 '>
                <div className='self-end'>
                    <TreatmentModal patientId={String(patient.id)} />
                </div>
                <TreatmentTimeline treatments={patient.treatments ?? []} patientId={Number(patient.id)} />
            </div>
        </TabsContent>

        <TabsContent value="finance">
            <FinanceSummary />
        </TabsContent>
    </Tabs>

  )
}
