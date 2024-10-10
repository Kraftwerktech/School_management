import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ActivityModal from './ActivityModal'; // Import Modal Component
import { Link } from 'react-router-dom';

const TodayRouting = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false); // Control modal visibility
  const [selectedActivity, setSelectedActivity] = useState(null); // Store selected activity details

  const subjects = [
    { period: '1st', time: '10:00 am - 10:45 am', subject: 'Bengali', class: 'V - B', buttonText: 'Activity' },
    { period: '2nd', time: '11:00 am - 11:35 am', subject: 'n/a', class: 'V - A', buttonText: 'Activity' },
    { period: '3rd', time: '11:40 am - 12:25 pm', subject: 'BGS', class: 'V - A', buttonText: 'Activity' },
    { period: '4th', time: '12:30 pm - 1:15 pm', subject: 'Economics', class: 'IX-Group 1', buttonText: 'Activity' },
    { period: '5th', time: '1:15 pm - 2:00 pm', subject: 'BGS', class: 'VI - A', buttonText: 'Activity' },
    { period: '6th', time: '2:15 pm - 3:00 pm', subject: 'Bengali', class: 'V - B', buttonText: 'Activity' },
  ];

  // Handle date selection from the calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Open the modal and pass activity details
  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
    setModalOpen(true);
  };

  return (
    <div className="bg-white mt-5 border-[1px] rounded-[8px] pb-5 pt-5 mb-4">
      <div className="flex ml-10 gap-4">
        {/* Left side - Calendar */}
        <div className="w-[500px]">
          <h3 className="font-semibold text-[24px] text-[#465049] mb-5">Today’s Routing</h3>
          {/* Display Calendar with selected date */}
          <Calendar
            value={selectedDate}
            onChange={handleDateChange}
            className="mt-5 mb-5 mr-5 rounded-[8px] border-[0.5px] border-[#F6F9F7] font-semibold p-5"
          />
          <Link to='/teacher/dashboard/routineCalender'>
            <button className="hover:bg-[#EAC9C4] ml-16 px-5 py-2 border-[1px] rounded-[8px] border-[#BB5042] text-[#BB5042]">
              View Academic Calendar
            </button>
          </Link>
        </div>

        {/* Right side - Subject schedule */}
        <div className="w-full">
          <h3 className="text-end mr-[47px] text-[18px] text-[#A4A594]">Weekly Routine</h3>
          <div className="grid mr-5 grid-cols-5 mt-[30px] md:grid-cols-6 gap-4">
            {subjects.map((subject, index) => (
              <div key={index} className="text-center bg-[#F6F9F7] p-4 rounded-lg">
                <p className="font-bold text-[31px] mb-3 text-gray-800">{subject.period}</p>
                <p className="font-medium items-center ml-8 w-[90px] text-[18px] mb-5 text-[#465049]">{subject.time}</p>
                <p className="text-[#BB5042] font-bold text-[26px]">{subject.subject !== 'n/a' ? subject.subject : 'N/A'}</p>
                <p className="text-[#465049] text-[20px] mb-8 font-bold">{subject.class}</p>

                {/* Conditionally render the button based on the subject */}
                {subject.subject !== 'n/a' ? (
                  <button
                    onClick={() => handleActivityClick(subject)} // Pass subject data to modal
                    className="mt-2 bg-transparent border-[1px] border-[#BB5042] text-[#BB5042] text-[16px] rounded-[8px] px-6 py-3"
                  >
                    {subject.buttonText}
                  </button>
                ) : (
                  <button
                    disabled
                    className="mt-2 bg-transparent border-[1px] border-[#939393] text-[#939393] text-[16px] rounded-[8px] px-6 py-3 cursor-not-allowed"
                  >
                    {subject.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Render the ActivityModal and pass props */}
      <ActivityModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} // Close the modal
        activity={selectedActivity} // Pass selected activity to the modal
      />
    </div>
  );
};

export default TodayRouting;
