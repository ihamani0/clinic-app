import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ReactNode } from "react"

interface TooltipProps {
  children: ReactNode;      // The element you hover over
  content: ReactNode;       // The text/content inside the tooltip
  side?: "top" | "bottom" | "left" | "right";
  delayDuration?: number;   // How fast it appears
}



export function TooltipWrapper({ 
  children, 
  content, 
  side = "top", 
  delayDuration = 200 
}: TooltipProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent side={side}>
          {typeof content === 'string' ? <p>{content}</p> : content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}