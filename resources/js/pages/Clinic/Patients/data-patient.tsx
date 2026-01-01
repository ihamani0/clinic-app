 
import { Button } from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import { Link } from "@inertiajs/react";
import { Eye } from "lucide-react";
 
import { Badge } from "@/components/ui/badge";
 
import clinic from "@/routes/clinic";
import { Patient } from "@/types";
import EditPatietn from "./edit-patietn";
 

function getBadgeVariant(state : number ){
    if(state > 0) {
        return "destructive"
    }else if (state < 0){
        return "success"
    }else {
        return "default"
    }
}
type Props = {
  patients: Patient[]
}

function DataPatient({patients} : Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Balance</TableHead>
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
             {p.balance ? (
                <Badge variant={getBadgeVariant(p.balance ?? 0)}>
                  {p.balance ?? "-"}
              </Badge>
             ):('-')}

               
            </TableCell>
            <TableCell className="text-right space-x-2">
                {/* Show Patient */}
              <Link href={clinic.patient.show(p.id).url} >
                <Button
                  variant="outline"
                  size="sm"
                  >
                    <Eye />
                </Button>
              </Link>

            {/* Edit Patient */}
              <EditPatietn  patient={p}  />
            </TableCell>


          </TableRow>
        ))}
        </TableBody>
    </Table>
  )
}
export default DataPatient
