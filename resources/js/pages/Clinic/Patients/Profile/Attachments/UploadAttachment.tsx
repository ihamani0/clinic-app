

 
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import clinic from '@/routes/clinic'
import { useForm } from '@inertiajs/react'
import { PlusCircle } from 'lucide-react'



 export default function UploadAttachment({ patientId }: { patientId: number }) {
  const form = useForm<{
    file: File | null
    collection: 'xrays' | 'reports' | 'photos'
  }>({
    file: null,
    collection: 'xrays',
  })

  const submit = () => {
    form.post(
      clinic.patient.media.store(patientId).url,
      {
        forceFormData: true,
        preserveScroll: true,
        onSuccess: () => form.reset()
      }
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild className='mt-4'>
        <Button variant={"outline"}> <PlusCircle/>  Upload Attachment</Button>
      </DialogTrigger>

      <DialogContent className=''>
        <DialogHeader>
          <DialogTitle>Upload Attachment</DialogTitle>
        </DialogHeader>

        <Select
          value={form.data.collection}
          onValueChange={v => form.setData('collection', v as 'xrays' | 'reports' | 'photos')}
        >
          <SelectTrigger>
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent className='w-full'>
            <SelectItem value="xrays">X-ray</SelectItem>
            <SelectItem value="reports">Report</SelectItem>
            <SelectItem value="photos">Photo</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="file"
          onChange={e =>
            form.setData('file', e.target.files?.[0] || null)
          }
        />

        <Button onClick={submit} disabled={form.processing}>
          Upload
        </Button>
      </DialogContent>
    </Dialog>
  )
}