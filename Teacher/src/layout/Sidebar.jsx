import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { MdCoPresent } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { SiMicrosoftacademic } from "react-icons/si";
import { CiCalendar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { PiMessengerLogoLight } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlinePlayLesson } from "react-icons/md";
import logo from '../assets/Teacher/logo1.png';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  // State to keep track of the currently selected menu item
  const [selectedMenu, setSelectedMenu] = useState("/dashboard");

  // Use context or API to dynamically set userRole
  const [userRole, setUserRole] = useState(null); // 'teacher' or 'coordinator'
  
  useEffect(() => {
    // Simulate fetching user role from API, local storage, or context
    const fetchUserRole = async () => {
      // Example: fetch from local storage or API
      const role = localStorage.getItem('userRole') || 'teacher'; // Default to 'teacher' for this example
      setUserRole(role);
    };

    fetchUserRole();
  }, []);
                

const location = useLocation();
// Define the menu items for both roles

  const menuItems = [
    { path: "/teacher/dashboard", role: "teacher", name: "Dashboard", icon: <AiFillDashboard /> },
    { path: "student-info", role: "teacher", name: "Student Directory", icon: <PiStudentDuotone /> },
    { path: "my-class", role: "teacher", name: "My Class", icon: <HiOutlineUserGroup /> },
    { path: "academic-management", role: "teacher", name: "Academic Management", icon: <SiMicrosoftacademic /> },
    { path: "student-attendance", role: "teacher", name: "Student Attendance", icon: <MdCoPresent /> },
    { path: "student-result", role: "teacher", name: "Student Result", icon: <HiOutlineUserGroup /> },
    { path: "class-routine", role: "teacher", name: "Class Routine", icon: <CiCalendar /> },
    { path: "substitute-scheduling", role: "teacher", name: "Substitute Scheduling", icon: <TbCalendarTime /> },
    { path: "collaboration", role: "teacher", name: "Parents Teachers Collaboration", icon: <GoPeople /> },
    { path: "messagecollaboration", role: "teacher", name: "Messaging", icon: <PiMessengerLogoLight /> },
    { path: "approved", role: "teacher", name: "Syllabus", icon: <LuCalendarDays /> },
    { path: "approveLesson", role: "teacher", name: "Lesson Plan", icon: <MdOutlinePlayLesson /> },
    { path: "announcement", role: "teacher", name: "Announcement", icon: <GrAnnounce /> },
    { path: "setting", role: "teacher", name: "Setting", icon: <IoSettingsOutline /> },
    { path: "/coordinator/dasboard", role: "coordinator", name: "Dashboard", icon: <AiFillDashboard /> },
    { path: "student-dir", role: "coordinator", name: "Student Directory", icon: <PiStudentDuotone /> },
    { path: "CoApprovedsyllabus", role: "coordinator", name: "Syllabus", icon: <HiOutlineUserGroup /> },
    { path: "CActivity", role: "coordinator", name: "Activities", icon: <HiOutlineUserGroup /> },
    { path: "CMeeting", role: "coordinator", name: "Meetings", icon: <HiOutlineUserGroup /> },
    { path: "CReport", role: "coordinator", name: "Reports", icon: <HiOutlineUserGroup /> },
    { path: "CAnnuncement", role: "coordinator", name: "Announcements", icon: <HiOutlineUserGroup /> },
    { path: "CTeacherList", role: "coordinator", name: "Teacher List", icon: <HiOutlineUserGroup /> },
  ];

  // Filter menu items based on the user's role
  const filteredMenuItems = menuItems.filter(item => item.role === userRole);

  const handleMenuClick = (path) => {
    setSelectedMenu(path);
    setShowSidebar(false); // Close sidebar when menu item is clicked
  };

  if (!userRole) return null; // Wait until userRole is fetched

  return (
    <div>
      {/* Button to toggle sidebar visibility */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-lg"
      >
        {showSidebar ? 'Close' : 'Open'} Sidebar
      </button>

      {/* Overlay to close sidebar on outside click */}
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 bg-[#22292f80] z-10 transition-opacity duration-200"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[260px] h-screen bg-[#F6F9F7] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-transform duration-300 z-50 ${
          showSidebar ? 'translate-x-0' : '-translate-x-[260px] lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header with Logo */}
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img className="w-full h-full" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Sidebar Menu */}
        <div className="px-[16px] mt-2">
          <ul>
            {filteredMenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => handleMenuClick(item.path)}
                  className={`text-[#465049] w-[224px] h-[48px] rounded-lg font-normal duration-200 pl-[12px] pr-[12px] pt-[16px] pb-[16px] gap-x-2 flex justify-start items-center transition-all mb-1 ${
                    selectedMenu === item.path
                      ? 'bg-[#465049] text-white'
                      : 'bg-[#E4EBE6] hover:bg-[#465049] hover:text-white'
                  }`}
                >
                  <span className="text-[22px]">{item.icon}</span>
                  <span className="font-normal">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
