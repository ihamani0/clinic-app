import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Quadrant } from "./Quadrant";
import { TreatmentPanel } from "./TreatmentPanel";
import { TeethState } from "./types";
 
import clinic from "@/routes/clinic";
import { toast } from "sonner";
import { ToothStatus } from "./types";
import { router } from "@inertiajs/react";
import { OdontogramProps } from "@/pages/Clinic/Patients/Odontogram/odontogram";
import { Tooth } from "@/types";
 



 

const Q1 = [18,17,16,15,14,13,12,11];
const Q2 = [21,22,23,24,25,26,27,28];
const Q4 = [48,47,46,45,44,43,42,41];
const Q3 = [31,32,33,34,35,36,37,38];

function mapTeethToState(teeth: Tooth[]): TeethState {

  return teeth.reduce((acc, tooth) => {
    acc[tooth.number] = { status: tooth.status, note: tooth.note ?? "" };
    return acc;
  }, {} as TeethState);
}


export function DentalChart({teeth , patient_id} : OdontogramProps) {


  const [state, setState] = useState<TeethState>(
    () => mapTeethToState(teeth) 
  );

  const [selected, setSelected] = useState<number | null>(null);

  const selectedToothData = selected ? state[selected] : undefined;


  const [saving, setSaving] = useState<number | undefined>(undefined); // tooth being saved


  const handleApply = (status : ToothStatus , note : string)=> {
      
      if (!selected) return;

      // 1. Update local state immediately
      setState((prev) => ({ ...prev, [selected]: {status, note} }));

      // 2. Show saving indicator
      setSaving(selected);

      // 3. Save DB
      router.post(clinic.patient.teeth.updateSingle(patient_id).url , {
          tooth_number: selected,
          status,
          note
      } , {
        preserveState : true,
        preserveScroll : true,
        only : [], // no re-render data,

        onSuccess : () => {
          toast.success("Tooth updated successfully");
        } ,

        onError : () => {
          // revert local state
          setState((prev) => {
            const newState = { ...prev };
            delete newState[selected];
            return newState;
          });
          toast.error("Failed to update tooth");
        } ,

        onFinish : () => {
          setSaving(undefined);
        }
      })
  }



  const updateNote = (note: string) => {
    if (!selected) return;

    setState(prev => ({
      ...prev,
      [selected]: {
        ...prev[selected],
        note,
      },
    }));
  };



  return (
    <div className="space-y-6">

      <Card className="p-6">
        <div className="flex gap-8 border-b pb-4">
          <Quadrant teeth={Q1} state={state} selectedTooth={selected} onSelect={setSelected} 
            saving={saving} />
          <div className="w-px bg-border" />
          <Quadrant teeth={Q2} state={state} selectedTooth={selected} onSelect={setSelected} 
            saving={saving}/>
        </div>

        <div className="flex gap-8 pt-4">
          <Quadrant teeth={Q4} state={state} selectedTooth={selected} onSelect={setSelected}
            saving={saving} />
          <div className="w-px bg-border" />
          <Quadrant teeth={Q3} state={state} selectedTooth={selected} onSelect={setSelected} 
            saving={saving}/>
        </div>
      </Card>

      <Card className="p-6">

        <TreatmentPanel
          selectedTooth={selected}
          currentStatus={selectedToothData?.status}
          note={selectedToothData?.note ?? ""}
          onNoteChange={updateNote}
          onApply={handleApply}
        />

      </Card>
    </div>
  );
}
