import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdExpandMore } from "react-icons/md";

// Dummy Data
const students = [
  {
    id: 1,
    picture: 'https://randomuser.me/api/portraits/men/32.jpg',
    studentId: 'DM 16000024',
    name: 'John Doe',
    class: 'IX',
    section: 'A',
    roll: '12'
  },
  {
    id: 2,
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    class: 'IX',
    section: 'A',
    roll: '13'
  },
  {
    id: 3,
    picture: 'https://randomuser.me/api/portraits/men/85.jpg',
    studentId: 'DM 16000026',
    name: 'Sam Johnson',
    class: 'IX',
    section: 'B',
    roll: '14'
  },
  {
    id: 4,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: 'DM 16000027',
    name: 'Emily Davis',
    class: 'IX',
    section: 'C',
    roll: '15'
  },
  {
    id: 5,
    picture: 'https://randomuser.me/api/portraits/men/76.jpg',
    studentId: 'DM 16000028',
    name: 'Michael Brown',
    class: 'IX',
    section: 'A',
    roll: '16'
  },
  {
    id: 6,
    picture: 'https://randomuser.me/api/portraits/women/88.jpg',
    studentId: 'DM 16000029',
    name: 'Sophia Wilson',
    class: 'IX',
    section: 'B',
    roll: '17'
  },
  {
    id: 7,
    picture: 'https://randomuser.me/api/portraits/men/92.jpg',
    studentId: 'DM 16000030',
    name: 'James Anderson',
    class: 'IX',
    section: 'C',
    roll: '18'
  },
  {
    id: 8,
    picture: 'https://randomuser.me/api/portraits/women/52.jpg',
    studentId: 'DM 16000031',
    name: 'Olivia Martinez',
    class: 'IX',
    section: 'A',
    roll: '19'
  },
  {
    id: 9,
    picture: 'https://randomuser.me/api/portraits/men/49.jpg',
    studentId: 'DM 16000032',
    name: 'Liam Taylor',
    class: 'IX',
    section: 'B',
    roll: '20'
  },
  {
    id: 10,
    picture: 'https://randomuser.me/api/portraits/women/60.jpg',
    studentId: 'DM 16000033',
    name: 'Isabella Thomas',
    class: 'IX',
    section: 'C',
    roll: '21'
  },
];

const itemsPerPage = 8;

function StudentInformation() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const displayedStudents = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="pr-8 pb-6 mt-0">
      <h3 className="text-[31px] font-semibold mb-6">Student Directory</h3>
      
      <div className="w-full bg-white mr-4 pb-2 mt-0">
        <div className="flex flex-wrap gap-3">
          <input 
            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[300px]" 
            type="text" 
            name="search" 
            placeholder="Search by Student Name or ID" 
          />
          
          <div className="relative w-full md:w-[170px]">
            <select 
              className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
            >
              <option value="">Select Class</option>
              <option>Class-ix</option>
              <option>Class-x</option>
              <option>Class-xi</option>
              <option>Class-xii</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          
          <div className="relative w-full md:w-[170px]">
            <select 
              className="appearance-none px-6 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10"
            >
              <option value="">Select Section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          
          <div className="relative w-full md:w-[170px]">
            <select 
              className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-10"
            >
              <option value="">Select Subject</option>
              <option>Bangla</option>
              <option>English</option>
              <option>Math</option>
              <option>Biology</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          
          <button 
            className="px-5 py-2 bg-[#BB5042] text-white rounded-md w-full md:w-auto"
          >
            Search
          </button>
          
        </div>
        <div className='mt-5'>
          <span className="font-semibold text-[17px]">Total Number of Students: 535</span>
        </div>
       
      </div>

      <div className="w-full text-center bg-white">
        <div className="overflow-x-auto rounded-t-[12px]">
          <table className="min-w-full border-[1px] table-auto text-center">
            <thead className="bg-[#E4EBE6] h-[60px] text-center">
              <tr className="text-[#465049] text-[16px] text-center">
                <th className="px-4 py-2">SL</th>
                <th className="px-4 py-2">Picture</th>
                <th className="px-4 py-2">Student ID</th>
                <th className="px-4 py-2">Student Name</th>
                <th className="px-4 py-2">Class</th>
                <th className="px-4 py-2">Section</th>
                <th className="px-4 py-2">Roll</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student, index) => (
                <tr key={student.id} className="border-b text-[16px] text-gray-700">
                  <td className="px-4 py-2 text-center">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td className="px-4 py-2 flex justify-center">
                    <img
                      src={student.picture}
                      alt={student.name}
                      className="w-[60px] h-[60px] rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 text-[#939393] text-center">{student.studentId}</td>
                  <td className="px-4 py-2 text-center">
                    <a className='text-[#0318CF] font-medium text-[16px] hover:text-[#BB5042]' href='http://localhost:5173/teacher/dashboard/student-dir'>{student.name}</a>
                  </td>
                  <td className="px-4 py-2 text-center">{student.class}</td>
                  <td className="px-4 py-2 text-center">{student.section}</td>
                  <td className="px-4 py-2 text-center">{student.roll}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4">
          <div className="flex items-center space-x-2">
            <button 
              onClick={handlePrevPage} 
              className={`w-10 h-10 flex items-center justify-center bg-transparent border-[#BB5042] border-[1px] rounded text-[#BB5042] hover:bg-[#BB5042] hover:text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentPage === 1}
            >
              <MdKeyboardArrowLeft className="text-xl" />
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index + 1)}
                className={`w-10 h-10 flex items-center justify-center border-[1px] border-[#BB5042] rounded ${currentPage === index + 1 ? 'bg-[#BB5042] text-white' : 'bg-transparent text-[#BB5042] hover:bg-[#BB5042] hover:text-white'}`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={handleNextPage} 
              className={`w-10 h-10 flex items-center justify-center bg-transparent border-[#BB5042] border-[1px] rounded text-[#BB5042] hover:bg-[#BB5042] hover:text-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentPage === totalPages}
            >
              <MdKeyboardArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentInformation;
