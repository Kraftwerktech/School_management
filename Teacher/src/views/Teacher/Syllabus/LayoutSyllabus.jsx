import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxCrossCircled } from 'react-icons/rx';

//CloneSyllabusModel

function CloneSyllabusModal({ isOpen, onClose }) {
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
            onClick={() => { /* Handle Yes click */ }}
            className="bg-[#BB5042] text-white px-6 py-3 rounded-md hover:bg-[#a9432e]"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="border border-[#BB5042] text-[#BB5042] px-6 py-3 rounded-md hover:bg-[#f8e4e0]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

//CreateSyllabusModel
function CreateSyllabusModal({ isOpen, onClose }) {
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
            onClick={() => { /* Handle Yes click */ }}
            className="bg-[#BB5042] text-white px-6 py-3 rounded-md hover:bg-[#a9432e]"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="border border-[#BB5042] text-[#BB5042] px-6 py-3 rounded-md hover:bg-[#f8e4e0]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}


function LayoutSyllabus() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const tabs = [
    { name: 'Approved Syllabus', path: '/teacher/dashboard/approved' },
    { name: 'Drafted Syllabus', path: '/teacher/dashboard/drafted' },
    { name: 'Waiting for your Approval', path: '/teacher/dashboard/waiting' },
  ];

  return (
    <div className="max-w-full">
      <div className="flex justify-between items-center mt-5 h-[52px]">
        <span className="text-[31px] font-bold">Syllabus</span>
        <button
          onClick={openModal}
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
              isActive
                ? 'font-bold text-[20px] border-b-[5px] border-[#BB5042] pb-2'
                : 'text-gray-600 text-[20px] hover:text-gray-900'
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>

      {/* Modal */}
      <CloneSyllabusModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default LayoutSyllabus;
