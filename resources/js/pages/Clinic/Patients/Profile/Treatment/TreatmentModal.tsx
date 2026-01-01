import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Added for accessibility
import clinic from '@/routes/clinic';
import { useForm } from '@inertiajs/react';
import { PlusCircle, XCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import ToothChart from './ToothChart';

export default function TreatmentModal({ patientId }: { patientId: string }) {
  const [open, setOpen] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm<
  { 
    teeth: number[];
    title: string;
    description: string;
    steps: { id: string; name: string; cost: number ; note:string}[];
  }
  >({
    teeth: [], // Changed to empty string for easier input handling
    title: '',
    description: '',
    steps: [{ id: crypto.randomUUID(), name: 'Consultation', cost: 0 , note:'' }],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload
    
    post(clinic.patient.treatments.store(Number(patientId)).url, {
      onSuccess: () => {
        toast.success("Treatment created successfully");
        setOpen(false);
        reset(); // Clears the form for the next use
      },
    });
  };

  const addStep = () => {
    setData('steps', [
      ...data.steps, 
      { id: crypto.randomUUID(), name: "", cost: 0 , note:'' }
    ]);
  };

  const removeStep = (id: string) => {
    // Prevent removing all steps if you require at least one
    if (data.steps.length > 1) {
      setData('steps', data.steps.filter(step => step.id !== id));
    }
  };

  const updateStep = (index: number, field: 'name' | 'cost' | 'note', value: string | number) => {
    const updatedSteps = [...data.steps];
    updatedSteps[index] = { ...updatedSteps[index], [field]: value };
    setData('steps', updatedSteps);
  };




  // Helper logic inside TreatmentModal
  const toggleTooth = (input: number | number[]) => {

      // Case 1: Clear All (-1)
      if (input === -1) {
        setData('teeth', []);
        return;
      }

    if(Array.isArray(input)){
      // Case 2: Select All
       const newSelection = Array.from(new Set([...data.teeth , ...input])).sort();
       setData('teeth', newSelection);
      return;
    }


    const current = [...data.teeth];
    if (current.includes(input)) {
      setData('teeth', current.filter(t => t !== input));
    } else {
      setData('teeth', [...current, input].sort());
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <PlusCircle className="mr-2 h-4 w-4" /> New Treatment
      </Button>

      <Dialog open={open} onOpenChange={(val) => {
        setOpen(val);
        if (!val) reset(); // Optional: reset form when modal closes
      }}>
        <DialogContent className="" style={{maxWidth:800}}>
          <DialogHeader>
            <DialogTitle>New Treatment Plan</DialogTitle>
          </DialogHeader>

          {/* Use onSubmit here instead of onClick on the button */}
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            
            <div className="space-y-2">
              <Label htmlFor="title">Treatment Title</Label>
              <Input 
                id="title"
                placeholder="e.g. Root Canal" 
                value={data.title} 
                onChange={e => setData('title', e.target.value)} 
              />
              {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="desc">Description</Label>
                <Input 
                  id="desc"
                  placeholder="Notes..." 
                  value={data.description} 
                  onChange={e => setData('description', e.target.value)} 
                />
              </div>
            </div>


            {/* selecte teeth */} 
          <div className="space-y-2">
            <label className="text-sm font-semibold flex justify-between">
              Target Teeth
              <span className="text-xs font-normal text-slate-500">
                  {data.teeth.length} teeth selected
              </span>
            </label>
            
            <ToothChart 
              selectedTeeth={data.teeth} 
              onToggle={toggleTooth} 
            />
            
            {errors.teeth && <p className="text-xs text-red-500">{errors.teeth}</p>}
          </div>



            <div className="space-y-3">
              <Label>Treatment Steps</Label>
              {data.steps.map((step, i) => (
                <div key={step.id} className="flex gap-x-2 items-center animate-in fade-in slide-in-from-top-1">
                  <div className='flex flex-col justify-center gap-y-1'>
                  <Label>
                    name 
                  </Label>
                  <Input
                    className="flex-2"
                    placeholder="Step name"
                    value={step.name}
                    onChange={e => updateStep(i, 'name', e.target.value)}
                    required
                    />
                    </div>
                  <div className='flex flex-col justify-center gap-y-1'>
                    <Label className='text-xs text-accent-foreground '>
                        Cost 
                      </Label>
                      <Input
                        className="flex-1"
                        type="number"
                        placeholder="Cost"
                        value={step.cost}
                        onChange={e => updateStep(i, 'cost', Number(e.target.value))}
                        required
                      />
                  </div>

                  <div className='flex flex-col justify-center gap-y-1'>
                    <Label className='text-xs text-accent-foreground '>
                        note 
                      </Label>
                      <Input
                        className="flex-1"
                        placeholder="Note"
                        value={step.note}
                        onChange={e => updateStep(i, 'note', e.target.value)}
                        required
                      />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <Button 
                      type="button" // CRITICAL: prevents submission
                      size="icon" 
                      variant="ghost" 
                      className="text-destructive hover:text-red-700"
                      onClick={() => removeStep(step.id)}
                      disabled={data.steps.length === 1}
                    >
                      <XCircle className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button
                type="button" // CRITICAL: prevents submission
                variant="outline"
                size="sm"
                className="w-full mt-2 border-dashed"
                onClick={addStep}
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Step
              </Button>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={processing}>
                {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create Treatment
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}