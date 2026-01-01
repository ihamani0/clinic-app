import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarClock, Clock, UserIcon, Stethoscope, FileText } from "lucide-react";
import { getBadgeVariantApp } from "@/lib/utils"; // your status badge mapper
import { AppointmentExtendedProps } from "./Index";
import BoxColor from "@/components/ui/box-color";

export default function AppointmentDialog({
  isModalOpen,
  setOpenDialog,
  selectedEvent,
}: {
  isModalOpen: boolean;
  setOpenDialog: (open: boolean) => void;
  selectedEvent: AppointmentExtendedProps | null;
}) {
  return (
    <Dialog open={isModalOpen} onOpenChange={setOpenDialog}>

      <DialogContent className="max-w-md rounded-xl shadow-xl border bg-white dark:bg-neutral-900" style={{maxWidth:'680px'}}>
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-xl font-semibold flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-primary" />
            Appointment Details
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Overview of the appointment information
          </p>
        </DialogHeader>

        {selectedEvent && (
          <div className="space-y-4 mt-2">


              <div className="flex items-start gap-3">
                <UserIcon className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Create By :</p>
                  <p className="font-medium">
                    {selectedEvent.creator}
                  </p>
                </div>
              </div>

            {/* Patient & Doctor */}
            <div className="grid grid-cols-1 gap-3 bg-accent/40 p-3 rounded-lg">
              <div className="flex items-start gap-3">
                <UserIcon className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Patient</p>
                  <p className="font-medium">
                    {selectedEvent.patient}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Stethoscope className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Doctor</p>
                  <p className="font-medium">{selectedEvent.doctor}</p>
                </div>
              </div>
            </div>

            {/* Status +*/}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Status</p>
                <Badge variant={getBadgeVariantApp(selectedEvent.status)}>
                  {selectedEvent.status}
                </Badge>
              </div>

            </div>

                {/* category + Type */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Category</p>
                <div className="flex items-center gap-x-2">
                    <BoxColor color={selectedEvent.categoryColor} />
                    <p className="font-medium">{selectedEvent.category}</p>
                </div>
              </div>

              <div className="text-left">
                <p className="text-xs text-muted-foreground">Type</p>
                <p className="font-medium">{selectedEvent.type}</p>
              </div>
            </div>


            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-2 rounded-md border">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Start</p>
                  <p className="text-sm font-medium">
                    {new Date(selectedEvent.start).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-md border">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">End</p>
                  <p className="text-sm font-medium">
                    {new Date(selectedEvent.end).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Notes */}
            {selectedEvent.note && (
              <div className="p-3 rounded-lg border bg-muted/30">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">Notes</p>
                </div>
                <p className="text-sm">{selectedEvent.note}</p>
              </div>
            )}
          </div>
        )}

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpenDialog(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
