import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";



 

type Props = {
selectedTeeth: number[], 
  onToggle: (num: number | number[] ) => void 
}


      // Define quadrants based on FDI notation
  const q1 = [18, 17, 16, 15, 14, 13, 12, 11]; // Upper Right
  const q2 = [21, 22, 23, 24, 25, 26, 27, 28]; // Upper Left
  const q4 = [48, 47, 46, 45, 44, 43, 42, 41]; // Lower Right
  const q3 = [31, 32, 33, 34, 35, 36, 37, 38]; // Lower Left

  const ALL_TEETH = [...q1, ...q2, ...q3, ...q4];

  
export default function ToothChart({ selectedTeeth, onToggle }: Props) {


  const ToothButton = ({ num }: { num: number }) => (
    <button
      type="button"
      onClick={() => onToggle(num)}
      className={cn(
        "h-8 w-8 text-[10px] font-bold border rounded-sm transition-all flex items-center justify-center",
        selectedTeeth.includes(num)
          ? "bg-blue-600 text-white border-blue-700 shadow-inner scale-95"
          : "bg-white hover:bg-blue-50 text-slate-600 border-slate-200"
      )}
    >
      {num}
    </button>
  );


  return (
     <div className="flex flex-col items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
      {/* Top Row (Q1 | Q2) */}
      <div className="flex gap-4 mb-4">
        {/* Quadrant 1 */}
        <div className="grid grid-cols-8 gap-1 border-r-2 border-b-2 border-slate-300 pr-2 pb-2">
          {q1.map(n => <ToothButton key={n} num={n} />)}

           
          <div className="col-span-8 text-[9px] text-right text-slate-400 font-bold pr-1 flex items-center gap-x-3 ">
            Q1 (UR)
            <button 
                type="button"
                onClick={() => onToggle(q1)}
                className="text-[8px] bg-slate-200 px-1 rounded hover:bg-slate-300 cursor-pointer"
                >
                SEL Q1
            </button>
            </div>
        </div>
        
        {/* Quadrant 2 */}
        <div className="grid grid-cols-8 gap-1 border-l-2 border-b-2 border-slate-300 pl-2 pb-2">
          {q2.map(n => <ToothButton key={n} num={n} />)}

          <div className="col-span-8 text-[9px] text-right text-slate-400 font-bold pr-1 flex items-center gap-x-3">
            Q2 (UL)
            <button 
                type="button"
                onClick={() => onToggle(q2)}
                className=" bg-slate-200 px-1 rounded hover:bg-slate-300 cursor-pointer"
            >
                SEL Q2
            </button>
            </div>
        </div>
      </div>

      {/* Bottom Row (Q4 | Q3) */}
      <div className="flex gap-4">
        {/* Quadrant 4 */}
        <div className="grid grid-cols-8 gap-1 border-r-2 border-t-2 border-slate-300 pr-2 pt-2">
          <div className="col-span-8 text-[9px] text-right text-slate-400 font-bold pr-1 flex items-center gap-x-3 ">
           
            Q4 (LR)
            <button 
                
                type="button"
                onClick={() => onToggle(q4)}
                className="text-[8px] bg-slate-200 px-1 rounded hover:bg-slate-300 cursor-pointer"
                >
            SEL Q4
            </button>
          </div>
          {q4.map(n => <ToothButton key={n} num={n} />)}

        </div>

        {/* Quadrant 3 */}
        <div className="grid grid-cols-8 gap-1 border-l-2 border-t-2 border-slate-300 pl-2 pt-2">
                    <div className="col-span-8 text-[9px] text-right text-slate-400 font-bold pr-1 flex items-center gap-x-3 ">
                    Q3 (LL)
                    <button 
                        type="button"
                        onClick={() => onToggle(q3)}
                        className="text-[8px] bg-slate-200 px-1 rounded hover:bg-slate-300 cursor-pointer"
                        >
                    SEL Q3
                    </button>
                    </div>
          {q3.map(n => <ToothButton key={n} num={n} />)}

        </div>
      </div>
      
      <div className="mt-4 flex gap-2">
         <button 
            type="button" 
            className="text-[10px] text-blue-600 hover:underline"
            onClick={() => onToggle(ALL_TEETH)} // Logic to select all
         >
           Select All
         </button>
         <span className="text-slate-300">|</span>
         <button 
            type="button" 
            className="text-[10px] text-red-600 hover:underline"
            onClick={() => onToggle(-1)} // Logic to clear all
         >
           Clear Selection
         </button>
      </div>
    </div>
  )
}
