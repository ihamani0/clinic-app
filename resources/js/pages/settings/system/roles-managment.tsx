

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';
import React from 'react'

type Prope = {
    roles : {
        id:string;
        name:string
    }[]
}

export default function RolesManagment({ roles }:Prope) {
  return (
            <Card className="max-w-4xl">
                <CardHeader className="flex justify-between items-center mb-8">
                    <div>
                        <CardTitle className="text-2xl font-bold">User Roles</CardTitle>
                        <CardDescription className="text-gray-500 text-sm">Define roles to control what users can see and do.</CardDescription>
                    </div>
                    <Button onClick={() => console.log('')} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-blue-700">
                        <PlusCircle/> New Role
                    </Button>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                        {roles.map(role => (
                            <div key={role.id} className="bg-white border rounded-xl p-5 flex justify-between items-center hover:shadow-md transition shadow-sm">
                                <div className="flex items-center space-x-4">
                                    <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                                        {role.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{role.name}</h3>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider">System Role</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="text-gray-400 hover:text-blue-600 p-2">Edit</button>
                                    <button className="text-gray-400 hover:text-red-600 p-2">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
  )
}
