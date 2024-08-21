import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdExpandMore } from 'react-icons/md';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';
import { CiCalendar } from "react-icons/ci";

// Dummy Data
const students = [
  { id: 1, date: '01 July 2024', name: 'John Doe', periods: ['', '', '', '', '', ''] },
  { id: 2, date: '01 July 2024', name: 'Jane Smith', periods: ['', '', '', '', '', ''] },
  { id: 3, date: '01 July 2024', name: 'Sam Johnson', periods: ['', '', '', '', '', ''] },
  { id: 4, date: '01 July 2024', name: 'Emily Davis', periods: ['', '', '', '', '', ''] },
];

const itemsPerPage = 5;

function SubstituteScheduling() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const displayedStudents = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="pb-8 mt-1">
      <h3 className="text-[31px] font-semibold mb-6">Substitute Scheduling</h3>

      <div className="w-full bg-transparent pb-0  mb-0">
        <div className="flex flex-wrap gap-4 md:gap-6 mb-3">
          {/* Date Select */}
          <div className="relative w-full md:w-[152px]">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10 h-[44px]"
              placeholderText="Select Date"
              dateFormat="dd MMMM yyyy"
            />
            <CiCalendar className="absolute w-6 h-6 text-[#BB5042] right-3 top-[20px] transform -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Period Select */}
          <div className="relative w-full mb-3 md:w-[152px]">
            <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10 h-[44px]">
              <option value="">Select Period</option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Class Select */}
          <div className="relative w-full md:w-[152px]">
            <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10 h-[44px]">
              <option value="">Select Class</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-[40%] transform -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Section Select */}
          <div className="relative w-full md:w-[152px]">
            <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10 h-[44px]">
              <option value="">Select Section</option>
              <option value="Bangla">Bangla</option>
              <option value="English">English</option>
              <option value="Math">Math</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-[40%] transform -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Search Button */}
          <button className="px-5 py-2 bg-[#BB5042] text-white rounded-md w-full md:w-auto h-[44px] flex items-center justify-center">
            Search
          </button>
        </div>
      </div>
      <div>
        <p className='text-[#151515] mb-2 text-[16px]'>3(8) Teacher’s are available</p>
      </div>

      {/* Student Table */}
      <div className="w-full bg-white  rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-[#E4EBE6]">
              <tr className="text-center text-sm text-[#465049]">
                <th className="px-4 py-2">SL</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Teacher’s Name</th>
                <th className="px-4 py-2">1st</th>
                <th className="px-4 py-2">2nd</th>
                <th className="px-4 py-2">3rd</th>
                <th className="px-4 py-2">4th</th>
                <th className="px-4 py-2">5th</th>
                <th className="px-4 py-2">6th</th>
                <th className="px-4 py-2">Assign</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student, index) => (
                <tr key={student.id} className="border-b h-[92px] text-sm text-gray-700 text-center">
                  <td className="px-4 py-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="px-4 py-2">{student.date}</td>
                  <td className="px-4 py-2">
                    <span>{student.name}</span>
                  </td>
                  {student.periods.map((period, idx) => (
                    <td key={idx} className="px-4 py-2">
                      <button className={`w-[76.67px] h-[60px] flex items-center justify-center ${period ? 'bg-transparent' : 'bg-[#F8EEEC]'} ${idx % 2 === 0 ? 'text-[#08A647]' : 'text-[#BB5042]'}`}>
                        {period}
                        {period ? <IoIosCheckmarkCircleOutline className="h-6 w-6" /> : <RxCrossCircled className="h-6 w-6" />}
                      </button>
                    </td>
                  ))}
                  <td className="px-4 py-2">
                    <button className="border-[1px] border-[#BB5042] text-[#BB5042] w-[103px] h-[44px] rounded-md flex items-center justify-center">
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SubstituteScheduling;
