import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { IoChevronDownSharp } from "react-icons/io5";
import {MdExpandMore} from "react-icons/md";
import {LuAlarmClock} from "react-icons/lu";
import DatePicker from 'react-datepicker';
import {CiLocationOn} from 'react-icons/ci';
import {GrAttachment} from 'react-icons/gr';

function CreateMeetingModal({ setShowModal }) {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white w-[1140px] rounded-lg shadow-lg p-8 max-w-[1000px] relative">
      <div className="text-center  pb-4">
        <h3 className="text-[31px] font-semibold">Create Meeting</h3>
        <button
          onClick={() => setShowModal(false)}
          className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
        >
          <RxCrossCircled className='w-6 h-6' />
        </button>
      </div>
  
      <form className="mt-6 space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
            placeholder="Enter Subject"
          />
        </div>
  
        <div className='flex gap-[76px] flex-wrap'>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative w-full md:w-[130px]">
              <select
                className="appearance-none px-4 py-2 border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
              >
                <option value="">Class</option>
                <option>Class-ix</option>
                <option>Class-x</option>
                <option>Class-xi</option>
                <option>Class-xii</option>
              </select>
              <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
  
            <div className="relative w-full md:w-[130px]">
              <select
                className="appearance-none px-4 py-2 border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
              >
                <option value="">Section</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>
              <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
  
            <div className="flex items-center gap-2">
              <input type="checkbox" className='w-4 h-4' id="fullClass" />
              <label htmlFor="fullClass" className="text-gray-700">Full Class</label>
            </div>
          </div>
  
          <div className='flex flex-wrap gap-4 items-center'>
            <div className='flex items-center gap-2'>
              <span><LuAlarmClock className='w-6 h-6 text-[#BB5042]'/></span>
              <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      className="px-2 py-2 w-[130px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042]" // Adjusted padding for better alignment
      placeholderText="Select Date"
      dateFormat="dd MMMM yyyy"
    />
            </div>
            <div className='flex items-center gap-3'>
              <input
                type="time"
                className=" rounded-md px-2 py-2 outline-none border bg-transparent border-slate-300  focus:border-[#BB5042]"
                defaultValue="11:00"
              />
              <span className='text-[16px]'>to</span>
              <input
                type="time"
                className=" px-2 py-2 outline-none border bg-transparent border-slate-300 rounded-md focus:border-[#BB5042]"
                defaultValue="12:30"
              />
            </div>
          </div>
  
        </div>
  
        <div className='flex items-center gap-[76px] flex-wrap'>
          <input 
            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[386.22px]" 
            type="text" 
            name="search" 
            placeholder="Search by Student Name or ID" 
          />
          <div className='flex items-center gap-1'>
            <span><CiLocationOn className='w-7 h-7 text-[#BB5042]'/></span>
            <input
        type="text"
        className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-[441px] md:max-w-[441px]"
        placeholder="Enter Location"
      />
          </div>
        </div>
  
        <div>
          <label className="block text-gray-700 mb-1">Details</label>
          <textarea
            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
            placeholder="Enter Details"
            rows="4"
          />
        </div>
  
        <div className='justify-start flex gap-2 items-center'>
          <span><GrAttachment className='w-5 h-5'/></span>
          <span>Attachment</span>
        </div>
  
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-12 py-3 border rounded-md bg-[#BB5042] text-white hover:bg-[#a0443c]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
    
  
    );
  }
  

// LayoutSyllabus Component
function MeetingLayout() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const tabs = [

    { name: 'Upcoming Meeting', path: '/teacher/dashboard/upcomming' },
    { name: 'Request for Meeting', path: '/teacher/dashboard/requestmeetings' },
    { name: 'Archive',path: '/teacher/dashboard/archived' },
  ];
  
  return (
    <div className="max-w-full mr-10">
      <div className="flex justify-between items-center mt-5 h-[52px]">
        <span className="text-[31px] font-bold">Meeting</span>
        <button
          onClick={() => setShowModal(true)}
          className="border rounded-lg text-white bg-[#BB5042] px-[28px] py-[10px]"
        >
          Create
        </button>
        {showModal && <CreateMeetingModal setShowModal={setShowModal} />}
      </div>

      {/* Tabbar */}
      <div className="flex mb-5 gap-16 mt-7 border-b-[2px]">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              isActive || (tab.name === 'Approved Syllabus' && location.pathname === '/teacher/dashboard')
                ? 'font-bold text-[25px] border-b-[5px] border-[#BB5042] pb-2'
                : 'text-gray-600 text-[25px] hover:text-gray-900'
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
     
</div>
  );
}


export default MeetingLayout;
