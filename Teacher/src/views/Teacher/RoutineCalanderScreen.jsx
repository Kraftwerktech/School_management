import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

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
    const subjects = ['Math', 'Science', 'English', 'History', 'Geography'];
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
    <div className="container mx-auto px-4 py-6">
      <div className='flex justify-between items-center mb-6'>
        <div className='flex items-center gap-4'>
          <SlArrowLeftCircle className='text-[24px] text-[#BB5042]' />
          <span className='text-[24px] font-bold'>Calendar</span>
        </div>
        <div className='flex items-center'>
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

        <div className='grid grid-cols-7'>
          {dates.map((date, index) => {
            const dayOfWeek = new Date(currentYear, currentMonthIndex, date).getDay();
            return (
              <div key={index} className={`border border-gray-300 p-2 h-[180px] ${dayOfWeek === 5 ? 'bg-gray-100' : ''}`}>
                <div className='text-center font-medium mb-2'>{date}</div>
                {dayOfWeek !== 5 ? (
                  <div className='flex flex-col items-center space-y-1'>
                    <div className='bg-[#98AD9E] text-white text-[10px] rounded-md w-[90%] h-[24px] flex items-center justify-center truncate'>
                      {`1st period | ${generateRandomClasses()}`}
                    </div>
                    <div className='bg-[#98AD9E] text-white text-[10px] rounded-md w-[90%] h-[24px] flex items-center justify-center truncate'>
                      {`2nd period | ${generateRandomClasses()}`}
                    </div>
                    <div className='bg-[#98AD9E] text-white text-[10px] rounded-md w-[90%] h-[24px] flex items-center justify-center truncate'>
                      {`3rd period | ${generateRandomClasses()}`}
                    </div>
                    <button 
                      className='text-xs text-blue-500 underline mt-1'
                      onClick={() => openModal(`Details for ${date}, ${months[currentMonthIndex]} ${currentYear}`)}
                    >
                      See more
                    </button>
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
        className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-lg mx-auto">
          <h2 className="text-lg font-bold mb-4">Class Details</h2>
          <p>{modalContent}</p>
          <button 
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-[#BB5042] text-white rounded-md"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default RoutineCalendarScreen;
