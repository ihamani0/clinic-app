import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, FiltersQuery, PaginationLink } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardAction, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DataUsers from "./data-users";
import PerPage from "@/components/per-page"; // Assuming you have this
import { User as UserType, Role } from "@/types";
import CreateUser from "./create-users";
import clinic from "@/routes/clinic";

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/' },
    { title: 'User Management', href: '/users' }
];

type Props = {
    users: { data: UserType[]; links: PaginationLink[] };
    roles: Role[];
    filters: FiltersQuery;
};

export default function UsersIndex({ users, roles, filters }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Card className="m-4">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>Users Management</CardTitle>
                            <CardDescription className="mt-2 text-sm xl:text-base">
                                Manage system users, assign roles, and control account access.
                            </CardDescription>
                        </div>
                        <CardAction>
                             <CreateUser roles={roles}  />
                        </CardAction>
                    </div>
                    <Separator className="mt-2" />
                </CardHeader>

                <CardContent>
                    {/* Add Search Input Here if needed */}
                    
                    <DataUsers users={users.data} roles={roles} />
                </CardContent>

                <CardFooter className="flex justify-end">
                    <PerPage
                        url={clinic.users.index().url}
                        defaultPerPage={filters.per_page ?? "10"}
                    />
                    {/* Add your <Pagination links={users.links} /> here */}
                    </CardFooter>
            </Card>
        </AppLayout>
    );
}