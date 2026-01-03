import { Dialog, DialogContent } from "@/components/ui/dialog"
import clinic from "@/routes/clinic"
import { MediaItem } from "@/types"
import { router } from "@inertiajs/react"
import { File, Trash2 } from "lucide-react"
import { useState } from "react"

 
export default function MediaGrid({ title, patientId, media }: { title: string; patientId: number; media: MediaItem[] }) {


  const [preview, setPreview] = useState<string | null>(null);

  const deleteMedia = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (!confirm("Are you sure you want to delete this file?")) return;

    router.delete(clinic.patient.media.delete({ patient: patientId, media: id }).url, {
      preserveScroll: true,
    });
  };

  if (!media.length) return null;


  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold tracking-tight text-slate-900">{title}</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {media.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square rounded-xl border bg-muted overflow-hidden transition-all hover:ring-2 hover:ring-primary/50"
          >
            {item.mime_type.startsWith("image") ? (
              /* IMAGE VIEW: Opens Modal */
              <img
                src={item.original_url}
                alt={item.file_name}
                className="h-full w-full object-cover object-center cursor-zoom-in transition-transform duration-300 group-hover:scale-105"
                onClick={() => setPreview(item.original_url)}
              />
            ) : (
              /* DOCUMENT VIEW: Opens in New Tab */
              <a
                href={item.original_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col items-center justify-center gap-2 p-4 text-muted-foreground hover:bg-slate-100 transition-colors"
              >
                <File className="h-8 w-8 text-primary" />
                <span className="text-xs text-center truncate w-full px-2">
                  {item.file_name}
                </span>
              </a>
            )}

            {/* Hover Actions Bar */}
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button
                onClick={(e) => deleteMedia(e, Number(item.id))}
                className="p-1.5 bg-destructive text-destructive-foreground rounded-md shadow-lg hover:bg-destructive/90 transition-colors"
                title="Delete file"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal for Images */}
      <Dialog open={!!preview} onOpenChange={() => setPreview(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none" style={{ maxWidth: 1024 }}>
          {preview && (
            <img 
              src={preview} 
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl" 
              alt="Preview"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}