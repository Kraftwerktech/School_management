import React, { useState } from 'react';
import LayoutLesson from './LayoutLesson';
import { CiFilter, CiCalendar } from "react-icons/ci";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiTrash } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { IoIosArrowDown } from "react-icons/io";

const SyllabusCard = ({ status, date, title, test, mark, time, lesson, topicno, topictitle, details, activityDetails, attachedFiles }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'In Progress':
        return 'bg-[#98AD9E] rounded-lg text-white font-bold';
      case 'Submitted':
        return 'bg-[#A4A594] rounded-lg text-white font-bold';
      case 'Rejected':
        return 'border-[#CD1902]  bg-[#CD1902] rounded-[8px] text-white font-bold'; // Red border and background for rejected status
      default:
        return '';
    }
  };


  const isSubmitted = status === "Submitted";
  return (
    <div className={`bg-white border-b-[2px] mt-5 mb-4 ${status === 'Rejected' ? 'border-red-500 rounded-[8px] p-5 border-[1px]' : ''}`}>
    <div className="flex mb-5 justify-between items-center w-full">
      <div className="text-white font-semibold w-full max-w-[250px] text-[18px] pl-5 rounded-[8px] py-2 border-[1.5px] bg-[#A4A594]">
        {date}
      </div>
  
      <div className="items-center flex gap-4">
        <span>
          <Link to="http://localhost:5173/teacher/dashboard/addlessonplan">
          <FiEdit className={`w-6 h-6 ${isSubmitted ? 'text-gray-400 cursor-not-allowed' : 'text-[#BB5042]'}`} disabled={isSubmitted} />
          </Link>
          
        </span>
        <span className="text-[#B6B6B6] font-semibold text-[22px]">|</span>
        <span>
          <CiTrash className={`w-6 h-6 ${isSubmitted ? 'text-gray-400 cursor-not-allowed' : 'text-[#BB5042]'}`} disabled={isSubmitted} />
        </span>
      </div>
    </div>
  
    <div className="flex gap-4">
      <span className="font-semibold text-[20px] flex items-center gap-2 text-[#98AD9E]">
        <input type="checkbox" className="w-4 h-4 border-[#BB5042]" /> {title}
      </span>
      <span className={`py-1 px-5 rounded-[12px] text-[14px] ${getStatusStyles()}`}>
        {status}
      </span>
    </div>
  
  
  
    {/* Additional content sections */}
    <div className="mb-2 text-gray-500 text-sm">
      <h4 className="text-gray-600 font-bold text-[20px] mt-3 mb-3">Activity</h4>
      <div className="mb-4">
        <p className="text-gray-500 font-bold text-[16px]">{activityDetails}</p>
      </div>
      <span className="font-semibold text-[#939393] text-[18px]">Lesson {lesson}</span>
    </div>
  
    <div>
      <span className="font-bold text-[18px] text-[#939393]">Topic {topicno}</span>: 
      <span className="text-[#939393] text-[16px]"> {topictitle}</span>
    </div>
  
    <div className="mt-2 mr-10">
      <p>{details}</p>
    </div>
  
    <div className="mt-4 font-bold mb-3 text-[20px] flex gap-2">
      <span>{test}</span> |
      <span>{mark}</span> |
      <span>{time}</span>
    </div>
  
    {/* Repeated topic sections */}
    <div className="space-y-3">
      <div>
        <span className="font-bold text-[18px] text-[#939393]">Topic {topicno}</span>: 
        <span className="text-[#939393] text-[16px]"> {topictitle}</span>
      </div>
      <div>
        <span className="font-bold text-[18px] text-[#939393]">Topic {topicno}</span>: 
        <span className="text-[#939393] text-[16px]"> {topictitle}</span>
      </div>
      <div>
        <span className="font-bold text-[18px] text-[#939393]">Topic {topicno}</span>: 
        <span className="text-[#939393] text-[16px]"> {topictitle}</span>
      </div>
    </div>
  
    {/* Homework and Additional Note sections */}
    <div className="flex mt-5 mb-[30px]">
      <div className="flex space-y-4 flex-col mr-[200px]">
        <span className="font-bold text-[18px]">H.W</span>
        <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</span>
      </div>
      <div className="flex space-y-4 flex-col mr-[200px]">
        <span className="font-bold text-[18px]">Additional Note</span>
        <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</span>
      </div>
    </div>
  
    {/* Attached files section */}
    <div className="border-b-[1px]">
      {attachedFiles && attachedFiles.length > 0 && (
        <div className="mt-5 mb-5 flex gap-2">
          <div className="flex items-center flex-wrap gap-8">
            <h4 className="text-gray-600 font-semibold mb-2">Attached Files</h4>
            {attachedFiles.map((file, index) => (
              <a key={index} href={file.url} className="text-[#465049] font-semibold text-[16px] border-[1px] w-[170px] px-7 py-4 rounded-[8px] text-sm underline">
                {file.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>

      {/* Resolve button and message section for Rejected status */}
      {status === 'Rejected' && (
      <div className="mt-4 bg-[#FFE5E5] p-4 rounded-[8px] border-[1px] border-red-400">
        <p className="text-[#BB5042] font-semibold mb-3">Please provide a correct solution.</p>
        <div className="flex items-center gap-3">
          <button className="bg-[#BB5042] text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600">Resolve</button>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 text-[#BB5042]" /> <span className="text-[#BB5042] font-semibold">Mark as resolved</span>
          </label>
        </div>
      </div>
    )}
  </div>
  
  );
};

const SyllabusList = () => {
  const syllabusData = [
    {
      status: 'In Progress',
      date: 'Sunday | 1st Sep 2024',
      title: 'Economics | Class IX',
      lesson: '7',
      topicno: "33",
      test: "M.Test",
      mark: "30",
      time: "20 min",
      topictitle: ' Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent..',
      details: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
      activityDetails: 'Board Work | 10 min',
      attachedFiles: [{ name: 'Document1.pdf', url: '#' }, { name: 'Document2.pdf', url: '#' }]
    },
    {
      status: 'Submitted',
      date: 'Sunday | 1st Sep 2024',
      title: 'Economics | Class IX',
      lesson: '11',
      topicno: "33",
      test: "M.Test",
      mark: "30",
      time: "20 min",
      details: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
      topictitle: 'Lorem ipsum dolor sit amet consectetur...',
      activityDetails: 'M.Test | 30 marks',
      attachedFiles: [{ name: 'Document1.pdf', url: '#' }]
    },
    {
      status: 'Rejected',
      date: 'Monday | 2nd Sep 2024',
      title: 'Economics | Class IX',
      lesson: '8',
      topicno: "33",
      test: "M.Test",
      mark: "30",
      time: "20 min",
      details: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
      topictitle: 'Lorem ipsum dolor sit amet consectetur...',
      activityDetails: 'Homework',
      attachedFiles: []
    },
    {
      status: 'In Progress',
      date: 'Monday | 2nd Sep 2024',
      title: 'Economics | Class IX',
      lesson: '10',
      topicno: "33",
      test: "M.Test",
      mark: "50",
      time: "30 min",
      details: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
      topictitle: 'Lorem ipsum dolor sit amet consectetur...',
      activityDetails: 'Homework and notes...',
      attachedFiles: []
    }
  ];

  return (
    <div className="max-w-full">
      {syllabusData.map((syllabus, index) => (
        <SyllabusCard key={index} {...syllabus} />
      ))}
    </div>
  );
};



// Separate functional component for Filter Modal
function FilterModal({ isOpen, onClose }) {
  if (!isOpen) return null; // If modal is not open, don't render anything

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-20 rounded-[8px] w-[700px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <RxCrossCircled size={24} />
        </button>
        
        <h2 className="text-[31px] text-center font-bold mt-5 mb-4">Select Filters</h2>
        
        {/* Filter form */}
        <div className="flex mt-10 gap-4">
          {/* Subject Filter */}
          <div className="relative w-full flex items-center border-[1px] rounded-[8px] border-[#B6B6B6]">
            <select className="w-full px-4 py-4 border-none rounded-md outline-none appearance-none">
              <option value="" selected>Subject</option>
              <option value="math">Mathematics</option>
              <option value="english">English</option>
              <option value="science">Science</option>
            </select>
            <IoIosArrowDown className='mr-5 w-5 h-5 text-[#BB5042]'/>
          </div>

          {/* Class Filter */}
          <div className="relative w-full  flex items-center border-[1px] rounded-[8px] border-[#B6B6B6]">
            <select className="w-full px-4 py-4 border-none rounded-md outline-none appearance-none">
              <option value="" selected>Class</option>
              <option value="six">Class Six</option>
              <option value="seven">Class Seven</option>
              <option value="eight">Class Eight</option>
            </select>
            <IoIosArrowDown className='mr-5 w-5 h-5 text-[#BB5042]'/>
          </div>

          {/* Section/Group Filter */}
          <div className="relative w-full  flex items-center border-[1px] rounded-[8px] border-[#B6B6B6]">
            <select className="w-full px-4 py-4 border-none rounded-md outline-none appearance-none">
              <option value=""  selected>Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
            <IoIosArrowDown className='mr-5 w-5 h-5 text-[#BB5042]'/>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-14 mb-10">
          <button className="px-7 py-4 w-[450px] bg-[#BB5042] text-white rounded-md">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}


function DraftLesson() {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false); // State for modal
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="max-w-full mb-10   mr-[47px]">
      <LayoutLesson />
      <div className="p-5 border-l-[1px] rounded-b-[8px] border-r-[1px] border-b-[1px]">

        {/* Flex container for the filter button and date picker */}
        <div className="flex border-b-[1px]  justify-between items-center">

          {/* Filter Button */}
          <div className="flex gap-2 mb-5 items-center">
            
            <button onClick={() => setFilterModalOpen(true)} className="py-2 px-6 w-[150px] h-[55px] text-[18px] font-medium border border-[#BB5042] text-[#BB5042] flex items-center rounded-[8px]">
              <CiFilter className="w-6 h-6" /> Filter
            </button>
          </div>

          {/* Date Picker with Calendar Icon */}
          <div className="relative mb-5 flex items-center">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="appearance-none font-semibold px-8 w-[200px] py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] h-[55px] pr-[60px]"
              placeholderText="Select Date"
              dateFormat="dd MMM yyyy"
            />
            <CiCalendar className="absolute w-7 h-7 text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

        </div>
  {/* Rendering the Syllabus List */}
  <div className="mt-6">
        <SyllabusList />
      </div>
       {/* Render Filter Modal */}
       <FilterModal isOpen={isFilterModalOpen} onClose={() => setFilterModalOpen(false)} />
      </div>

      
    </div>
  );
}

export default DraftLesson;
