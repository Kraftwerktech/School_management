import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { IoCloseCircleOutline } from "react-icons/io5";

function RoutineCalendarScreen() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const startDate = new Date(currentYear, currentMonthIndex, 1);
  const totalDays = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
  const dates = Array.from({ length: totalDays }, (_, i) => startDate.getDate() + i);

  const generateRandomClasses = () => {
    const subjects = ['Math-02', 'Science', 'Eng-01', 'HIS-01', 'Geo-01'];
    const classes = ['IX-A', 'IX-B', 'IX-C', 'IX-D'];

    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];

    return `${randomSubject} | ${randomClass}`;
  };

  const handleMonthChange = (direction) => {
    let newMonthIndex = currentMonthIndex + direction;
    let newYear = currentYear;

    if (newMonthIndex < 0) {
      newMonthIndex = 11;
      newYear--;
    } else if (newMonthIndex > 11) {
      newMonthIndex = 0;
      newYear++;
    }

    setCurrentMonthIndex(newMonthIndex);
    setCurrentYear(newYear);
  };

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-full pr-10">
      <div className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-4'>
        <Link to='/teacher/dashboard/class-routine'>
        <SlArrowLeftCircle className='text-[24px] text-[#BB5042]' />
        </Link>
        
          <span className='text-[24px] font-bold'>Calendar</span>
        </div>
        <div className=' items-center'>
          <button 
            className='px-4 py-2' 
            onClick={() => handleMonthChange(-1)}
          >
            <MdKeyboardArrowLeft className='text-[#BB5042] w-6 h-6' />
          </button>
          <span className='text-[20px] font-semibold mx-2'>
            {`${months[currentMonthIndex]} ${currentYear}`}
          </span>
          <button 
            className='px-4 py-2' 
            onClick={() => handleMonthChange(1)}
          >
            <MdKeyboardArrowRight className='text-[#BB5042] w-6 h-6' />
          </button>
        </div>
      </div>

      <div className='bg-[#F6F9F7] border-[2px] rounded-lg shadow-md'>
        <div className='grid grid-cols-7 text-center border-b border-gray-300'>
          {daysOfWeek.map((day, index) => (
            <div key={index} className='p-4'>
              <span className='font-semibold'>{day}</span>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-7 w-full'>
          {dates.map((date, index) => {
            const dayOfWeek = new Date(currentYear, currentMonthIndex, date).getDay();
            return (
              <div key={index} className={`border border-gray-300 p-2 h-[180px] ${dayOfWeek === 5 ? 'bg-gray-100' : ''}`}>
                <div className='text-center mb-2 font-semibold'>
                  <Link to='/teacher/dashboard/class-routine'>{date}</Link>
                  </div>
                {dayOfWeek !== 6 ? (
                 <div className='flex flex-col items-center space-y-1'>
                 <div className='bg-[#98AD9E] text-white text-[10px] md:text-[12px] rounded-md w-[100%] h-[24px] flex items-center pl-2 pr-2 justify-start truncate'>
                   {`1st period | ${generateRandomClasses()}`}
                 </div>
                 <div className='bg-[#98AD9E] text-white text-[10px] md:text-[12px] rounded-md w-[100%] h-[24px] flex items-center pl-2 pr-2 justify-start truncate'>
                   {`2nd period | ${generateRandomClasses()}`}
                 </div>
                 <div className='bg-[#98AD9E] text-white text-[10px] md:text-[12px] rounded-md w-[100%] h-[24px] flex items-center pl-2 pr-2 justify-start truncate'>
                   {`3rd period | ${generateRandomClasses()}`}
                 </div>
                 <div className='w-[100%] h-[24px] flex items-center justify-start pl-2'>
                   <button 
                     className='text-[10px] md:text-[12px] text-gray-400 hover:text-gray-600 transition-colors truncate'
                     onClick={() => openModal(`Details for ${date}, ${months[currentMonthIndex]} ${currentYear}`)}
                   >
                     more...
                   </button>
                 </div>
               </div>
               
                ) : (
                  <div className='h-full flex items-center justify-center text-gray-500'>
                    No Classes
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>


      {/* Modal for displaying class details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Class Details"
        className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-50"
        overlayClassName="fixed z-50 inset-0 bg-black bg-opacity-0"
      >
        <div className="relative bg-white w-[700px] h-auto p-6 rounded-md shadow-lg max-w-lg mx-auto">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <IoCloseCircleOutline className="w-6 h-6" />
          </button>
          <h2 className="text-[24px] text-gray-600 mt-5 text-center font-bold mb-6">
            {modalContent}
          </h2>
          <div className="w-[400px] border border-gray-300 rounded-md mx-auto p-8 mb-8">
            <div className="text-[#465049] border-b-[1px] font-semibold text-[16px] py-2 flex justify-between items-center">
              <span className="truncate">1st period {generateRandomClasses()}</span>
            </div>
            <div className="text-[#465049] border-b-[1px] font-semibold text-[16px] py-2 flex justify-between items-center">
              <span className="truncate">2nd period {generateRandomClasses()}</span>
            </div>
            <div className="text-[#465049] border-b-[1px] font-semibold text-[16px] py-2 flex justify-between items-center">
              <span className="truncate">3rd period {generateRandomClasses()}</span>
            </div>
            <div className="text-[#465049] border-b-[1px] font-semibold text-[16px] py-2 flex justify-between items-center">
              <span className="truncate">4th period {generateRandomClasses()}</span>
            </div>
            <div className="text-[#465049] border-b-[1px] font-semibold text-[16px] py-2 flex justify-between items-center">
              <span className="truncate">5th period {generateRandomClasses()}</span>
            </div>
            <div className="text-[#465049] font-semibold text-[16px] py-2 flex justify-between items-center">
              <span className="truncate">6th period {generateRandomClasses()}</span>
            </div>
          </div>
        </div>
      </Modal>

    </div>
  );
}

export default RoutineCalendarScreen;
