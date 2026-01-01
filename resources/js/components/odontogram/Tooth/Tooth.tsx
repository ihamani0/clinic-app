import { ToothStatus } from "../types";
import { TOOTH_STATUS_CONFIG } from "./tooth-status";
import { ToothSvg } from "./ToothSvg";
import { cn } from "@/lib/utils";

type Props = {
  id: number;
  status: ToothStatus;
  selected: boolean;
  onSelect: (id: number) => void;
  saving ?: number
};

export function Tooth({ id, status, selected, onSelect , saving }: Props) {
  const config = TOOTH_STATUS_CONFIG[status];

  return (
    <button
      onClick={() => onSelect(id)}
      className={cn(
        "flex flex-col items-center transition",
        selected ? "scale-110 -translate-y-1" : "hover:scale-105"
      )}
    >
      <ToothSvg
        statusClass={config.className}
        isMissing={status === "missing"}
        isAbutment={status === "abutment"}
      />
      <span
        className={cn(
          "text-xs font-semibold",
          selected ? "text-primary" : "text-muted-foreground"
        )}
      >
        {id} {saving === id && <span className="text-blue-500">⏳</span>}
      </span>
    </button>
  );
}
