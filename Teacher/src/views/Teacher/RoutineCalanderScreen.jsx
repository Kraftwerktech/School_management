import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from 'react-router-dom';

function RoutineCalendarScreen() {
  // Array for the days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Array for the months
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Generate the dates for the calendar
  const startDate = new Date(currentYear, currentMonthIndex, 1);
  const totalDays = new Date(currentYear, currentMonthIndex + 1, 0).getDate(); // Number of days in the current month

  const dates = Array.from({ length: totalDays }, (_, i) => startDate.getDate() + i);

  // Function to generate random subjects and classes
  const generateRandomClasses = () => {
    const subjects = ['Math', 'Science', 'English', 'History', 'Geography'];
    const classes = ['IX-A', 'IX-B', 'IX-C', 'IX-D'];

    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];

    return `${randomSubject} | ${randomClass}`;
  };

  // Handle Month and Year Change
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

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Calendar Header */}
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

      {/* Calendar Body */}
      <div className='bg-[#F6F9F7] border-[2px] rounded-lg shadow-md'>
        {/* Row 1: Days of the Week */}
        <div className='grid grid-cols-7 text-center border-b border-gray-300'>
          {daysOfWeek.map((day, index) => (
            <div key={index} className='p-4'>
              <span className='font-semibold'>{day}</span>
            </div>
          ))}
        </div>

        {/* Rows 2 to 5: Dates and Classes */}
        <div className='grid grid-cols-7'>
          {dates.map((date, index) => {
            const dayOfWeek = new Date(currentYear, currentMonthIndex, date).getDay();
            return (
              <div key={index} className={`border border-gray-300 p-1 h-[160px] ${dayOfWeek === 5 ? 'bg-gray-100' : ''}`}>
                <div className='text-center font-medium mb-2'>{date}</div>
                {dayOfWeek !== 5 ? (
                  <Link to='/teacher/dashboard/class-routine'>
                    <div className='flex flex-col items-center space-y-1'>
                      <div className='bg-[#98AD9E] text-white text-xs rounded-md w-[160px] h-[30px] flex items-center justify-center truncate'>
                        {`1st period | ${generateRandomClasses()}`}
                      </div>
                      <div className='bg-[#98AD9E] text-white text-xs rounded-md w-[160px] h-[30px] flex items-center justify-center truncate'>
                        {`2nd period | ${generateRandomClasses()}`}
                      </div>
                      <div className='bg-[#98AD9E] text-white text-xs rounded-md w-[160px] h-[30px] flex items-center justify-center truncate'>
                        {`3rd period | ${generateRandomClasses()}`}
                      </div>
                    </div>
                  </Link>
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
    </div>
  );
}

export default RoutineCalendarScreen;
