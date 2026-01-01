import { treatment } from '@/types'
import React from 'react'
import TreatmentCard from './TreatmentCard';

type Props ={
  treatments : treatment[];
  patientId : number
}


export default function TreatmentTimeline({treatments , patientId}: Props) {


  if (!treatments.length) {
    return (
      <div className="text-muted-foreground text-center py-12">
        No treatments yet for this patient
      </div>
    );
  }


  return (
      <div className="space-y-4">
      {treatments.map((treatment) => (
        <TreatmentCard key={treatment.id} treatment={treatment} patientId={patientId} />
      ))}
    </div>
  )
}
