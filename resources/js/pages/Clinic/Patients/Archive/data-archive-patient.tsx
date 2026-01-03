 
import { Button } from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {  router } from "@inertiajs/react";
import { Recycle } from "lucide-react";
import clinic from "@/routes/clinic";
import { Patient } from "@/types";
import DeleteAlertDialog from "@/components/delete-alert-dialoge";
 


type Props = {
  patients: Patient[]
}

function DataPatient({patients} : Props) {

  const handelDelete = (id : number) => {
     router.delete(clinic.patient.archive.forceDelete({patient:id}).url , {
      preserveScroll:true,
     })
  }


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>BirthDay</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
        <TableBody>
            {patients.map((p) => (
          <TableRow key={p.id}>
            <TableCell>
              {p.first_name} {p.last_name}
            </TableCell>
            <TableCell>{p.phone}</TableCell>
            <TableCell className="capitalize">{p.gender}</TableCell>
            <TableCell className="">
              {new Date(p.dob).toLocaleDateString()}
            </TableCell>
            <TableCell className="text-right space-x-2">
               
              {/* Restore */}
              
                <Button
                  variant="default"
                  size="sm"
                  onClick={()=> {
                    
                    router.post(clinic.patient.archive.restore({patient:Number(p.id)}).url , {
                        replace:true,
                        preserveState:true,
                    })
                  }}
                >
                  <Recycle />
                </Button>
              

              <DeleteAlertDialog onApply={() => handelDelete(Number(p.id))} />
            </TableCell>


          </TableRow>
        ))}
        </TableBody>
    </Table>
  )
}
export default DataPatient
