import { AiFillDashboard, AiOutlineShoppingCart, AiOutlinePlus } from 'react-icons/ai'
import { BiCategory, BiLoaderCircle } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { CiChat1 } from 'react-icons/ci'
import { BsCurrencyDollar, BsChat } from 'react-icons/bs'
import { RiProductHuntLine } from 'react-icons/ri'
export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'teacher',
        path: '/teacher/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart />,
        role: 'teacher',
        path: '/teacher/lesson-plan'
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategory />,
        role: 'teacher',
        path: '/teacher/student-info'
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <FiUsers />,
        role: 'teacher',
        path: '/teacher/student-attendance'
    },
    {
        id: 5,
        title: 'Payment request',
        icon: <BsCurrencyDollar />,
        role: 'teacher',
        path: '/teacher/setting'
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        icon: <FiUsers />,
        role: 'teacher',
        path: '/teacher/collaboration'
    },
    {
        id: 7,
        title: 'Sellers Request',
        icon: <BiLoaderCircle />,
        role: 'teacher',
        path: '/teacher/home-work'
    },
    {
        id: 8,
        title: 'Chat Seller',
        icon: <CiChat1 />,
        role: 'teacher',
        path: '/teacher/group-student'
    },
    {
        id: 9,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'teacher',
        path: '/teacher/substitute-scheduling'
    },
    {
        id: 10,
        title: 'Add Product',
        icon: <AiOutlinePlus />,
        role: 'teacher',
        path: '/teacher/announcement'
    },
    {
        id: 11,
        title: 'All Product',
        icon: <RiProductHuntLine />,
        role: 'teacher',
        path: '/teacher/academic-management'
    },
    {
        id: 11,
        title: 'All Banner',
        icon: <RiProductHuntLine />,
        role: 'teacher',
        path: '/teacher/apply-leave'
    },

    
]