import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { IoChevronDownSharp } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white p-10 rounded-lg max-w-[800px] h-[500px] relative overflow-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <RxCrossCircled size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};


import { IoCalendarClearOutline } from "react-icons/io5";

import { IoIosArrowDown } from "react-icons/io";

function CreateLessonModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLesson, setSelectedLesson] = useState('');

  const subjects = ['Mathematics', 'Science', 'English', 'History']; // Replace with dynamic subjects if needed
  const lessons = ['Lesson 1', 'Lesson 2', 'Lesson 3']; // Replace with dynamic lessons if needed

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-10">
        <h2 id="modal-title" className="text-[31px] font-bold mb-10 text-center">
          Create Lesson
        </h2>
        <div className="flex flex-col gap-6 mx-10">
          {/* Row 1 */}
          <div className="flex gap-10 justify-center">
            {/* Date Picker */}
            <div className="relative flex items-center">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="border border-[#B6B6B6] w-[150px] focus:border-[#BB5042] rounded-md px-5 py-3"
                placeholderText="Date"
              />
              <IoCalendarClearOutline className="absolute right-3 top-1/2 h-5 w-5 transform -translate-y-1/2 text-[#BB5042]" />
            </div>

            {/* Class Dropdown */}
            <div className="relative w-[150px]">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="border border-[#B6B6B6] focus:border-[#BB5042] rounded-md w-full px-4 py-2 appearance-none"
              >
                <option value="">Class</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    Class {i + 1}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-3 top-1/2 h-5 w-5 transform -translate-y-1/2 text-[#BB5042]" />
            </div>

            {/* Section Dropdown */}
            <div className="relative w-[150px]">
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="border border-[#B6B6B6] focus:border-[#BB5042] rounded-md w-full px-4 py-2 appearance-none"
              >
                <option value="">Section</option>
                {['A', 'B', 'C', 'D'].map((section, index) => (
                  <option key={index} value={section}>
                    {section}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-3 top-1/2 h-5 w-5 transform -translate-y-1/2 text-[#BB5042]" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex mt-6 gap-10 justify-center">
            {/* Subject Dropdown */}
            <div className="relative w-[150px]">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="border border-[#B6B6B6] focus:border-[#BB5042] rounded-md w-full px-4 py-2 appearance-none"
              >
                <option value="">Subject</option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-3 top-1/2 h-5 w-5 transform -translate-y-1/2 text-[#BB5042]" />
            </div>

            {/* Lesson Dropdown */}
            <div className="relative w-[150px]">
              <select
                value={selectedLesson}
                onChange={(e) => setSelectedLesson(e.target.value)}
                className="border border-[#B6B6B6] focus:border-[#BB5042] rounded-md w-full px-4 py-2 appearance-none"
              >
                <option value="">Lesson</option>
                {lessons.map((lesson, index) => (
                  <option key={index} value={lesson}>
                    {lesson}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute right-3 top-1/2 h-5 w-5 transform -translate-y-1/2 text-[#BB5042]" />
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <Link
            to="/teacher/dashboard/addlesson"
            className="bg-[#BB5042] text-center font-semibold w-[182px] text-white px-10 py-3 rounded-md hover:bg-[#a9432e] focus:outline-none focus:ring-2 focus:ring-[#a9432e] focus:ring-opacity-50"
          >
            Confirm
          </Link>
        </div>
      </div>
    </Modal>
  );
}

// Reusable Input Component
const FormInput = ({ label, type, placeholder }) => (
  <div className="flex gap-2 items-center">
    <span className="text-[16px] font-bold text-[#465049]">{label}</span>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="w-[152px] h-[48px] border border-gray-300 pl-2 pr-8 text-center rounded-md"
      />
      <IoChevronDownSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
    </div>
  </div>
);

// LayoutLesson Component
function LayoutLesson() {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: 'Approved Lesson', path: '/teacher/dashboard/approveLesson' },
    { name: 'Drafted Lesson', path: '/teacher/dashboard/draftLesson' },
  ];

  const openCreateModal = () => setCreateModalOpen(true);
  const closeCreateModal = () => setCreateModalOpen(false);

  return (
    <div className="max-w-full mr-5">
      <header className="flex justify-between items-center mt-5 h-[52px]">
        <h1 className="text-[31px] font-bold">Lesson Plan</h1>
        <button
          onClick={openCreateModal}
          className="border rounded-lg text-white bg-[#BB5042] px-6 py-2 hover:bg-[#a9432e] focus:outline-none focus:ring-2 focus:ring-[#a9432e] focus:ring-opacity-50"
          aria-label="Create Lesson"
        >
          Create
        </button>
      </header>

      {/* Tab Navigation */}
      <nav className="flex gap-16 mt-10 border-b-[1px]">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              (isActive || (tab.name === 'Approved Lesson' && location.pathname === '/teacher/dashboard'))
                ? 'font-bold text-[20px] border-b-[5px] border-[#BB5042] pb-2'
                : 'text-gray-600 text-[20px] hover:text-gray-900'
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </nav>

      <main className="mt-10">
        <Outlet />
      </main>

      {/* Create Lesson Modal */}
      <CreateLessonModal isOpen={isCreateModalOpen} onClose={closeCreateModal} />
    </div>
  );
}

export default LayoutLesson;
