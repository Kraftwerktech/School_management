import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { IoChevronDownSharp } from 'react-icons/io5';

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
      <div className="bg-white p-10 rounded-lg max-h-[90%] max-w-[700px] w-full relative overflow-auto">
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

// CreateLessonModal Component
function CreateLessonModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h2 id="modal-title" className="text-[31px] font-bold mt-6 mb-6 text-center">
          Create Lesson
        </h2>
        <div className="flex flex-col gap-6 mx-10">
          {/* Row 1 */}
          <div className="flex gap-10 justify-center">
            <FormInput label="Clone from" type="date" placeholder="2024" />
            <FormInput label="Lesson Year" type="text" placeholder="2025" />
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 justify-center">
            <FormInput label="Select Class" type="text" placeholder="Select Class" />
            <FormInput label="Select Subject" type="text" placeholder="Select Subject" />
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <Link
          to="/teacher/dashboard/drafted"
          className="bg-[#BB5042] w-[182px] text-white px-10 py-3 rounded-md hover:bg-[#a9432e] focus:outline-none focus:ring-2 focus:ring-[#a9432e] focus:ring-opacity-50"
        >
          Confirm
        </Link>
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
