import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlinePlayLesson, MdCoPresent } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { SiMicrosoftacademic } from "react-icons/si";
import { CiCalendar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCalendarTime } from "react-icons/tb";

import logo from '../assets/Teacher/logo1.png';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/teacher/dashboard", name: "Dashboard", icon: <AiFillDashboard /> },
    { path: "student-info", name: "Student Information", icon: <PiStudentDuotone /> },
    { path: "my-class", name: "My Class", icon: <HiOutlineUserGroup /> },
    { path: "student-dir", name: "Student Directory", icon: <MdOutlinePlayLesson /> },
    { path: "academic-management", name: "Academic Management", icon: <SiMicrosoftacademic /> },
    { path: "student-attendance", name: "Student Attendance", icon: <MdCoPresent /> },
    { path: "student-result", name: "Student Result", icon: < HiOutlineUserGroup /> },
    { path: "class-routine", name: "Class Routine", icon: <CiCalendar /> },
    { path: "substitute-scheduling", name: "Substitute Scheduling", icon: <TbCalendarTime /> },
    { path: "setting", name: "Setting", icon: <IoSettingsOutline /> },
    
  ];

  return (
    <div>
      {/* Overlay to close sidebar */}
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed inset-0 bg-[#22292f80] z-10 transition-opacity duration-200 ${showSidebar ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[260px] h-screen bg-[#F6F9F7] shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-[260px]'} lg:translate-x-0 z-50`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img className="w-full h-full" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="px-[16px] mt-2">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.isButton ? (
                  <button
                    className={`text-[#465049] w-[224px] h-[48px] rounded-lg font-normal duration-200 pl-[12px] pr-[12px] pt-[16px] pb-[16px] gap-x-2 flex justify-start items-center transition-all mb-1 ${
                      location.pathname === item.path ? 'bg-[#465049] text-white' : 'bg-[#E4EBE6] hover:bg-[#465049] hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span className="font-normal">{item.name}</span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-[#465049] w-[224px] h-[48px] rounded-lg font-normal duration-200 pl-[12px] pr-[12px] pt-[16px] pb-[16px] gap-x-2 flex justify-start items-center transition-all mb-1 ${
                      location.pathname === item.path ? 'bg-[#465049] text-white' : 'bg-[#E4EBE6] hover:bg-[#465049] hover:text-white'
                    }`}
                  >
                    <span className="text-[22px]"> {item.icon}</span>
                   
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
