import { Dialog, DialogContent } from "./ui/dialog";
import { Spinner } from "./ui/spinner";


export default function LoadingDialog({open} : {open : boolean}) {
  return (
    <Dialog open={open}>
        <DialogContent className="flex items-center justify-center border-0 shadow-none">
            <div className="flex flex-col items-center gap-4 p-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <Spinner />
            </div>
        </DialogContent>
    </Dialog>
  )
}