import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { MdCoPresent } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { TbCalendarTime } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { PiMessengerLogoLight } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlinePlayLesson, MdOutlineAssignment } from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";
import { MdOutlineClass, MdSubject } from "react-icons/md";
import { SiHtmlacademy } from "react-icons/si";
import { SiGooglemeet } from "react-icons/si";
import { VscRepo } from "react-icons/vsc";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { LuBookPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { MdAssignmentInd } from "react-icons/md";
import { GrResources } from "react-icons/gr";

import logo from '../assets/Teacher/logo1.png';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const [userRole, setUserRole] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname; // Get current path

  // Set initial activeMenu based on location.pathname
  const [activeMenu, setActiveMenu] = useState(currentPath);

  useEffect(() => {
    const fetchUserRole = async () => {
      const role = localStorage.getItem('userRole') || 'teacher';
      setUserRole(role);
    };

    fetchUserRole();
  }, []);

  const menuItems = [
    { path: "/teacher/dashboard", role: "teacher", name: "Dashboard", icon: <AiFillDashboard /> },
    {
      name: "Attendance",
      role: "teacher",
      icon: <MdCoPresent />,
      submenu: [
        { path: "class-attendance", role: "teacher", name: "Class Attendance", icon: <MdOutlineClass /> },
        { path: "subject-attendance", role: "teacher", name: "Subject Attendance", icon: <MdSubject /> }
      ]
    },
    {
      name: "Curriculum",
      role: "teacher",
      icon: <SiHtmlacademy />,
      submenu: [
        { path: "teacherSyllabus", role: "teacher", name: "Syllabus", icon: <LuCalendarDays /> },
        { path: "approveLesson", role: "teacher", name: "Lesson Plan", icon: <MdOutlinePlayLesson /> },
        { path: "activiyttrack", role: "teacher", name: "Activity Tracking", icon: <LuActivitySquare /> },
        { path: "createsyllabusapproved", role: "teacher", name: "Create Syllabus", icon: <LuBookPlus /> },
      ]
    },
    { path: "marked", role: "teacher", name: "Assessment", icon: <MdOutlineAssignment /> },
    { path: "class-routine", role: "teacher", name: "Routine", icon: <CiCalendar /> },
    { path: "student-info", role: "teacher", name: "Student Directory", icon: <PiStudentDuotone /> },
    { path: "teacher-info", role: "teacher", name: "Teacher Directory", icon: <PiChalkboardTeacherDuotone /> },
    {
      name: "Guardian Collaboration",
      role: "teacher",
      icon: <GoPeople />,
      submenu: [
        { path: "upcomming", role: "teacher", name: "Arrange Meeting", icon: <SiGooglemeet /> },
        { path: "messagecollaboration", role: "teacher", name: "Messaging", icon: <PiMessengerLogoLight /> },
      ]
    },
    { path: "announcement", role: "teacher", name: "Announcement", icon: <GrAnnounce /> },
    { path: "/coordinator/dasboard", role: "coordinator", name: "Dashboard", icon: <AiFillDashboard /> },
    { path: "student-dir", role: "coordinator", name: "Student Directory", icon: <PiStudentDuotone /> },
    { path: "CoApprovedsyllabus", role: "coordinator", name: "Syllabus", icon: <LuCalendarDays /> },
    { path: "substitute-scheduling", role: "coordinator", name: "Substitute Scheduling", icon: <TbCalendarTime /> },
    { path: "teacherlist", role: "coordinator", name: "Teacher Directory", icon: <LiaChalkboardTeacherSolid /> },
    { path: "assingsyllabus", role: "coordinator", name: "Assign Syllabus", icon: <MdAssignmentInd /> },
    { path: "resourceallowcation", role: "coordinator", name: "Resource Allocation", icon: <GrResources /> },
    { path: "CMeeting", role: "coordinator", name: "Meetings", icon: <SiGooglemeet /> },
    { path: "coapprovedLesson", role: "coordinator", name: "Lesson Plan", icon: <VscRepo /> },
    { path: "CAnnuncement", role: "coordinator", name: "Announcements", icon: <GrAnnounce /> },
  ];

  const filteredMenuItems = menuItems.filter(item => item.role === userRole);

  const handleMenuClick = (path) => {
    setShowSidebar(false);
    setActiveMenu(path); // Update the active menu with the path
  };

  const handleSubmenuToggle = (name) => {
    setOpenMenus(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  if (!userRole) return null;

  return (
    <div>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-lg"
      >
        {showSidebar ? 'Close' : 'Open'} Sidebar
      </button>

      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 bg-[#22292f80] z-10 transition-opacity duration-200"
        />
      )}

      <div
        className={`fixed top-0 left-0 w-[260px] h-screen bg-[#F6F9F7] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-transform duration-300 z-50 ${
          showSidebar ? 'translate-x-0' : '-translate-x-[260px] lg:translate-x-0'
        }`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img className="w-full h-full" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="px-[16px] mt-2">
          <ul className="space-y-2">
            {filteredMenuItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <>
                    <div
                      onClick={() => handleSubmenuToggle(item.name)}
                      className={`text-[#465049] w-[224px] h-[48px] rounded-lg font-normal duration-200 pl-[14px]  pr-[12px] pt-[18px] pb-[18px] gap-x-2 flex justify-between items-center transition-all mb-1 cursor-pointer relative ${
                        openMenus[item.name] || activeMenu.includes(item.name)
                          ? 'bg-[#465049] text-white'
                          : 'bg-[#E4EBE6] hover:bg-[#465049] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-x-2">
                        <span className="text-[26px]">{item.icon}</span>
                        <span className="font-normal">{item.name}</span>
                      </div>
                      <IoMdArrowDropdown className="text-[20px]" />
                    </div>
                    {openMenus[item.name] && (
                      <ul className="pl-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <div className="flex items-center" key={subIndex}>
                            <FiMinus className="text-[#868987]" />
                            <li>
                              <Link
                                to={subItem.path}
                                onClick={() => handleMenuClick(subItem.path)}
                                className={`text-[#465049] w-[200px] h-[35px] rounded-[8px] font-normal duration-200 pl-[16px] pr-[16px] pt-[10px] pb-[10px] gap-x-2 flex  items-center transition-all mb-1 cursor-pointer relative ${
                                  activeMenu === subItem.path
                                    ? 'bg-[#465049] text-white'
                                    : 'bg-[#E4EBE6] hover:bg-[#465049] hover:text-white'
                                }`}
                              >
                                <span className="text-[26px]">{subItem.icon}</span>
                                <span className="font-normal text-[15px]">{subItem.name}</span>
                              </Link>
                            </li>
                          </div>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => handleMenuClick(item.path)}
                    className={`text-[#465049] w-[224px] h-[48px] rounded-lg font-normal duration-200 pl-[12px] pr-[12px] pt-[16px] pb-[16px] gap-x-2 flex justify-start items-center transition-all mb-1 cursor-pointer relative ${
                      activeMenu === item.path
                        ? 'bg-[#465049] text-white'
                        : 'bg-[#E4EBE6] hover:bg-[#465049] hover:text-white'
                    }`}
                  >
                    <span className="text-[26px]">{item.icon}</span>
                    <span className="font-normal">{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
