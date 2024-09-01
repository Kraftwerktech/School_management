import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendar } from "react-icons/ci";
import { BsFiletypePdf } from "react-icons/bs";

// Dummy Data
const students = [
  {
    date:'31 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'John Doe',
    role:"Admin"
    
  },
  {
    date: '29 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'Jane Smith',
    role:"Admin"
    
  },
  {
    date: '25 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'Sam Johnson',
    role:"Admin"
   
  },
  {
    date: '25 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'Emily Davis',
    role:"Admin"
    
  },
  {
    date: '25 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'Michael Brown',
    role:"Admin"
    
  },
  {
    date: '25 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'Sophia Wilson',
    role:"Admin"
    
  },
  {
    date:'25 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'James Anderson',
    role:"Admin"
   
  },
  {
    date: '25 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'Olivia Martinez',
    role:"Admin"
    
  },
  {
    date: '25 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'Liam Taylor',
    role:"Admin"
   
  },
  {
    date: '25 Aug 2024',
    subject: 'Monthly Class Test will be held on Next Monday.',
    details: 'Lorem ipsum dolor sit amet consectetur. Velit sapien turpis nibh facilisis diam ipsum sodales arcu ut. Diam non eget tincidunt etiam venenatis velit aliquet non. Venenatis in tincidunt nibh varius eu pellentesque. Scelerisque etiam erat natoque sed.',
    name: 'Isabella Thomas',
    role:"Admin"
   
  },
];

const itemsPerPage = 8;

function Announcement() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => setCurrentPage(page);

  const displayedStudents = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="pr-8 pb-6 mt-0">
      <h3 className="text-[31px] font-semibold mb-6">Announcement</h3>
      
      <div className="w-full bg-white rounded-md">
        <div className="flex flex-wrap gap-4 mb-10">
          <input 
            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[300px]" 
            type="text" 
            name="search" 
            placeholder="Search by Student Name or ID" 
          />
          
          <div className="relative w-full md:w-[215px]">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="appearance-none px-8 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-[60px] h-[44px]"
              placeholderText="Start Date"
              dateFormat="dd MMMM yyyy"
            />
            <CiCalendar className="absolute w-7 h-7 text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative w-full md:w-[215px]">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="appearance-none px-8 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-[60px] h-[44px]"
              placeholderText="End Date"
              dateFormat="dd MMMM yyyy"
            />
            <CiCalendar className="absolute w-7 h-7 text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <button 
            className="px-7 py-2 bg-[#BB5042] text-white rounded-md w-full md:w-auto"
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full bg-white mt-6 rounded-md">
        <div className="overflow-x-auto rounded-t-md">
          <table className="min-w-full table-auto">
            <thead className="bg-[#E4EBE6] text-left h-[60px]">
              <tr className="text-[#465049] text-[16px]">
                <th className="px-4 py-3 max-w-[140px]">Date</th>
                <th className="px-4 py-3 max-w-[220px]">Subject</th>
                <th className="px-4 py-3 max-w-[320px]">Details</th>
                <th className="px-4 py-3 max-w-[160px]">Published By</th>
                <th className="px-4 py-3 max-w-[140px]">Attachment</th>
              </tr>
            </thead>
            <tbody>
              {displayedStudents.map((student, index) => (
                <tr key={index} className="border-b text-[16px] text-gray-700">
                  <td className="px-4 py-3 max-w-[140px]">{student.date}</td>
                  <td className="px-4 py-3 max-w-[220px]">{student.subject}</td>
                  <td className="px-4 py-3 max-w-[320px] text-[#939393]">{student.details}</td>
                  <td className="px-4 py-3 max-w-[160px]">
                    <span className="font-medium text-[16px] hover:text-[#BB5042]">{student.name}</span>
                    <br />
                    <span>{student.role}</span>
                  </td>
                  <td className="px-4 py-3 max-w-[140px] text-center">
                    <BsFiletypePdf className="w-5 h-5 text-[#BB5042] mx-auto" />
                  </td>
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

export default Announcement;
