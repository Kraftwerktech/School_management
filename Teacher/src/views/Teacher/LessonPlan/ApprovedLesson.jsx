import React, { useState } from 'react';
import LayoutLesson from './LayoutLesson';
import { CiFilter, CiCalendar } from "react-icons/ci";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TbExchange } from "react-icons/tb";
import { FiEdit } from 'react-icons/fi';
import { CiTrash } from 'react-icons/ci';
import { RxCrossCircled } from 'react-icons/rx';
import { IoIosArrowDown } from "react-icons/io";

// Separate functional component for Filter Modal
function FilterModal({ isOpen, onClose }) {
  if (!isOpen) return null; // If modal is not open, don't render anything

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-20 rounded-[8px] w-[700px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <RxCrossCircled size={24} />
        </button>
        
        <h2 className="text-[31px] text-center font-bold mt-5 mb-4">Select Filters</h2>
        
        {/* Filter form */}
        <div className="flex mt-10 gap-4">
          {/* Subject Filter */}
          <div className="relative w-full flex items-center border-[1px] rounded-[8px] border-[#B6B6B6]">
            <select className="w-full px-4 py-4 border-none rounded-md outline-none appearance-none">
              <option value="" selected>Subject</option>
              <option value="math">Mathematics</option>
              <option value="english">English</option>
              <option value="science">Science</option>
            </select>
            <IoIosArrowDown className='mr-5 w-5 h-5 text-[#BB5042]'/>
          </div>

          {/* Class Filter */}
          <div className="relative w-full  flex items-center border-[1px] rounded-[8px] border-[#B6B6B6]">
            <select className="w-full px-4 py-4 border-none rounded-md outline-none appearance-none">
              <option value="" selected>Class</option>
              <option value="six">Class Six</option>
              <option value="seven">Class Seven</option>
              <option value="eight">Class Eight</option>
            </select>
            <IoIosArrowDown className='mr-5 w-5 h-5 text-[#BB5042]'/>
          </div>

          {/* Section/Group Filter */}
          <div className="relative w-full  flex items-center border-[1px] rounded-[8px] border-[#B6B6B6]">
            <select className="w-full px-4 py-4 border-none rounded-md outline-none appearance-none">
              <option value=""  selected>Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
            <IoIosArrowDown className='mr-5 w-5 h-5 text-[#BB5042]'/>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-14 mb-10">
          <button className="px-7 py-4 w-[450px] bg-[#BB5042] text-white rounded-md">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}



function ApprovedLesson() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isFilterModalOpen, setFilterModalOpen] = useState(false); // State for modal

  return (
    <div className='max-w-full mr-5'>
      <LayoutLesson />
      <div className='mt-6'>

        {/* Flex container for the filter button and datepicker */}
        <div className='flex mr-5 justify-between items-center'>
          
          {/* Filter Button */}
          <div className='flex gap-2 items-center'>
            <button
              className='py-2 gap-2 px-6 w-[150px] font-medium bg-[#BB5042] text-white flex items-center rounded-[8px]'
              onClick={() => setFilterModalOpen(true)} // Open modal on click
            >
              <CiFilter className='w-6 h-6' /> Filter
            </button>
          </div>

          {/* Date Picker with Calendar Icon */}
          <div className='relative flex items-center'>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="appearance-none px-8 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-[60px] h-[44px]"
              placeholderText="Select Date"
              dateFormat="dd MMMM yyyy"
            />
            {/* Calendar Icon positioned inside the DatePicker input */}
            <CiCalendar className="absolute w-7 h-7 text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

        </div>

        <div className='flex justify-between  items-center mr-5 mt-10'>
          <span className='text-[20px] font-semibold text-[#98AD9E]'>Economics | Class IX | Group 1</span>
          <span><TbExchange className='text-[#BB5042] w-10 h-7' /></span>
        </div>
<div className='mb-5 border-b-[2px] border-[#B6B6B6]'>
<div className=' mb-[50px] border-b-[1.5px]'>
          <div className='mt-5 flex justify-between border-b-[1px] mr-5'>
            <span className='text-[20px] font-bold mb-2'>Activity</span>
          </div>
          <div className='mt-2'>
            <div className='mt-3'>
              <span className='text-[18px] font-semibold'>Board Work | 10 min</span> <br />
              <span className='text-[18px] text-[#939393] font-semibold'>Lesson 11</span>
            </div>
            <div className='flex mb-1.5 gap-2'>
              <span className='text-[#939393] text-[18px] font-bold'>Topic 35 | Topic Title:</span>
              <span className='text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
              
            </div>
            <p className='text-[16px] text-black'>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
              </p>
          </div>

          <div className='mt-2'>
            <div className='flex justify-between border-b-[1px] items-center mt-5 mr-5'>
              <span className='text-[18px] text-[#465049] mb-3 font-bold'>M.Test | 30 marks | 20 min</span>
            </div>
            <div className='mt-3'>
              <span className='text-[18px] text-[#939393] font-semibold'>Lesson 7 | Lesson 30</span>
            </div>
            <div className='flex mb-1.5 gap-2'>
              <span className='text-[#939393] text-[18px] font-bold'>Topic 35 | Topic Title:</span>
              <span className='text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
              
            </div>
            <div className='flex mb-1.5 gap-2'>
              <span className='text-[#939393] text-[18px] font-bold'>Topic 35 | Topic Title:</span>
              <span className='text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
              
            </div>
            <div className='flex mb-1.5 gap-2'>
              <span className='text-[#939393] text-[18px] font-bold'>Topic 35 | Topic Title:</span>
              <span className='text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
              
            </div>
            <div className='space-y-4'>
            <p className='text-[16px] text-black'>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className='gap-10 mb-5 flex items-center pt-4'>
            <div><span className=' text-[#939393] text-[18px]'>Attached Files</span></div>
            <div className='w-[170px] p-4 border-[1px] border-[#B9CBBE] rounded-[8px]'><span>Document.pdf</span></div>
             <div className='w-[170px] p-4 border-[1px] border-[#B9CBBE] rounded-[8px]'><span>Document 2.pdf</span></div>
          </div>
        </div>
        <div className='flex mb-[30px]'>
          <div className='flex space-y-4 flex-col mr-[200px]'>
          <span className=' font-bold text-[18px] '>H.W</span>
          <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</span>
          </div>
          <div className='flex space-y-4 flex-col mr-[200px]'>
          <span className=' font-bold text-[18px]'>Additional Note</span>
          <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </div>
</div>





<div className='flex justify-between items-center mr-5 mt-10'>
          <span className='text-[20px] font-semibold text-[#98AD9E]'>Economics | Class IX | Group 1</span>
          <span><TbExchange className='text-[#BB5042] w-10 h-7' /></span>
        </div>
<div className='mb-5'>
<div className=' mb-[50px] border-b-[1.5px]'>
          <div className='mt-5 flex justify-between border-b-[1px] mr-5'>
            <span className='text-[20px] font-bold mb-2'>Activity</span>
          </div>
          <div className='mt-2'>
            <div className='mt-3'>
              <span className='text-[18px] font-semibold'>Board Work | 10 min</span> <br />
              <span className='text-[18px] text-[#939393] font-semibold'>Lesson 11</span>
            </div>
            <div className='flex mb-1.5 gap-2'>
              <span className='text-[#939393] text-[18px] font-bold'>Topic 35 | Topic Title:</span>
              <span className='text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
              
            </div>
            <p className='text-[16px] text-black'>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
              </p>
          </div>

          <div className='mt-2'>
            <div className='flex justify-between border-b-[1px] items-center mt-5 mr-5'>
              <span className='text-[18px] text-[#465049] mb-3 font-bold'>M.Test | 30 marks | 20 min</span>
            </div>
            <div className='mt-3'>
              <span className='text-[18px] text-[#939393] font-semibold'>Lesson 7 | Lesson 30</span>
            </div>
            <div className='flex mb-1.5 gap-2'>
              <span className='text-[#939393] text-[18px] font-bold'>Topic 35 | Topic Title:</span>
              <span className='text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
              
            </div>
            <div className='flex mb-1.5 gap-2'>
              <span className='text-[#939393] text-[18px] font-bold'>Topic 35 | Topic Title:</span>
              <span className='text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
              
            </div>
            <div className='flex mb-1.5 gap-2'>
              <span className='text-[#939393] text-[18px] font-bold'>Topic 35 | Topic Title:</span>
              <span className='text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
              
            </div>
            <div className='space-y-4'>
            <p className='text-[16px] text-black'>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className='gap-10 mb-5 flex items-center pt-4'>
            <div><span className=' text-[#939393] text-[18px]'>Attached Files</span></div>
            <div className='w-[170px] p-4 border-[1px] border-[#B9CBBE] rounded-[8px]'><span>Document.pdf</span></div>
             <div className='w-[170px] p-4 border-[1px] border-[#B9CBBE] rounded-[8px]'><span>Document 2.pdf</span></div>
          </div>
        </div>
        <div className='flex'>
          <div className='flex space-y-4 flex-col mr-[200px]'>
          <span className=' font-bold text-[18px] '>H.W</span>
          <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</span>
          </div>
          <div className='flex space-y-4 flex-col mr-[200px]'>
          <span className=' font-bold text-[18px]'>Additional Note</span>
          <span>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </div>
</div>


      </div>

      {/* Render Filter Modal */}
      <FilterModal isOpen={isFilterModalOpen} onClose={() => setFilterModalOpen(false)} />
    </div>
  );
}

export default ApprovedLesson;
