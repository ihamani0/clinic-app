import { DateTimeValue } from "@/types"


import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { CalendarDays } from "lucide-react"
import { format } from "date-fns"
import { AppointmentHours } from "@/constants"
import { SelectValue } from "@radix-ui/react-select"


type Props = {
  label: string
  value: DateTimeValue
  onChange: (val: DateTimeValue) => void
}


export default function DateTimePicker({ label, value, onChange }: Props) {
  return (
     <div className="space-y-2">
      <Label className="text-sm font-semibold">{label}</Label>

      {/* Date */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            {value.date ? format(value.date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value.date}
            onSelect={(date) => onChange({ ...value, date })}
            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
          />
        </PopoverContent>
      </Popover>

      {/* Time */}
      <div className="flex gap-2">
        <Select
          value={value.hour}
          onValueChange={(hour) => onChange({ ...value, hour })}
        >
          <SelectTrigger className="w-full">
            <SelectValue title="hour" />
          </SelectTrigger>
          <SelectContent>
            {AppointmentHours.map((h) => {
              const paddedHour = h.toString().padStart(2, '0');
              return (
                <SelectItem key={paddedHour} value={paddedHour}>
                  {paddedHour}
                </SelectItem>
              )
            })}
          </SelectContent>  
        </Select>

        <Select
          value={value.minute}
          onValueChange={(minute) => onChange({ ...value, minute })}
        >
          <SelectTrigger className="w-full">
            <SelectValue title="Minute" />
          </SelectTrigger>
          <SelectContent>
            {["00", "15", "30", "45"].map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}