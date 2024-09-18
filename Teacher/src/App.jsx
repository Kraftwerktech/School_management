import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import TeacherDashboard from './views/Teacher/TeacherDashboard';
import Lesson_Plan from './views/Teacher/Lesson_Plan';
import Student_Information from './views/Teacher/Student_Information';
import Class_Attendance from './views/Teacher/StudentAttendances/ClassAttendances';
import Subject_Attendance from './views/Teacher/StudentAttendances/SubjectAttendances';
import Student_Result from './views/Teacher/Student_Result';
import Setting from './views/Teacher/Setting';

import Home_Works from './views/Teacher/Home_Works';
import Group_Students_By_Class from './views/Teacher/Group_Students_By_Class';
import Substitute_Scheduling from './views/Teacher/Substitute_Scheduling';
import Announcement from './views/Teacher/Announcement';
import Academic_Management from './views/Teacher/Academic_Management';
import Apply_For_Leave from './views/Teacher/Apply_For_Leave';
import Teacherlogin from './views/auth/teacherlogin';
import Varified from './views/auth/Varified';
import Setnewpassword from './views/auth/Setnewpassword';
import Forgetpassword from './views/auth/Forgetpassword';
import TeacherProfile from './views/Teacher/TeacherProfile';
import Class_Routine from './views/Teacher/Class_Routine';
import Myclass from './views/Teacher/myclass';
import StudentDirctory from './views/Teacher/StudentDirctory';
import Resetpassbyprofile from './views/auth/resetpassbyprofile';
import VerifyIdentyByProfile from './views/auth/Varifyidentiybyprofile';
import VarifyOTPbyprofile from './views/auth/varifyOTPbyprofile';
import Notificationsall from './views/Teacher/Notificationall';
import RoutineCalanderScreen from './views/Teacher/RoutineCalanderScreen';

import AddLesson from './views/Teacher/Syllabus/AddLesson'


import AddLessonplan from './views/Teacher/LessonPlan/addLesson';
import AddActivityplan from './views/Teacher/LessonPlan/AddActivity';
import AddTropicplan from './views/Teacher/LessonPlan/AddTropic';
import AddLessonTropicplan from './views/Teacher/LessonPlan/AddLesson_addtropic';

import Syllabus from './views/Teacher/Syllabus/LayoutSyllabus';
import ApprovedSyllabus from './views/Teacher/Syllabus/ApprovedSyllabus';
import DraftedSyllabus from './views/Teacher/Syllabus/DraftedSyllabus';
import NewCreateSyllabusDraft from './views/Teacher/Syllabus/NewCreateSyllabusDraft';
import WaitingApproval from './views/Teacher/Syllabus/WaitingApproval';
import AddLesson_addtropic from './views/Teacher/Syllabus/AddLesson_addtropic';
import AddTropic from './views/Teacher/Syllabus/AddTropic';
import AddActivity from './views/Teacher/Syllabus/AddActivity';
import MessageColab from './views/Teacher/TeacherParentsCollaboration/MessageColab';
import CoordinatorDashboard from './views/Coordinator/Dashboard';
import Colaboration from './views/Coordinator/Colaboration';
import CoStudentdir from './views/Coordinator/Student_directory';
import CoSyllabus from "./views/Coordinator/Syllabus/LayoutSyllabus";
import CApprovedSyllabus from './views/Coordinator/Syllabus/ApprovedSyllabus';
import CDraftedSyllabus from './views/Coordinator/Syllabus/DraftedSyllabus';

import CWaitingApproval from './views/Coordinator/Syllabus/WaitingApproval';
import CAddLesson_addtropic from './views/Coordinator/Syllabus/AddLesson_addtropic';
import CAddTropic from './views/Coordinator/Syllabus/AddTropic';
import CAddActivity from './views/Coordinator/Syllabus/AddActivity';
import ApprovedLesson from './views/Teacher/LessonPlan/ApprovedLesson';
import DraftLesson from './views/Teacher/LessonPlan/DraftLesson';
import LayoutLesson from './views/Teacher/LessonPlan/LayoutLesson';
import CoOrdinatorlogin from './views/Coordinator/CoAuth/Login';
import COActivity from './views/Coordinator/Activity';
import COAnnuncement from './views/Coordinator/Announcements';
import COMeeting from './views/Coordinator/Meetings';
import COTeacherList from './views/Coordinator/TeacherList';
import COReport from './views/Coordinator/Reports';
import AssmentLayout from './views/Teacher/Assesment/assesmentLayout';
import Marked from './views/Teacher/Assesment/MarkesGiven';
import Nomarked from './views/Teacher/Assesment/Nomarksgiven';
import Homepage from './Homepage';
import InputMark from './views/Teacher/Assesment/InputMark';
import Disclousedmark from './views/Teacher/Assesment/Disclousedmark';
import Editmark from './views/Teacher/Assesment/Editmark';
import ActivityTracking from './views/Teacher/Activity Tracking/ActivityTracking';
import TeacherSyllabus from './views/Teacher/Syllabus';

import RequestMeetings from './views/Teacher/Collaboration/Meeting/RequestMeeting';
import ArchiveMeetings from './views/Teacher/Collaboration/Meeting/ArchiveMeeting';
import Upcomingmeeting from './views/Teacher/Collaboration/Meeting/Upcomingmeeting';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teacher/dashboard" element={<MainLayout />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="lesson-plan" element={<Lesson_Plan />} />
          <Route path="student-info" element={<Student_Information />} />
          <Route path="class-attendance" element={<Class_Attendance />} />
          <Route path="subject-attendance" element={<Subject_Attendance />} />
          <Route path="student-result" element={<Student_Result />} />
          <Route path="setting" element={<Setting />} />
          <Route path="messagecollaboration" element={<MessageColab />} />
          <Route path="home-work" element={<Home_Works />} />
          <Route path="group-student" element={<Group_Students_By_Class />} />
          <Route path="announcement" element={<Announcement />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="teacherSyllabus" element={<TeacherSyllabus />} />
          <Route path="addlesson" element={<AddLesson />} />
          <Route path="approved" element={<ApprovedSyllabus />} />
          <Route path="newdrafted" element={<NewCreateSyllabusDraft />} />
          <Route path="drafted" element={<DraftedSyllabus />} />
          <Route path="layoutlesson" element={<LayoutLesson />} />
          <Route path="approveLesson" element={<ApprovedLesson />} />
          <Route path="draftLesson" element={<DraftLesson />} />
          <Route path='addlessonaddtropic' element={<AddLesson_addtropic/>}/>
          <Route path="addTopic" element={<AddTropic/>}/>
          <Route path="addactivity" element={<AddActivity/>}/>
          <Route path="waiting" element={<WaitingApproval />} />
          <Route path="academic-management" element={<Academic_Management />} />
          <Route path="apply-leave" element={<Apply_For_Leave />} />
          <Route path="teacher-profile" element={<TeacherProfile />} />
          <Route path='class-routine' element={<Class_Routine/>}/>
          <Route path='my-class' element={<Myclass/>}/>
          <Route path='student-dir' element={<StudentDirctory/>}/>
          <Route path='reset-pass-profile' element={<Resetpassbyprofile/>}/>
          <Route path='verifyidentybyprofile-pass-profile' element={<VerifyIdentyByProfile/>}/>
          <Route path='verifyotpbyprofile-pass-profile' element={<VarifyOTPbyprofile/>}/>
          <Route path='notifications' element={<Notificationsall/>}/>
          <Route path='routineCalender' element={<RoutineCalanderScreen/>}/>
          <Route path='assemenstlayout' element={<AssmentLayout/>}/>
          <Route path='marked' element={<Marked/>}/>
          <Route path='unmarked' element={<Nomarked/>}/>
          <Route path='inputmark' element={<InputMark/>}/>
          <Route path='dismarked' element={<Disclousedmark/>}/>
          <Route path='editmarkes' element={<Editmark/>}/>
          <Route path='activiyttrack' element={<ActivityTracking/>}/>
          <Route path='upcomming' element={<Upcomingmeeting/>}/>
          <Route path='requestmeetings' element={<RequestMeetings/>}/>
          <Route path='archived' element={<ArchiveMeetings/>}/>

          <Route path='addlessonplan' element={<AddLessonplan/>}/>
          <Route path='addlessontropicplan' element={<AddTropic/>}/>
          <Route path='addplan' element={<AddActivityplan/>}/>




        </Route>

        <Route path="/coordinator/dasboard" element={<MainLayout/>}>
        <Route index element={<CoordinatorDashboard/>}/>
        <Route path='colaboration' element={<Colaboration/>}/>
        <Route path='student-dir' element={ <CoStudentdir/>}/>
        <Route path='Cosyllabus' element={<CoSyllabus/>}/>
        <Route path='CoApprovedsyllabus' element={<CApprovedSyllabus/>}/>
        <Route path='CoDraftsyllabus' element={<CDraftedSyllabus/>}/>
        <Route path='CoWaitingsyllabus' element={<CWaitingApproval/>}/>
        <Route path='CAddActivitysyllabus' element={<CAddActivity/>}/>
        <Route path='CAddTropicsyllabus' element={<CAddTropic/>}/>
        <Route path='CAddlessonsyllabus' element={<CAddLesson_addtropic/>}/>
        <Route path='CActivity' element={<COActivity/>}/>
        <Route path="substitute-scheduling" element={<Substitute_Scheduling />} />
        <Route path='CAnnuncement' element={<COAnnuncement/>}/>
        <Route path='CMeeting' element={<COMeeting/>}/>
        <Route path='CReport' element={<COReport/>}/>
        <Route path='CTeacherList' element={<COTeacherList/>}/>
        </Route>
        <Route path="/cologin" element={<CoOrdinatorlogin />} />
        <Route path="/tlogin" element={<Teacherlogin />} />
        <Route path="/verified" element={<Varified />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/setnewpass" element={<Setnewpassword />} />
        <Route path='/' element={<Homepage/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
