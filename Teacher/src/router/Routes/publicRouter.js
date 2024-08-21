import { lazy } from 'react'

const Login = lazy(() => import('../../views/auth/teacherlogin'))
const Forgetpassword = lazy(() => import('../../views/auth/Forgetpassword'))
const Setnewpassword = lazy(() => import('../../views/auth/Setnewpassword'))
const Varified = lazy(() => import('../../views/auth/Varified'))
const publicRoutes = [
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/forget-password',
        element: <Forgetpassword />
    },
    {
        path: '/set-newpassword',
        element: <Setnewpassword />
    },
    {
        path: '/varified',
        element: <Varified />
    },
    
]
export default publicRoutes