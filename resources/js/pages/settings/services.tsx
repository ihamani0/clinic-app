import HeadingSmall from "@/components/heading-small";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppLayout from "@/layouts/app-layout";
import SettingsLayout from "@/layouts/settings/layout";
import { dashboard } from "@/routes";
import { BreadcrumbItem } from "@/types";
import { Head, router } from "@inertiajs/react";
import { MoreHorizontal, Settings2,   Trash2 } from "lucide-react";
import { AddCategoryDialog } from "./services/AddCategoryDialog";
import { AddTypeDialog } from "./services/AddTypeDialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { EditCategoryDialog } from "./services/EditCategoryDialog";
import { EditTypeDialog } from "./services/EditTypeDialog";
import service from "@/routes/service";

export interface AppointmentType {
    id: number;
    appointment_category_id: number;
    name: string;
    default_duration: number;
    default_price: number | string;
}

export interface AppointmentCategory {
    id: number;
    name: string;
    color: string;
    types: AppointmentType[];
}

interface ServicesSettingsProps {
    categories: AppointmentCategory[];
}


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'dashboard',
        href: dashboard().url,
    },
    {
        title: 'Services settings',
        href: "",
    },
];  



export default function ServicesSettings({ categories } : ServicesSettingsProps) {

    const handleDeleteType = (id: number) => {

        if (confirm('Are you sure you want to delete this procedure? This will not affect existing patient records.')) {
            
            router.delete(service.types.delete({type:id}).url,{
                preserveScroll : true ,
                preserveState : true
            });
        }
    };

    const handleDeleteCategory = (id: number) => {
        if (confirm('Deleting a category will remove all procedures inside it. Continue?')) {
            router.delete(service.categories.delete({category:id}).url , {
                preserveScroll : true ,
                preserveState : true
            });
        }
    };


  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title="Service settings" />
        
        <HeadingSmall
                    title="System settings"
                    description="Update your System settings"
        />
                {/* Roles */}   

        <Separator/>
        <SettingsLayout>

                
            <div className="p-8 space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                    <h1 className="text-2xl font-bold">Service Catalog</h1>
                    <p className="text-muted-foreground">Manage your clinic's procedures and default pricing.</p>
                    </div>
                    {/* Add Category Dialoge  */}
                    <AddCategoryDialog/>
                </div>

                <Tabs defaultValue={categories[0]?.id.toString()}>
                    <TabsList>
                    {categories.map(cat => (
                        <TabsTrigger key={cat.id} value={cat.id.toString()}>
                        {cat.name}
                        </TabsTrigger>
                    ))}
                    </TabsList>

                    {categories.map(cat => (
                    <TabsContent key={cat.id} value={cat.id.toString()}>
                        <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <CardTitle>{cat.name} Procedures</CardTitle>
                                    {/* Category Level Actions */}
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                                <Settings2 className="h-4 w-4 text-muted-foreground" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem asChild>
                                               <EditCategoryDialog category={cat} />
                                            </DropdownMenuItem>
                                            <DropdownMenuItem  asChild className="">
                                                <Button
                                                variant="ghost"
                                                className="text-destructive w-full flex justify-start" 
                                                onClick={() => handleDeleteCategory(cat.id)}
                                                >
                                                <Trash2 />
                                                Delete Category
                                                </Button>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <CardDescription>Default prices and durations.</CardDescription>
                            </div>
                            <AddTypeDialog categoryId={cat.id.toString()} />
                        </CardHeader>
                        <CardContent>
                            <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Procedure Name</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Base Price</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cat.types.map(type => (
                                <TableRow key={type.id}>
                                    <TableCell className="font-medium">{type.name}</TableCell>
                                    <TableCell>{type.default_duration} mins</TableCell>
                                    <TableCell>{type.default_price}</TableCell>
                                    <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem asChild>
                                            <EditTypeDialog type={type}/>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem 
                                            onClick={() => handleDeleteType(type.id)}
                                            className="text-destructive focus:text-destructive"
                                        >
                                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                                        </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </CardContent>
                        </Card>
                    </TabsContent>
                    ))}
                </Tabs>
            </div>
        </SettingsLayout>
    </AppLayout>
  )
}