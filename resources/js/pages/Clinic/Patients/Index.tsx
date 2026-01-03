import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { dashboard } from "@/routes";
import { BreadcrumbItem, FiltersQuery, PaginationLink } from "@/types";
import { Patient } from "@/types"
import {  useState } from "react";
import { router } from "@inertiajs/react";
import useDebouncedSearch from "@/hooks/use-debouncedSearch";
import SearchInput from "@/components/search-inpute";
import PerPage from "@/components/per-page";
import Pagination from "@/components/pagination";
import { Separator } from "@/components/ui/separator";
import DataPatient from "./data-patient";
import CreatePatient from "./create-patient";
import clinic from "@/routes/clinic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


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


     const { searchTerm , handleSearchChange } = useDebouncedSearch({
         route : clinic.patient.index().url,
     })

     const [dob , setDob] = useState(filters.dob || "");

     const handleFilter = () => {
        router.get(clinic.patient.index().url , {
            search: searchTerm || filters.search, // Use current debounced value or existing filter
            dob: dob,
            per_page: filters.per_page
        }, {
            preserveState:true,
            replace: true 
        }   
        )
    }

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
                         <div className="flex flex-col md:flex-row items-end gap-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                            {/* Name Search */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Name</label>
                                <SearchInput
                                    handleChange={(e) => handleSearchChange(e.target.value)}
                                    searchTerm={searchTerm}
                                />
                            </div>

                            

                            {/* Birth Date Search */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">Birth Date</label>
                                <Input 
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </div>
                        </div>

                        <Button onClick={() => {
                            setDob("");
                            handleSearchChange("");
                            router.get(clinic.patient.index().url , {
                                per_page: filters.per_page
                            } , {
                                preserveState:true,
                                replace:true
                            })
                        }} variant="outline" className="px-8">
                            Reset
                        </Button>
                        <Button onClick={handleFilter} className="px-8">
                            Filter
                        </Button>
                    </div>

                        {/* Table */}
                        <DataPatient patients={patients.data} />
                    </CardContent>
                    <CardFooter className="flex justify-end">
                            <PerPage
                                url={clinic.patient.index().url}
                                defaultPerPage={filters.per_page ?? "15"}
                            />
                            <Pagination  links={patients.links}/>
                    </CardFooter>
                </Card>
        </AppLayout>
  )
}