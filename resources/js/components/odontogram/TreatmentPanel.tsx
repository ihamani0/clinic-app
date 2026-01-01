import { Button } from "@/components/ui/button";
import { TOOTH_STATUS_CONFIG } from "./Tooth/tooth-status";
import { ToothStatus } from "./types";
import { Textarea } from "../ui/textarea";
 

type Props = {
  selectedTooth: number | null;
  currentStatus?: ToothStatus;
  note?: string;
  onNoteChange : (note: string) => void;
  onApply: (status: ToothStatus , note : string ) => void;
};

export function TreatmentPanel({
    selectedTooth,
    currentStatus,
    note,
    onNoteChange,
    onApply,
}: Props) {

 




  if (!selectedTooth) {
    return (
      <div className="border-dashed border rounded-lg p-6 text-center text-muted-foreground">
        Select a tooth to apply treatment
      </div>
    );
  }


    // 2. Create a handler for the Save button
    const handleSave = () => {
      // You can pass the current status and the note back to the parent
        onApply(currentStatus ?? "healthy", note ?? "");
        
    };

  return (
    <>
    <div className="grid grid-cols-3 gap-3">
      {Object.entries(TOOTH_STATUS_CONFIG).map(([key, config]) => (
        <Button
          key={key}
          variant={currentStatus === key ? "default" : "outline"}
          onClick={() => onApply(key as ToothStatus , note ?? "")}
        >
          {config.label}
        </Button>
      ))}

    </div>

        <div className="flex flex-col gap-y-4 mt-4">

              <Textarea
                name="note"
                placeholder="Add any notes regarding the selected tooth here..."
                className="mt-4"
                value={note} // 3. Bind the value to state
                onChange={(e) => onNoteChange(e.target.value)} // 4. Update state on type
              />
            <div className="self-end">
              <Button variant={'default'} className="cursor-pointer"  onClick={handleSave}>
                  Save
              </Button>
            </div>
          </div>
    </>

  );
}
