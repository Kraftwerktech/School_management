import { lazy } from 'react'
const CoordinatorDashboard = lazy(() => import("../../views/Coordinator/Dashboard"))
const Studentdir = lazy(() => import("../../views/Coordinator/Student_directory"))


export const Coordinator = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/orders',
        element: <Profile />,
        role: 'admin'
    },
    
]