import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';
import { IoChevronDownSharp } from "react-icons/io5";

// CloneSyllabusModal Component
function CloneSyllabusModal({ isOpen, onClose, onYes, onNo }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-[500px] w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <RxCrossCircled size={24} />
        </button>

        <h2 className="text-lg font-bold mt-6 ml-10 mr-10 text-center mb-6">
          Do you want to clone the syllabus from the previous year?
        </h2>
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={onYes}
            className="bg-[#BB5042] text-white px-6 py-3 rounded-md hover:bg-[#a9432e]"
          >
            Yes
          </button>
          <button
            onClick={onNo}
            className="border border-[#BB5042] text-[#BB5042] px-6 py-3 rounded-md hover:bg-[#f8e4e0]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

// CreateCloneSyllabusModal Component
function CreateSyllabusModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg max-h-[600px] max-w-[700px] w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <RxCrossCircled size={24} />
        </button>

        <div className="p-6">
      <h2 className="text-[31px] font-bold mt-6 mb-6 text-center">
        Create Syllabus
      </h2>
      <div className="flex flex-col gap-6 ml-10 mr-10">
        {/* First Row */}
        <div className="flex gap-10 justify-center">
          <div className="flex gap-2 items-center">
            <span className="text-[16px] font-bold text-[#465049]">Clone from</span>
            <div className="relative">
              <input
                type="date"
                placeholder="2024"
                className="w-[100px] h-[48px] border border-gray-300 pl-2 pr-8 text-center rounded-md"
                onFocus={(e) => (e.target.type = "year")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <IoChevronDownSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-[16px] font-bold text-[#465049]">Syllabus Year</span>
            <div className="relative">
              <input
                type="text"
                placeholder="2025"
                className="w-[100px] h-[48px] border border-gray-300 pl-2 pr-8 text-center rounded-md"
                onFocus={(e) => (e.target.type = "year")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <IoChevronDownSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-10 justify-center">
          <div className="flex gap-2 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Select Class"
                className="w-[152px] h-[48px] border border-gray-300 pl-2 pr-8 rounded-md"
              />
              <IoChevronDownSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Select Subject"
                className="w-[152px] h-[48px] border border-gray-300 pl-2 pr-8 rounded-md"
              />
              <IoChevronDownSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Select Subject"
                className="w-[152px] h-[48px] border border-gray-300 pl-2 pr-8 rounded-md"
              />
              <IoChevronDownSharp className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
        </div>
      </div>
    </div>
       

        {/* Add content for creating a syllabus */}
        <div className="flex items-center justify-center gap-6">
          <Link to="/teacher/dashboard/drafted" className="bg-[#BB5042] w-[182px] text-white px-10 py-3 rounded-md hover:bg-[#a9432e]">
          <button>
            Confirm
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

// CreateNewSyllabusModal Component
function CreateNewSyllabusModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-[700px] w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <RxCrossCircled size={24} />
        </button>

        <div className="p-6">
      <h2 className="text-[31px] font-bold mt-6 mb-6 text-center">
        Create New Syllabus
      </h2>
      <div className="flex flex-col space-y-[20px] gap-6 ml-10 mr-10">
        {/* First Row */}
        <div className="flex gap-10 justify-center">
         
          <div className="flex gap-2 items-center">
            <span className="text-[20px] font-bold text-[#465049]">Syllabus Year</span>
            <div className="relative">
              <input
                type="text"
                placeholder="2025"
                className="w-[150px] h-[48px] border border-gray-300 pl-2 pr-8 text-center rounded-md"
                onFocus={(e) => (e.target.type = "year")}
                onBlur={(e) => (e.target.type = "text")}
              />
              <IoChevronDownSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-10 justify-center">
          <div className="flex gap-2 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Select Class"
                className="w-[152px] h-[48px] border border-gray-300 pl-2 pr-8 rounded-md"
              />
              <IoChevronDownSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Select Subject"
                className="w-[152px] h-[48px] border border-gray-300 pl-2 pr-8 rounded-md"
              />
              <IoChevronDownSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Select Subject"
                className="w-[152px] h-[48px] border border-gray-300 pl-2 pr-8 rounded-md"
              />
              <IoChevronDownSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* Add content for creating a syllabus */}
        <div className="flex items-center justify-center gap-6">
          <Link className="bg-[#BB5042] text-white w-[160px] px-6 py-3 rounded-md hover:bg-[#a9432e]" to='/coordinator/dasboard/CoDraftsyllabus'>
          <button
          >
            Confirm
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

// LayoutSyllabus Component
function LayoutSyllabus() {
  const [isCloneModalOpen, setCloneModalOpen] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isNewSyllabusModalOpen, setNewSyllabusModalOpen] = useState(false);

  const location = useLocation();

  const openCloneModal = () => setCloneModalOpen(true);
  const closeCloneModal = () => setCloneModalOpen(false);
  const closeCreateModal = () => setCreateModalOpen(false);
  const closeNewSyllabusModal = () => setNewSyllabusModalOpen(false);

  const handleYesClick = () => {
    setCloneModalOpen(false);
    setCreateModalOpen(true);
  };

  const handleNoClick = () => {
    setCloneModalOpen(false);
    setNewSyllabusModalOpen(true);
  };


  const tabs = [

    { name: 'Approved Syllabus', path: '/coordinator/dasboard/CoApprovedsyllabus' },
    { name: 'Drafted Syllabus', path: '/coordinator/dasboard/CoDraftsyllabus' },
    { name: 'Waiting for your Approval', path: '/coordinator/dasboard/CoWaitingsyllabus' },

  ];
  
  return (
    <div className="max-w-full">
      <div className="flex justify-between items-center mt-5 h-[52px]">
        <span className="text-[31px] font-bold">Syllabus</span>
        <button
          onClick={openCloneModal}
          className="border rounded-lg text-white bg-[#BB5042] mr-5 px-6 py-2"
        >
          Create Syllabus
        </button>
      </div>

      {/* Tabbar */}
      <div className="flex gap-16 mt-10 border-b-[1px]">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              isActive || (tab.name === 'Approved Syllabus' && location.pathname === '/teacher/dashboard')
                ? 'font-bold text-[20px] border-b-[5px] border-[#BB5042] pb-2'
                : 'text-gray-600 text-[20px] hover:text-gray-900'
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>

      {/* Modals */}
      <CloneSyllabusModal
        isOpen={isCloneModalOpen}
        onClose={closeCloneModal}
        onYes={handleYesClick}
        onNo={handleNoClick}
      />
      <CreateSyllabusModal isOpen={isCreateModalOpen} onClose={closeCreateModal} />
      <CreateNewSyllabusModal isOpen={isNewSyllabusModalOpen} onClose={closeNewSyllabusModal} />
    </div>
  );
}


export default LayoutSyllabus;
