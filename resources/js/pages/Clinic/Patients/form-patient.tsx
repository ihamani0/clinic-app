import { useForm } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
 import { Select, SelectContent, SelectItem,SelectTrigger,SelectValue,
} from "@/components/ui/select"

import FormField from "@/components/form-field"
import { Patient } from "@/types"
import { format, parseISO } from "date-fns"
import { calculateAge, formatDateForBackend } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"

type PatientForm = {
  first_name: string
  last_name: string
  phone: string
  gender: "male" | "female" | ""
  dob: string
  email : string
  address : string
}

type Props = {
    patient  ?: Patient;
    method : "post" | "put";
    action : string;
}


function FormPatient({patient , method , action} : Props) {


  const [dobDate, setDobDate] = useState<Date | undefined>(
      patient?.dob ? parseISO(patient.dob) : undefined
  )

    const age = dobDate ? calculateAge(dobDate) : null


    const form = useForm<PatientForm>({
        first_name: patient?.first_name || "",
        last_name: patient?.last_name || "",

        phone: patient?.phone || "",
        address: patient?.address || "",
        dob: patient?.dob || "",
        email: patient?.email || "",
        gender: patient?.gender || "",
  })

  const [clientErrors, setClientErrors] = useState<Record<string, string>>({})

  const validate = () => {
  const errors: Record<string, string> = {}

  if (!form.data.first_name.trim()) errors.first_name = "First Name is required"
  if (!form.data.last_name.trim()) errors.last_name = "Last Name is required"
  if (!form.data.dob) errors.dob = "Date of birth is required"
  if (!form.data.phone.trim()) errors.phone = "Phone number is required"
  if (!form.data.gender) errors.gender = "Gender is required"

  setClientErrors(errors)
  return Object.keys(errors).length === 0
}

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) return

    form[method](action, {
      preserveScroll: true,
      onError: () => {
        // keep form open, just show errors
      },
      onSuccess: () => {
        form.reset()
        setDobDate(undefined)
      },
    })
  }

  return (
    <form onSubmit={submit} className="mt-6 px-4 space-y-4">
      {/* Name */}

      <div className="grid grid-cols-2 gap-x-2">

      <FormField
            name="First name"
            label="First Name"
            placeholder="First Name"
            value={form.data.first_name}
            error={clientErrors?.first_name || form.errors?.first_name}
            required
            onChangeEvent={(value) => {
                form.setData("first_name", value)
                setClientErrors(prev => ({ ...prev, first_name: "" }))
            }}
        />

        <FormField
            name="Last name"
            label="Last Name"
            placeholder="Last Name"
            value={form.data.last_name}
            error={clientErrors?.last_name || form.errors?.last_name}
            required
            onChangeEvent={(value) => {
              form.setData("last_name", value)
              setClientErrors(prev => ({ ...prev, last_name: "" }))
            }}
        />
        </div>


      {/* Dob */}
      {/* Date of Birth */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Date of Birth <span className="text-red-400">*</span>
            </label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dobDate ? format(dobDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  captionLayout="dropdown"
                  selected={dobDate}
                  className="rounded-lg border shadow-sm"
                  onSelect={(date) => {
                    if (!date) return
                    setDobDate(date)
                    // Send formatted date to backend
                    form.setData("dob", formatDateForBackend(date))
                  }}
                  disabled={(date) => date > new Date()}
                  
                />
              </PopoverContent>
            </Popover>

            {/* Age */}
            {age !== null && (
              <p className="text-sm text-muted-foreground">
                Age: <span className="font-semibold">{age}</span> years
              </p>
            )}

            {(clientErrors?.dob || form.errors?.dob) && (
              <p className="text-sm text-red-500">
                {clientErrors?.dob || form.errors?.dob}
              </p>
            )}
          </div>

      {/* Gender */}
    <div className="space-y-2">
      <Label className="text-sm font-medium">
        Gender <span className="text-red-400">*</span>
      </Label>

      <Select
        value={form.data.gender}
        onValueChange={(value: "male" | "female") => {
          form.setData("gender", value)
          setClientErrors(prev => ({ ...prev, gender: "" }))
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select gender" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </SelectContent>
      </Select>

      {(clientErrors?.gender || form.errors?.gender) && (
        <p className="text-sm text-red-500">
          {clientErrors?.gender || form.errors?.gender}
        </p>
      )}
    </div>
      {/* Phone */}
      <FormField
            name="phone"
            label="Phone Number"
            placeholder="Phone Number"
            required
            value={form.data.phone}
            error={clientErrors?.phone || form.errors?.phone}
            onChangeEvent={(value) => {
                form.setData("phone", value)
            }}
        />

      <FormField
            name="email"
            label="Email"
            placeholder="Email"
            value={form.data.email}
            type="email"
            error={clientErrors?.email || form.errors?.email}
            onChangeEvent={(value) => {
                form.setData("email", value)
            }}
        />

      {/* Email */}
        <FormField
            name="address"
            label="address"
            placeholder="Address"
            value={form.data.address}
            error={clientErrors?.address || form.errors?.address}
            onChangeEvent={(value) => {
                form.setData("address", value)
            }}
        />
 




      {/* Submit */}
      <Button type="submit" className="w-full cursor-pointer py-5"  disabled={form.processing}>
        {form.processing ? "Saving..." : "Save patient"}
      </Button>
    </form>
  )
}

export default FormPatient;
