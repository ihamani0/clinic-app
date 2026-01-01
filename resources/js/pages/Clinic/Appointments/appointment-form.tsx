import { AppCategory, Appointment, DateTimeValue, User } from "@/types"
import { Link, useForm } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { SelectValue } from "@radix-ui/react-select"
import { Label } from "@/components/ui/label"
import { ClipboardList, Tags, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import BoxColor from "@/components/ui/box-color"
import DateTimePicker from "@/components/date-time-picker"
import { DURATIONS } from "@/constants"
import clinic from "@/routes/clinic"
import { toast } from "sonner"



function toLocalDateTime(value: DateTimeValue) {
  if (!value.date) return null

  const d = new Date(value.date)

  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")

  const hour = value.hour
  const minute = value.minute

  return `${year}-${month}-${day} ${hour}:${minute}:00`
}



type Props = {
    appointment : Appointment
    doctors : User[]
    categories : AppCategory[]
}



export default function AppointmentForm({appointment, doctors, categories} : Props) {


    const [startAt, setStartAt] = useState<DateTimeValue>(() =>{

        const date = new Date(appointment.start);

        return {
            date,
            hour: date.getHours().toString().padStart(2, "0"),
            minute: date.getMinutes().toString().padStart(2, "0"),
        }
    })

  



    const { data, setData, put ,  processing, errors , transform } = useForm({
        doctor_id: appointment.doctor.id,
        category_id: appointment.type.category.id,
        appointment_type_id: appointment.type.id,
        duration : appointment.duration ?? 30,
        status: appointment.status,
        note: appointment.note ?? "",
    })



    const [selectedCategory, setSelectedCategory] = useState<string | null>(data.category_id);
    
    const availableTypes = selectedCategory
        ? categories.find(c => String(c.id) === selectedCategory)?.types ?? []
        : [];


      transform((data) => ({
          ...data,
          start: toLocalDateTime(startAt),
      }))

    const submit = (e) => {
        e.preventDefault();

        put(clinic.appointments.update(appointment.id).url , {
          onSuccess : ()=>{
            toast.success('update The Appoitments Successfully')
          }
        });
    }



  return (
    <form onSubmit={submit}>


        <div className="gap-4 grid grid-cols-2 mb-2">

          {/* Doctor */}
          
          <div className="flex flex-col space-y-2  ">
            <Label className="text-sm font-semibold">Doctor</Label>
            <Select
              value={String(data.doctor_id)}
              onValueChange={(v) => setData("doctor_id", v)}
            >
              <SelectTrigger>
                <Tags className="w-4 h-4 text-muted-foreground" />
                <SelectValue title="select Doctor" />
              </SelectTrigger>
              <SelectContent>
                {doctors.map((doc) => (
                    <SelectItem key={doc.id} value={String(doc.id)}>
                    {doc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-2 justify-center">
                <Label>Created By :</Label>
                <Input value={appointment.creator.name} disabled/>
          </div>

        </div>

        <Separator   />

        {/* Category */}

        <div className="gap-4 grid grid-cols-2 my-2">

          

            <div className="flex flex-col space-y-2 ">
                <Label className="text-sm   flex items-center gap-x-2">
                    <BoxColor color={appointment.type?.category.color} /> 
                    <span className="text-muted-foreground">Category  - </span>
                    <span className="font-bold">{appointment.type?.category.name}</span>
                </Label>

                <Select onValueChange={(val) => setSelectedCategory(val)} value={selectedCategory || ''}>
                    <SelectTrigger className="flex items-center gap-2">
                        <Tags className="w-4 h-4 text-muted-foreground" />
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id.toString()}>
                            {cat.name}
                        </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

          {/* Appointment Type */}

            <div  className="flex flex-col space-y-2 "> 
                <Label className="text-sm">
                    <span className="text-muted-foreground">Appointment Type - </span>
                    <span className="font-bold">{appointment.type?.name}</span>
                    </Label>
                <Select
                value={data.appointment_type_id}
                onValueChange={(val) => setData("appointment_type_id", val)}
                >
                <SelectTrigger className="flex item-center gap-2">
                    <ClipboardList className="w-4 h-4 text-muted-foreground"/>
                    <SelectValue title="Select treatment" />
                </SelectTrigger>
                <SelectContent>
                    {availableTypes?.map((t) => (
                    <SelectItem key={t.id} value={t.id.toString()}>
                        {t.name}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
                {errors.appointment_type_id && <p className="text-sm text-red-500 mt-1">{errors.appointment_type_id}</p>}

            </div>
        </div>

        <Separator />

          {/* Time */}
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            
            <DateTimePicker
              label="Start Time"
              value={startAt}
              onChange={setStartAt}
            />


            <div className="flex flex-col space-y-2 ">
                <Label className="text-sm ">
                    Duration
                </Label>
                <Select
                  value={String(data.duration)}
                  onValueChange={(v) => setData('duration' , v)}
                >
                  <SelectTrigger>
                    <SelectValue title="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {DURATIONS.map((d) => (
                      <SelectItem key={d} value={String(d)}>
                        {d} min
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>



          </div>

        

          {/* Status */}
          <div className="my-3">
            <Label className="text-sm font-semibold flex items-center gap-x-2"><Tags /> Status</Label>
            <Select
              value={data.status}
              onValueChange={(v) => setData("status", v)}
            >
              <SelectTrigger>
                <SelectValue title="Select status" />
              </SelectTrigger>
                <SelectContent>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="seated">Seated</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="missed">Missed</SelectItem>
                </SelectContent>
            </Select>
          </div>

          {/* Notes */}
         
          <div>
            <Label className="text-sm font-semibold">Notes</Label>
            <Textarea
              value={data.note}
              onChange={(e) => setData("note", e.target.value)}
            />
          </div>

          {/* Actions */}


          <div className="flex justify-end gap-3 mt-3">
            <Link href={clinic.appointments.show({appointment :appointment.id }).url}>
              <Button variant="destructive" type="button">
                <X />
                Cancel
              </Button>
            </Link>
            <Button disabled={processing} type="submit">
              Update Appointment
            </Button>
          </div> 


    </form>
  )
}