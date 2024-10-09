import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdExpandMore } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import { BsClockHistory } from "react-icons/bs";
import Absence from '../../../assets/Teacher/icons/Absence.png';
import Present from '../../../assets/Teacher/icons/Present.png';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { TfiAlarmClock } from "react-icons/tfi";

// Dummy Data
const initialStudents = [
  { id: 1, picture: 'http://localhost:5173/01.jpg', studentId: 'DM37384587228', name: 'John Doe', class: 'IX', section: 'A', roll: '12', status: 'Present' },
  { id: 2, picture: 'http://localhost:5173/02.jpg', studentId: 'DM37384587229', name: 'Jane Smith', class: 'IX', section: 'A', roll: '13', status: 'Absent' },
  { id: 3, picture: 'http://localhost:5173/03.jpg', studentId: 'DM37384587230', name: 'Michael Johnson', class: 'IX', section: 'B', roll: '14', status: 'Present' },
  { id: 4, picture: 'http://localhost:5173/04.jpg', studentId: 'DM37384587231', name: 'Emily Davis', class: 'IX', section: 'B', roll: '15', status: 'Absent' },
  { id: 5, picture: 'http://localhost:5173/05.jpg', studentId: 'DM37384587232', name: 'David Brown', class: 'X', section: 'A', roll: '16', status: 'Present' },
  { id: 6, picture: 'http://localhost:5173/06.jpg', studentId: 'DM37384587233', name: 'Sarah Wilson', class: 'X', section: 'A', roll: '17', status: 'Absent' },
  { id: 7, picture: 'http://localhost:5173/07.jpg', studentId: 'DM37384587234', name: 'James Lee', class: 'X', section: 'B', roll: '18', status: 'Present' },
  { id: 8, picture: 'http://localhost:5173/08.jpg', studentId: 'DM37384587235', name: 'Laura Miller', class: 'X', section: 'B', roll: '19', status: 'Absent' },
  { id: 9, picture: 'http://localhost:5173/09.jpg', studentId: 'DM37384587236', name: 'Robert Anderson', class: 'XI', section: 'A', roll: '20', status: 'Present' },
  { id: 10, picture: 'http://localhost:5173/10.jpg', studentId: 'DM37384587237', name: 'Olivia Martinez', class: 'XI', section: 'A', roll: '21', status: 'Absent' },
  // More students if needed...
];

//Late Entry Model

const LateEntryModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to Open Modal */}
      <button
        className=" py-2 px-4 rounded  transition duration-300"
        onClick={toggleModal}
      >
      <BsClockHistory className='w-7 h-7 text-[#BB5042]'/>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-lg  w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={toggleModal}
            >
              ✕
            </button>

            {/* Modal Title */}
            <h2 className="text-2xl font-bold mb-8 mt-8 text-center">Late Entry</h2>

            {/* Modal Form */}
            <form className=' flex flex-col items-center'>
  {/* Late Entry Time Input */}
  <div className="mb-6 flex gap-4 items-center">
    <div className="relative w-[400px]">
      <input
        type="text"
        className="placeholder:text-[13px] py-2 px-5 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pl-10"
        placeholder="Late Entry Time"
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <TfiAlarmClock  className=' w-6 h-6 text-[#BB5042]'/>
      </span>
    </div>
  </div>

  {/* Reason Input */}
  <div className=" flex gap-4 items-center">
    <div className="w-[400px]">
      <input
        type="text"
        id="reason"
        className="placeholder:text-[13px] py-2 px-5 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
        placeholder="Reason"
      />
    </div>
  </div>

  {/* Submit Button */}
  <div className="text-center mb-[30px] mt-[50px]">
    <button
      type="submit"
      className="bg-[#BB5042] text-white py-2 px-6 rounded hover:bg-green-600 transition duration-300"
    >
      Submit
    </button>
  </div>
           </form>

          </div>
        </div>
      )}
    </>
  );
};




const itemsPerPage = 8;

function SubjectAttendances() {
  const [currentPage, setCurrentPage] = useState(1);
  const [studentData, setStudentData] = useState(initialStudents);
  const totalPages = Math.ceil(studentData.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Set all students to 'Present'
  const markAllAsPresent = () => {
    setStudentData((prevData) =>
      prevData.map((student) => ({
        ...student,
        status: 'Present',
      }))
    );
  };

  const toggleAttendance = (id) => {
    setStudentData((prevData) =>
      prevData.map((student) =>
        student.id === id
          ? { ...student, status: student.status === 'Present' ? 'Absent' : 'Present' }
          : student
      )
    );
  };

  const displayedStudents = studentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="pr-8 pb-6 mt-0">
      <h3 className="text-[31px] mb-[14px] font-semibold">Subject Attendance</h3>

      <div className="w-full rounded-[12px] mb-[40px] bg-white border-[1px] h-[112px] mr-4 pb-2 mt-0">
        <div className="flex flex-wrap mt-[35px] ml-[20px] gap-[32px]">
          <div className="relative w-full md:w-[170px]">
            <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
              <option value="">Class</option>
              <option>Class IX</option>
              <option>Class X</option>
              <option>Class XI</option>
              <option>Class XII</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative w-full md:w-[170px]">
            <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
              <option value="">Subject</option>
              <option>Bangla</option>
              <option>English</option>
              <option>Math</option>
              <option>Physics</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative w-full md:w-[170px]">
            <select className="appearance-none px-6 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10">
              <option value="">Section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          <div className=' flex items-center px-5 py-2 bg-[#BB5042] text-white rounded-md w-full md:w-auto'>
          <Link className=" flex gap-2 items-center">
          Filter
          </Link>
          
          </div>
        
        
        
          
        </div>
      </div>

      <div className="w-full border-[1px] mb-5 rounded-[12px] text-center bg-white">
        <div className="grid grid-cols-3 gap-[16px] mb-10 mt-5 h-[230px] p-4">
          <div className="h-full rounded-[12px] bg-[#A7BEAE] p-4">
            <div className=" flex flex-col items-center">
              <div className=' mb-6 flex text-center'>
              <span className="block text-[25px] text-[#465049] font-semibold">Total Students</span>
              </div>
              <div className=' flex gap-[40px] items-center'>
              <div className="flex items-center justify-center bg-[#77877C] w-[80px] h-[80px] rounded-full">
                <PiStudent className="w-[50px] text-white h-[50px]" />
              </div>
              <span className="block text-[49px] text-[#465049] font-bold">{studentData.length}</span>
              </div>
            </div>
          </div>

          <div className="h-full rounded-[12px] bg-[#daefe0] p-4">
            <div className="flex flex-col items-center">
              <div className=' mb-6 flex text-center'>
              <span className="block text-[25px] text-[#465049] font-semibold">Present Students</span>
              </div>
              <div className='flex gap-[40px] items-center'>
              <div className="flex justify-center items-center bg-[#08A647] w-[80px] h-[80px] rounded-full">
                <img src={Present} className="w-[50px] text-white h-[50px]" />
              </div>
              <div>
              <span className="block text-[49px] text-[#465049] font-bold">
                  {studentData.filter((student) => student.status === 'Present').length}
              </span>
              </div>
              </div>
            </div>
          </div>
          <div className="h-full rounded-[12px] bg-[#F8EEEC] p-4">
            <div className="flex  flex-col items-center">
              <div className=' mb-6 flex text-center'>
              <span className="block text-[25px] text-[#465049] font-semibold">Absent Students</span>
              </div>

              <div className='flex gap-[40px] items-center'>
              <div className="flex justify-center items-center bg-[#CD1902] w-[80px] h-[80px] rounded-full">
                <img src={Absence} className="w-[50px] text-white h-[50px]" />
              </div>
              <div>
              <span className="block text-[49px] text-[#465049] font-bold">
                  {studentData.filter((student) => student.status === 'Absent').length}
                </span> 
              </div>
              </div>
            </div>
          </div>
        </div>

  <div className='w-full flex justify-between pl-5 pr-5 mb-8 max-h-[80px]'>
    
  <div className="relative w-full md:max-w-[400px]">
  <IoIosSearch className="absolute text-[#BB5042] left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" size={24} />
      <input
        className="px-8 py-3  placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-12"
        type="text"
        name="search"
        placeholder="Search by Student Name or ID"
      />
    
    </div>

    <div>
      <button onClick={markAllAsPresent} className="px-5 py-2 bg-[#BB5042] text-white rounded-md">
        Mark as Present
      </button>
  </div>
</div>

<div className='w-full text-center bg-white'>
         <div className="overflow-x-auto  pl-5 pr-5 rounded-t-[12px]">
          <table className=" min-w-full items-center  table-auto  text-center">
            <thead className='bg-[#E4EBE6] h-[60px] text-center'>
              <tr className="text-[#465049] text-[16px] text-center">
              <th className="px-4 py-2"><input type="checkbox" className='w-[14px] h-[14px]' /></th>
                <th className="px-4 py-2">Picture</th>
                <th className="px-4 py-2">Student ID</th>
                <th className="px-4 py-2">Student Name</th>
                <th className="px-4 py-2">Roll</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Late Status</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student) => (
                <tr key={student.id} className="border-b text-[16px] text-gray-700">
                  <td className="px-4 py-2 text-center"><input type="checkbox" className='w-[14px] h-[14px]' /></td>
                  
                  <td className="px-4 py-2 flex justify-center">
                    <img src={student.picture} alt={student.name} className="w-[60px] h-[60px] rounded-full" />
                  </td>
                  <td className="px-4 py-2 text-[#939393] text-center">{student.studentId}</td>
                  <td className="px-4 py-2 text-center  text-[#0318CF]"><a href='/teacher/dashboard/student-dir'>{student.name}</a></td>
                  <td className="px-4 py-2 text-center">{student.roll}</td>
                  <td className="px-4 py-2 text-center">
        <div className="flex gap-3 justify-center">
       <button
      onClick={() => toggleAttendance(student.id)}
      className={`relative flex items-center justify-center w-[135px] py-[8px] text-center rounded-full text-white font-semibold transition-all duration-300 ${
        student.status === 'Present' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {/* Circle */}
      <span
        className={`absolute w-7 h-7 bg-white rounded-full transition-all duration-300 ${
          student.status === 'Present' ? 'right-2' : 'left-2'
        }`}
      ></span>
      {/* Button Text */}
      <span className="mx-auto">
        {student.status === 'Present' ? 'Present' : 'Absent'}
      </span>
    </button>
  </div>
</td>
      <td className="px-4 py-2 text-center">
      <LateEntryModal/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      
     <div className="flex justify-end mr-5 mt-10 mb-10 items-center space-x-2">
            <button
              onClick={handlePrevPage}
              className={`w-10 h-10 flex items-center justify-center bg-transparent border-[#BB5042] border-[1px] rounded text-[#BB5042] hover:bg-[#BB5042] hover:text-white ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentPage === 1}
            >
              <MdKeyboardArrowLeft className="text-xl" />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index + 1)}
                className={`w-10 h-10 flex items-center justify-center border-[1px] border-[#BB5042] rounded ${
                  currentPage === index + 1 ? 'bg-[#BB5042] text-white' : 'bg-transparent text-[#BB5042] hover:bg-[#BB5042] hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              className={`w-10 h-10 flex items-center justify-center bg-transparent border-[#BB5042] border-[1px] rounded text-[#BB5042] hover:bg-[#BB5042] hover:text-white ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentPage === totalPages}
            >
              <MdKeyboardArrowRight className="text-xl" />
            </button>
          </div>
      </div>
    </div>
  );
}

export default SubjectAttendances;
