import { AiFillDashboard } from "react-icons/ai";
import {  MdCoPresent } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { SiMicrosoftacademic } from "react-icons/si";
import { CiCalendar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";
import { FcCollaboration } from "react-icons/fc";
import { GrAnnounce } from "react-icons/gr";
import { LuCalendarDays } from "react-icons/lu";
import { PiMessengerLogoLight } from "react-icons/pi";


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
        title: 'Student Directory',
        icon: <PiStudentDuotone />,
        role: 'teacher',
        path: '/teacher/lesson-plan'
    },
    {
        id: 3,
        title: 'My Class',
        icon: <HiOutlineUserGroup />,
        role: 'teacher',
        path: '/teacher/student-info'
    },
    {
        id: 4,
        title: 'Academic Management',
        icon: <SiMicrosoftacademic />,
        role: 'teacher',
        path: '/teacher/student-attendance'
    },
    {
        id: 5,
        title: 'Student Attendance',
        icon: <MdCoPresent />,
        role: 'teacher',
        path: '/teacher/setting'
    },
    {
        id: 6,
        title: 'Class Routine',
        icon: <CiCalendar />,
        role: 'teacher',
        path: '/teacher/collaboration'
    },
    {
        id: 7,
        title: 'Syllabus',
        icon: <LuCalendarDays />,
        role: 'teacher',
        path: '/teacher/academic-management'
    },

    {
        id: 8,
        title: 'Substitute Scheduling',
        icon: < TbCalendarTime />,
        role: 'teacher',
        path: '/teacher/home-work'
    },
    {
        id: 9,
        title: 'Parents Teachers Collaboration',
        icon: <FcCollaboration />,
        role: 'teacher',
        path: '/teacher/group-student'
    },
    {
        id: 10,
        title: 'Messageing',
        icon: <PiMessengerLogoLight />,
        role: 'teacher',
        path: '/teacher/substitute-scheduling'
    },
    {
        id: 11,
        title: 'Announcement',
        icon: < GrAnnounce />,
        role: 'teacher',
        path: '/teacher/announcement'
    },
    
    {
        id: 12,
        title: 'Setting',
        icon: <IoSettingsOutline />,
        role: 'teacher',
        path: '/teacher/apply-leave'
    },

    
]