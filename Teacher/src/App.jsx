import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainLayout = lazy(() => import('./layout/MainLayout'));
const TeacherDashboard = lazy(() => import('./views/Teacher/Dashboard/TeacherDashboard'));
const Lesson_Plan = lazy(() => import('./views/Teacher/Lesson_Plan'));
const Student_Information = lazy(() => import('./views/Teacher/Student_Information'));
const Class_Attendance = lazy(() => import('./views/Teacher/StudentAttendances/ClassAttendances'));
const Subject_Attendance = lazy(() => import('./views/Teacher/StudentAttendances/SubjectAttendances'));
const Student_Result = lazy(() => import('./views/Teacher/Student_Result'));
const Setting = lazy(() => import('./views/Teacher/Setting'));

const  Home_Works = lazy(() => import('./views/Teacher/Home_Works'));
const  Group_Students_By_Class = lazy(() => import('./views/Teacher/Group_Students_By_Class'));
const  Substitute_Scheduling = lazy(() => import('./views/Teacher/Substitute_Scheduling'));
const  Announcement = lazy(() => import('./views/Teacher/Announcement'));
const  Academic_Management = lazy(() => import('./views/Teacher/Academic_Management'));
const  Apply_For_Leave = lazy(() => import('./views/Teacher/Apply_For_Leave'));
const  Teacherlogin = lazy(() => import('./views/auth/teacherlogin'));
const  Varified = lazy(() => import('./views/auth/Varified'));
const  Setnewpassword = lazy(() => import('./views/auth/Setnewpassword'));
const  Forgetpassword = lazy(() => import('./views/auth/Forgetpassword'));
const  TeacherProfile = lazy(() => import('./views/Teacher/TeacherProfile'));
const  Class_Routine = lazy(() => import('./views/Teacher/Class_Routine'));
const  Myclass = lazy(() => import('./views/Teacher/myclass'));
const  StudentDirctory = lazy(() => import('./views/Teacher/StudentDirctory'));
const  Resetpassbyprofile = lazy(() => import('./views/auth/resetpassbyprofile'));
const  VerifyIdentyByProfile = lazy(() => import('./views/auth/Varifyidentiybyprofile'));
const  VarifyOTPbyprofile = lazy(() => import('./views/auth/varifyOTPbyprofile'));
const  Notificationsall = lazy(() => import('./views/Teacher/Notificationall'));
const  RoutineCalanderScreen = lazy(() => import('./views/Teacher/RoutineCalanderScreen'));
const  AddLesson = lazy(() => import('./views/Teacher/Syllabus/AddLesson'));


const  AddLessonplan = lazy(() => import('./views/Teacher/LessonPlan/addLesson'));
const  AddActivityplan = lazy(() => import('./views/Teacher/LessonPlan/AddLessonAddtropic'));
const  Syllabus = lazy(() => import('./views/Teacher/Syllabus/LayoutSyllabus'));

const  ApprovedSyllabus = lazy(() => import('./views/Teacher/Syllabus/ApprovedSyllabus'));
const  DraftedSyllabus = lazy(() => import('./views/Teacher/Syllabus/DraftedSyllabus'));
const  NewCreateSyllabusDraft = lazy(() => import('./views/Teacher/Syllabus/NewCreateSyllabusDraft'));
const  WaitingApproval = lazy(() => import('./views/Teacher/Syllabus/WaitingApproval'));
const  AddLesson_addtropic = lazy(() => import('./views/Teacher/Syllabus/AddLesson_addtropic'));
const  AddTropic = lazy(() => import('./views/Teacher/Syllabus/AddTropic'));
const  AddActivity = lazy(() => import('./views/Teacher/Syllabus/AddActivity'));
const  MessageColab = lazy(() => import('./views/Teacher/Collaboration/Messageing/MessageColab'));


const CoordinatorDashboard = lazy(() => import('./views/Coordinator/Dashboard'));
const Colaboration = lazy(() => import('./views/Coordinator/Colaboration'));
const CoStudentdir = lazy(() => import('./views/Coordinator/Student_directory'));
const CoSyllabus = lazy(() => import('./views/Coordinator/Syllabus/LayoutSyllabus'));
const CApprovedSyllabus = lazy(() => import('./views/Coordinator/Syllabus/ApprovedSyllabus'));
const CDraftedSyllabus = lazy(() => import('./views/Coordinator/Syllabus/DraftedSyllabus'));
const CWaitingApproval = lazy(() => import('./views/Coordinator/Syllabus/WaitingApproval'));
const CAddLesson_addtropic = lazy(() => import('./views/Coordinator/Syllabus/AddLesson_addtropic'));
const CAddTropic = lazy(() => import('./views/Coordinator/Syllabus/AddTropic'));
const CAddActivity = lazy(() => import('./views/Coordinator/Syllabus/AddActivity'));

const CoLayoutLesson = lazy(() => import('./views/Coordinator/LessonPlan/LayoutLesson'));
const CoApprovedLesson = lazy(() => import('./views/Coordinator/LessonPlan/ApproviedLesson'));
const CoPendingLesson = lazy(() => import('./views/Coordinator/LessonPlan/PendingLesson'));
const AssingSyllabus = lazy(() => import('./views/Coordinator/AssingSyllabus'));
const ResourcesAllowcation = lazy(() => import('./views/Coordinator/ResourcesAllow'));


const ApprovedLesson = lazy(() => import('./views/Teacher/LessonPlan/ApprovedLesson'));
const DraftLesson = lazy(() => import('./views/Teacher/LessonPlan/DraftLesson'));
const LayoutLesson = lazy(() => import('./views/Teacher/LessonPlan/LayoutLesson'));

const CoOrdinatorlogin = lazy(() => import('./views/Coordinator/CoAuth/Login'));
const COAnnuncement = lazy(() => import('./views/Coordinator/Announcements'));
const COMeeting = lazy(() => import('./views/Coordinator/Meetings'));
const COTeacherList = lazy(() => import('./views/Coordinator/TeacherList'));
const COReport = lazy(() => import('./views/Coordinator/Reports'));
const AssmentLayout = lazy(() => import('./views/Teacher/Assesment/assesmentLayout'));
const Marked = lazy(() => import('./views/Teacher/Assesment/MarkesGiven'));
const Nomarked = lazy(() => import('./views/Teacher/Assesment/Nomarksgiven'));
const Homepage = lazy(() => import('./Homepage'));
const InputMark = lazy(() => import('./views/Teacher/Assesment/InputMark'));
const Disclousedmark = lazy(() => import('./views/Teacher/Assesment/Disclousedmark'));
const Editmark = lazy(() => import('./views/Teacher/Assesment/Editmark'));
const ActivityTracking = lazy(() => import('./views/Teacher/Activity Tracking/ActivityTracking'));
const TeacherSyllabus = lazy(() => import('./views/Teacher/Syllabus'));
const RequestMeetings = lazy(() => import('./views/Teacher/Collaboration/Meeting/RequestMeeting'));
const ArchiveMeetings = lazy(() => import('./views/Teacher/Collaboration/Meeting/ArchiveMeeting'));
const Upcomingmeeting = lazy(() => import('./views/Teacher/Collaboration/Meeting/Upcomingmeeting'));
const TeacherList = lazy(() => import('./views/Coordinator/TeacherList'));
const AllTeachers = lazy(() => import('./views/Teacher/TeacherDir/AllTeacher'));
const TeacherFullInfo = lazy(() => import('./views/Teacher/TeacherDir/TeacherFullInfo'));
const CreateSyllabusLayout = lazy(() => import('./views/Teacher/CreateSyllabus/LayoutSyllabus'));
const CreateSyllabusDraft = lazy(() => import('./views/Teacher/CreateSyllabus/DraftedSyllabus'));
const CreateSyllabusApproved = lazy(() => import('./views/Teacher/CreateSyllabus/ApprovedSyllabus'));
const CreateSyllabusAddtropic = lazy(() => import('./views/Teacher/CreateSyllabus/AddLesson_addtropic'));

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

          <Route path='teacher-info' element={<AllTeachers/>}/>
          <Route path='teacher-fullinfo' element={<TeacherFullInfo/>}/>

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
          <Route path='addactivityplan' element={<AddActivityplan/>}/>
         
     {/* Create Syllabus Route here  */}

     <Route path='createsyllabuslayout' element={<CreateSyllabusLayout/>}/>
     <Route path='createsyllabusapproved' element={<CreateSyllabusApproved/>}/>
     <Route path='createsyllabusDraft' element={<CreateSyllabusDraft/>}/>
     <Route path='createsyllabusaddtropic' element={<CreateSyllabusAddtropic/>}/>



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
        <Route path='teacherlist' element={<TeacherList/>}/>
        <Route path="substitute-scheduling" element={<Substitute_Scheduling />} />
        <Route path='coapprovedLesson' element={<CoApprovedLesson/>}/>
        <Route path='copendingLesson' element={<CoPendingLesson/>}/>
        <Route path='colayoutlesson' element={<CoLayoutLesson/>}/>
        <Route path='CAnnuncement' element={<COAnnuncement/>}/>
        <Route path='CMeeting' element={<COMeeting/>}/>
        <Route path='CReport' element={<COReport/>}/>
        <Route path='assingsyllabus' element={<AssingSyllabus/>}/>
        <Route path='resourceallowcation' element={<ResourcesAllowcation/>}/>
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
