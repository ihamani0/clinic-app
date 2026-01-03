 
import UploadAttachment from './UploadAttachment'
import  {Patient } from '@/types'
import MediaGrid from './MediaGrid'
 
 


export default function Attachments({ patient }: { patient: Patient }) {
const { media } = patient

 


  return (
    <div className="space-y-6">
      <UploadAttachment patientId={Number(patient.id)} />

      <MediaGrid title="X-Rays" media={media.xrays}  patientId={Number(patient.id)}/>
      <MediaGrid title="Reports" media={media.reports} patientId={Number(patient.id)}/>
      <MediaGrid title="Photos" media={media.photos} patientId={Number(patient.id)}/>
    </div>
  )
}
