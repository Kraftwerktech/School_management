import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { IoCalendarClearOutline } from "react-icons/io5";


// Dummy Data
const students = [
  {
    id: 1,
    date: '2024-08-12',
    day: 'sat',
    schedule: [
      { subject: 'Bangla', className: 'VI-A' },
      { subject: 'English', className: 'VII-C' },
      { subject: 'Math', className: 'V-B' },
      { subject: 'Physics', className: 'XI-A' },
      { subject: 'Chemistry', className: 'XII-C' },
      { subject: 'Biology', className: 'IX-A' },
    ],
  },
  {
    id: 2,
    date: '2024-08-13',
    day: 'sun',
    schedule: [
      { subject: 'Bangla', className: 'VI-A' },
      { subject: 'n/a', className: '' },
      { subject: 'Math', className: 'V-B' },
      { subject: 'Physics', className: 'XI-A' },
      { subject: 'Chemistry', className: 'XII-C' },
      { subject: 'Biology', className: 'IX-A' },
    ],
  },
  {
    id: 3,
    date: '2024-08-14',
    day: 'Mon',
    schedule: [
      { subject: 'Bangla', className: 'VI-A' },
      { subject: 'English', className: 'VII-C' },
      { subject: 'Math', className: 'V-B' },
      { subject: 'Physics', className: 'XI-A' },
      { subject: 'Chemistry', className: 'XII-C' },
      { subject: 'Biology', className: 'IX-A' },
    ],
  },
  {
    id: 4,
    date: '2024-08-15',
    day: 'Thu',
    schedule: [
      { subject: 'Bangla', className: 'VI-A' },
      { subject: 'English', className: 'VII-C' },
      { subject: 'Math', className: 'V-B' },
      { subject: 'Physics', className: 'XI-A' },
      { subject: 'Chemistry', className: 'XII-C' },
      { subject: 'Biology', className: 'IX-A' },
    ],
  },
  {
    id: 5,
    date: '2024-08-16',
    day: 'Wed',
    schedule: [
      { subject: 'Bangla', className: 'VI-A' },
      { subject: 'English', className: 'VII-C' },
      { subject: 'Math', className: 'V-B' },
      { subject: 'Physics', className: 'XI-A' },
      { subject: 'Chemistry', className: 'XII-C' },
      { subject: 'Biology', className: 'IX-A' },
    ],
  },
  {
    id: 6,
    date: '2024-08-17',
    day: 'The',
    schedule: [
      { subject: 'Bangla', className: 'VI-A' },
      { subject: 'English', className: 'VII-C' },
      { subject: 'Math', className: 'V-B' },
      { subject: 'Physics', className: 'XI-A' },
      { subject: 'Chemistry', className: 'XII-C' },
      { subject: 'Biology', className: 'IX-A' },
    ],
  },
  {
    id: 7,
    date: '2024-08-18',
    day: 'Fri ',
    schedule: [
      { subject: 'Bangla', className: 'VI-A' },
      { subject: 'English', className: 'VII-C' },
      { subject: 'Math', className: 'V-B' },
      { subject: 'Physics', className: 'XI-A' },
      { subject: 'Chemistry', className: 'XII-C' },
      { subject: 'Biology', className: 'IX-A' },
    ],
  },
];

const StudentInformation = () => {
  const [selectedDate, setSelectedDate] = useState(students[0].date);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h3 className="text-[31px] font-bold text-gray-900 mb-8">My Routine</h3>

      {/* Routine Table */}
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-transparent">
              <tr className="text-center pl-10 text-sm text-gray-700">
                <th className="px-4 py-2">
                  <div className="flex pl-11 justify-center">
                    <Link to="/teacher/dashboard/routineCalender">
                      <IoCalendarClearOutline className="w-[70px] h-[70px] text-[#BB5042]" />
                    </Link>
                  </div>
                </th>
                {['1st', '2nd', '3rd', '4th', '5th', '6th'].map((period, index) => (
                  <th key={index} className="px-4 py-2">
                    <span className="text-[25px]">{period}</span>
                    <p className="text-gray-600 text-[16px] mt-[10px] mb-[5px]">
                      {index + 10}:00 am<br />
                      {index + 10}:45 am
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className={`text-center ${selectedDate === student.date ? 'bg-transparent text-black' : 'bg-transparent text-gray-500'}`}
                  onClick={() => handleDateSelect(student.date)}
                >
                  <td className="px-2 w-[175px] py-2">
                    <div className="flex items-center justify-center gap-6 cursor-pointer">
                      <p>{student.day}</p>
                      <p className={`w-16 h-16 rounded-full border text-xl font-bold flex items-center justify-center ${selectedDate === student.date ? 'bg-[#465049] text-white' : 'bg-white text-black'}`}>
                        {student.date.split('-')[2]}
                      </p>
                    </div>
                  </td>
                  {student.schedule.map((period, index) => (
                    <td key={index} className="px-4 border-b py-2">
                      <div className={`font-bold text-[18px] ${selectedDate === student.date ? 'text-[#BB5042]' : 'text-[#BB5042] opacity-50'}`}>
                        {period.subject}
                      </div>
                      <p className={`text-[16px] font-semibold mt-[7px] ${selectedDate === student.date ? 'text-gray-500' : 'text-gray-400 opacity-70'}`}>{period.className}</p>
                    </td>
                  ))}
                </tr>
              ))}
              {/* Ensure 7 rows in total */}
              {[...Array(7 - students.length)].map((_, i) => (
                <tr key={i + students.length} className="text-center bg-white opacity-50">
                  <td className="px-4 py-2">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <p>-</p>
                      <p className="w-16 h-16 rounded-full border flex items-center justify-center bg-white text-black opacity-50">
                        -
                      </p>
                    </div>
                  </td>
                  {Array(6).fill().map((_, j) => (
                    <td key={j} className="px-4 py-2">
                      <div className="font-bold text-[#BB5042] opacity-50">-</div>
                      <p className="text-xs text-gray-400 opacity-50">-</p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentInformation;
