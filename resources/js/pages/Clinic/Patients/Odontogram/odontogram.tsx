import { DentalChart } from "@/components/odontogram/DentalChart";
import { Tooth } from "@/types";


export type OdontogramProps = {
  teeth: Tooth[];
  patient_id: number;
};

export default function Odontogram({teeth , patient_id} : OdontogramProps) {
  return (
    <div>
        <DentalChart teeth={teeth}  patient_id={patient_id}/>
    </div>
  )
}