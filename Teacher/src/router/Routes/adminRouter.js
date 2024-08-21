import { lazy } from 'react'
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))
const Profile = lazy(() => import("../../views/admin/Profile"))


export const adminRoutes = [
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