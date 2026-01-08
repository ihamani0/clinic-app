import React, { useState, useEffect, useCallback } from "react";
import { Check, ChevronsUpDown, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import axios from "axios";
import clinic from "@/routes/clinic";

type Patient = { id: number | string; first_name: string; last_name: string; dob: string };

interface PatientSelectorProps {
  birthday: string;
  onBirthdayChange: (dob: string) => void;
  value: string;
  onSelect: (patientId: string) => void;
  error?: string;
  newlyCreatedPatient?: Patient | null;
}

export function PatientSelector({ value,birthday ,  onBirthdayChange, onSelect, error, newlyCreatedPatient }: PatientSelectorProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // Fetch patients filtered by birthday
  const fetchPatients = useCallback(async (dob: string) => {
    if (!dob) return;
    setLoading(true);
    try {
      const response = await axios.get(clinic.patient.byBirthday().url, {
        params: { birthday: dob }
      });
      setPatients(response.data);
    } catch (err) {
      console.error("Failed to load patients", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (birthday) {
      fetchPatients(birthday);
    }
  }, [birthday, fetchPatients]);

  const selectedPatient = patients.find((p) => p.id.toString() === value) 
                          || (newlyCreatedPatient?.id.toString() === value ? newlyCreatedPatient : null);

  return (
    <div className="space-y-4 p-4 border rounded-xl bg-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Step 1: Filter by Birthday */}
        <div className="space-y-1">
          <Label className="text-xs font-bold uppercase text-muted-foreground">1. Filter by Birthday</Label>
          <div className="relative">
            <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="date"
              className="pl-8"
              value={birthday}
              onChange={(e) => {
                onBirthdayChange(e.target.value);
                onSelect(""); // Reset selection when date changes
              }}
            />
          </div>
        </div>

        {/* Step 2: Select from results */}
        <div className="space-y-1">
          <Label className="text-xs font-bold uppercase text-muted-foreground">2. Select Patient</Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
                disabled={!birthday || loading}
              >
                {loading ? (
                  <Spinner className="mr-2 h-4 w-4" />
                ) : selectedPatient ? (
                  `${selectedPatient.first_name} ${selectedPatient.last_name}`
                ) : (
                  "Select patient..."
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Command>
                <CommandInput placeholder="Search by name..." />
                <CommandList>
                  <CommandEmpty>No patient found for this date.</CommandEmpty>
                  <CommandGroup>
                    {patients.map((patient) => (
                      <CommandItem
                        key={patient.id}
                        value={`${patient.first_name} ${patient.last_name}`}
                        onSelect={() => {
                          onSelect(patient.id.toString());
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === patient.id.toString() ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {patient.first_name} {patient.last_name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}