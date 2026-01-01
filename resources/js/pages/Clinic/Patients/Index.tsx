import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { dashboard } from "@/routes";
import { BreadcrumbItem, FalshProps, FiltersQuery, PaginationLink } from "@/types";
import { Patient } from "@/types"
import { useEffect } from "react";

import { usePage } from "@inertiajs/react";
import { toast } from "sonner";
import useDebouncedSearch from "@/hooks/use-debouncedSearch";
import SearchInput from "@/components/search-inpute";
import PerPage from "@/components/per-page";
import Pagination from "@/components/pagination";
import { Separator } from "@/components/ui/separator";
import DataPatient from "./data-patient";
import CreatePatient from "./create-patient";
import clinic from "@/routes/clinic";


type Props = {
  patients :{ data : Patient[] , links : PaginationLink[]}
  filters : FiltersQuery
}


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Appointments',
        href: '',
    }
];


export default function Index({patients ,filters } : Props) {

 


 
     const { flash }  =  usePage<FalshProps>().props ;
 
     const { searchTerm , handleSearchChange } = useDebouncedSearch({
         route : clinic.patient.index().url,
     })
 
         // For sonner Toast mesage Flash
     useEffect(()=>{
         if(flash.success){
             toast.success(flash.success)
         }
 
         if(flash.error){
             toast.error(flash.error)
         }
     } , [flash])

  return (
        <AppLayout
            breadcrumbs={breadcrumbs}
        >

          <Card className="m-4">
                    <CardHeader>
                        <CardTitle>Patient Management</CardTitle>
                        <CardDescription className="mt-2 text-sm xl:text-base">
                            Here you can add, remove, update all Doctors that work with the lab.
                        </CardDescription>
                        <Separator className="mt-2" />
                        <CardAction>
                            <CreatePatient/>
                        </CardAction>
                    </CardHeader>

                    <CardContent>
                        {/* Search inpute */}
                        <SearchInput
                            handleChange={(e) => handleSearchChange(e.target.value)}
                            searchTerm={filters.search ?? ''}
                        />
                        {/* Table */}
                        <DataPatient patients={patients.data} />
                    </CardContent>
                    <CardFooter className="flex justify-end">
                            <PerPage
                                url="/doctors"
                                defaultPerPage={filters.per_page ?? "15"}
                            />
                            <Pagination  links={patients.links}/>
                    </CardFooter>
                </Card>
        </AppLayout>
  )
}