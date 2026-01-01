import { Tooth } from "./Tooth/Tooth";
import { TeethState } from "./types";

type Props = {
  teeth: number[];
  state: TeethState;
  selectedTooth: number | null;
  onSelect: (id: number) => void;
  saving?:number
};

export function Quadrant({ teeth, state, selectedTooth, onSelect , saving}: Props) {
  return (
    <div className="flex gap-1">
      {teeth.map((id) => (
        <Tooth
          key={id}
          id={id}
          status={state[id]?.status ?? "healthy"}
          selected={selectedTooth === id}
          onSelect={onSelect} 
          saving={saving}
        />
      ))}
    </div>
  );
}
