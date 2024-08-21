import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import TeacherDashboard from './views/Teacher/TeacherDashboard';
import Lesson_Plan from './views/Teacher/Lesson_Plan';
import Student_Information from './views/Teacher/Student_Information';
import Student_Attendance from './views/Teacher/Student_Attendance';
import Student_Result from './views/Teacher/Student_Result';
import Setting from './views/Teacher/Setting';
import Parents_Teachers_Collaboration from './views/Teacher/Parents_Teachers_Collaboration';
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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teacher/dashboard" element={<MainLayout />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="lesson-plan" element={<Lesson_Plan />} />
          <Route path="student-info" element={<Student_Information />} />
          <Route path="student-attendance" element={<Student_Attendance />} />
          <Route path="student-result" element={<Student_Result />} />
          <Route path="setting" element={<Setting />} />
          <Route path="collaboration" element={<Parents_Teachers_Collaboration />} />
          <Route path="home-work" element={<Home_Works />} />
          <Route path="group-student" element={<Group_Students_By_Class />} />
          <Route path="substitute-scheduling" element={<Substitute_Scheduling />} />
          <Route path="announcement" element={<Announcement />} />
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

        </Route>
        <Route path="/" element={<Teacherlogin />} />
        <Route path="/verified" element={<Varified />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/setnewpass" element={<Setnewpassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
