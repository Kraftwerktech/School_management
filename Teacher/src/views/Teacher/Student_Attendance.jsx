import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdExpandMore } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
// Dummy Data
const students = [
  {
    id: 1,
    picture: 'https://randomuser.me/api/portraits/men/32.jpg',
    studentId: '37384587228',
    name: 'John Doe',
    class: 'IX',
    section: 'A',
    roll: '12'
  },
  {
    id: 2,
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    studentId: '37384587229',
    name: 'Jane Smith',
    class: 'IX',
    section: 'A',
    roll: '13'
  },
  {
    id: 3,
    picture: 'https://randomuser.me/api/portraits/men/85.jpg',
    studentId: '37384587230',
    name: 'Sam Johnson',
    class: 'IX',
    section: 'B',
    roll: '14'
  },
  {
    id: 4,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: '37384587231',
    name: 'Emily Davis',
    class: 'IX',
    section: 'C',
    roll: '15'
  },
  {
    id: 5,
    picture: 'https://randomuser.me/api/portraits/men/76.jpg',
    studentId: '37384587232',
    name: 'Michael Brown',
    class: 'IX',
    section: 'A',
    roll: '16'
  },
  {
    id: 6,
    picture: 'https://randomuser.me/api/portraits/women/88.jpg',
    studentId: '37384587233',
    name: 'Sophia Wilson',
    class: 'IX',
    section: 'B',
    roll: '17'
  },
  {
    id: 7,
    picture: 'https://randomuser.me/api/portraits/men/92.jpg',
    studentId: '37384587234',
    name: 'James Anderson',
    class: 'IX',
    section: 'C',
    roll: '18'
  },
  {
    id: 8,
    picture: 'https://randomuser.me/api/portraits/women/52.jpg',
    studentId: '37384587235',
    name: 'Olivia Martinez',
    class: 'IX',
    section: 'A',
    roll: '19'
  },
  {
    id: 9,
    picture: 'https://randomuser.me/api/portraits/men/49.jpg',
    studentId: '37384587236',
    name: 'Liam Taylor',
    class: 'IX',
    section: 'B',
    roll: '20'
  },
  {
    id: 10,
    picture: 'https://randomuser.me/api/portraits/women/60.jpg',
    studentId: '37384587237',
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
      <h3 className="text-[31px] mb-[40px] font-semibold">Attendance</h3>
      
      <div className="w-full rounded-[12px] mb-[40px] bg-white border-[1px] h-[112px] mr-4 pb-2 mt-0">
        <div className="flex flex-wrap mt-[35px] ml-[20px]  gap-[32px]">
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
       
      </div>
  
      <div className="w-full border-[1px] rounded-[12px] h-[1630px] text-center bg-white">
       <div className='ml-[850px] font-bold mt-5'>
        <span className='text-[31px]'>Class VI-B | Bangla</span>
       </div>
      <div className='w-full flex flex-wrap gap-[20px] ml-12 mt-5 h-[190px]'>
      <div className='w-[450px] flex items-center h-full rounded-[12px] bg-[#A7BEAE]'>
  <div className='flex justify-center m-[40px] items-center bg-[#77877C] w-[120px] h-[120px] rounded-[12px]'>
    <PiStudent className='w-[40px] text-white h-[40px]' />
  </div>
  <div className='ml-4'>
    <span className='block text-[25px] font-semibold'>Total Number of Students</span>
    <span className='block text-2xl font-bold'>70</span>
  </div>
</div>

       <div className='w-[300px] h-full rounded-[12px] bg-[#F6F9F7]'></div>
       <div className='w-[300px] h-full rounded-[12px] bg-[#F8EEEC]'></div>
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
