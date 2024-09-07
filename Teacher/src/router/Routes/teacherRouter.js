import { lazy } from 'react'
const TeacherDashboard = lazy(() => import("../../views/Teacher/TeacherDashboard"))
const AcademicManagement = lazy(() => import("../../views/Teacher/Student_Information"))
const Announcement = lazy(() => import("../../views/Teacher/Myclass"))
const ClassRoutine = lazy(() => import("../../views/Teacher/Academic_Management"))
const ApplyForLeave = lazy(() => import("../../views/Teacher/Student_Attendance"))
const StudentAttendance = lazy(() => import("../../views/Teacher/Student_Result"))
const ParentsTeachersCollaboration = lazy(() => import("../../views/Teacher/Class_Routine"))
const StudentInformation = lazy(() => import("../../views/Teacher/Substitute_Scheduling"))
const SubstituteScheduling = lazy(() => import("../../views/Teacher/TeacherProfile"))
const StudentResult = lazy(() => import("../../views/Teacher/Student_Result"))
const Setting = lazy(() => import("../../views/Teacher/Setting"))
const HomeWorks = lazy(() => import("../../views/Teacher/Home_Works"))

export const teacherRouter = [
    {
        path: '/teacher/dashboard',
        element: <TeacherDashboard />,
        role: 'teacher',
        status: 'active'
    },
   
    {
        path: '/teacher/dashboard/academic-management',
        element: <AcademicManagement />,
        role: 'teacher',
        status: 'active'
    },
    {
        path: '/teacher/dashboard/announcement',
        element: <Announcement />,
        role: 'teacher',
        status: 'active'
    },
    {
        path: '/teacher/dashboard/class-routine',
        element: <ClassRoutine />,
        role: 'teacher',
        status: 'active'
    },

    {
        path: '/teacher/dashboard/applyforleave',
        element: <ApplyForLeave />,
        role: 'teacher',
        status: 'active'
    },
    {
        path: '/teacher/dashboard/student-attendance',
        element: <StudentAttendance />,
        role: 'teacher',
        visibility: ['active', 'deactive']
    },
    {
        path: '/teacher/dashboard/colloaboration',
        element: <ParentsTeachersCollaboration />,
        role: 'teacher',
        visibility: ['active', 'deactive']
    },
    {
        path: '/teacher/dashboard/lesson',
        element: <LessonPlan />,
        role: 'teacher',
        status: 'active'
    },
    {
        path: '/teacher/dashboard/studentinfo',
        element: <StudentInformation />,
        role: 'teacher',
        visibility: ['active', 'deactive', 'pending']
    },
    {
        path: '/teacher/dashboard/subtitute-sheduling',
        element: <SubstituteScheduling />,
        role: 'teacher',
        status: 'active'
    },
    {
        path: '/teacher/dashboard/student-result',
        element: <StudentResult />,
        role: 'teacher',
        status: 'active'
    },
    {
        path: '/teacher/dashboard/setting',
        element: <Setting />,
        role: 'teacher',
        visibility: ['active', 'deactive', 'pending']
    },
    {
        path: '/teacher/dashboard/home-work',
        element: <HomeWorks />,
        role: 'teacher',
        status: 'active'
    },
    
]