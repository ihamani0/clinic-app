import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
import DataPatient from "./data-archive-patient";

import clinic from "@/routes/clinic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Archive } from "lucide-react";


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
         route : clinic.patient.archive().url,
     })

     const [dob , setDob] = useState(filters.dob || "");


     const resetFilter = () => {
        setDob("");
        handleSearchChange("");
        router.get(clinic.patient.archive().url , {
            per_page: filters.per_page
        } , {
            preserveState:true,
            replace:true
        })
    }

     const handleFilter = () => {
        router.get(clinic.patient.archive().url , {
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
                        <CardTitle className="flex items-center gap-x-2"> <Archive /> Patient Archive </CardTitle>

                        <Separator className="mt-2" />

                    </CardHeader>

                    <CardContent>

                        {/* Search inpute */}
                         <div className="flex flex-col md:flex-row items-end gap-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
                            {/* Name Search */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-muted-foreground">search</label>
                                <SearchInput
                                    handleChange={(e) => handleSearchChange(e.target.value)}
                                    searchTerm={searchTerm ?? ''}
                                    placeholder="By name , Phone ..."
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

                        <Button onClick={resetFilter} variant="outline" className="px-8">
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
                                url={clinic.patient.archive().url}
                                defaultPerPage={filters.per_page ?? "15"}
                            />
                            <Pagination  links={patients.links}/>
                    </CardFooter>
                </Card>
        </AppLayout>
  )
}