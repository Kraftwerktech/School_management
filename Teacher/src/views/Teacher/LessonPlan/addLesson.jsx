import React, { useState } from 'react';
import { SlArrowLeftCircle } from "react-icons/sl";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdExpandMore } from 'react-icons/md';
import { CiTrash } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";

import { GrAttachment } from "react-icons/gr";
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { IoCalendarClearOutline } from 'react-icons/io5';



function TopicSelectModal({ setSelectTropic }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white p-6 rounded-md max-w-[936px] max-h-[725px] w-full relative'>
        {/* Close button with icon */}
        <button
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
          onClick={() => setSelectTropic(false)} // Close the modal on click
        >
          <RxCrossCircled size={24} />
        </button>

        <h2 className='text-[24px] text-center font-bold mb-4'>Select Topics</h2>

        <div className='max-w-[888px] mt-7 mb-10 max-h-[576px] p-4 shadow-md'>
          <div className='flex items-center gap-[100px]'>
            <div className='flex gap-2 items-center'>
              <input className='w-5 h-5' type='checkbox' />
              <span className='font-semibold'>Select All</span>
            </div>

            <div className='flex gap-4'>
              <button className='py-2 px-5 bg-[#D7E1DA]'>Topic 21</button>
              <button className='py-2 px-5 bg-[#D7E1DA]'>Topic 22</button>
              <button className='py-2 px-5 bg-[#D7E1DA]'>Topic 23</button>
              <button className='py-2 px-5 bg-[#D7E1DA]'>Topic 24</button>
            </div>

            <div className='flex justify-end items-center'>
              <button className='justify-end py-2 rounded-[8px] px-5 text-white bg-[#BB5042]'>
                Add Topic
              </button>
            </div>
          </div>

          <div className='flex gap-5 mt-7 items-center'>
            <input
              className='px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[300px]'
              type='text'
              name='search'
              placeholder='Search by Student Name or ID'
            />
            <button className='px-7 py-2 bg-[#BB5042] text-white rounded-md w-full md:w-auto'>
              Search
            </button>
          </div>

          {/* Topic and lesson content */}
          <div className='mt-5 border-b-[1px]'>
            <span className='font-semibold text-[#939393] text-[16px]'>Lesson 7</span>
            <div className='mt-3 gap-2 flex items-center'>
              <input type='checkbox' className='w-4 h-4' />
              <span>Topic 21</span>
            </div>
            <div className='mt-3'>
              <span>
                <b>Topic Title:</b> Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
            <div className='mb-4'>
              <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div className='mt-5 border-b-[1px]'>
            <span className='font-semibold text-[#939393] text-[16px]'>Lesson 7</span>
            <div className='mt-3 gap-2 flex items-center'>
              <input type='checkbox' className='w-4 h-4' />
              <span>Topic 21</span>
            </div>
            <div className='mt-3'>
              <span>
                <b>Topic Title:</b> Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
            <div className='mb-4'>
              <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







function AddLesson() {
  const [tooltip, setTooltip] = useState('');

  const handleMouseEnter = (activity) => {
    setTooltip(activity);
  };

  const handleMouseLeave = () => {
    setTooltip('');
  };

  const [selectedDate,setSelectedDate]=useState(null);
  const [showAcademicReport, setShowAcademicReport] = useState(true);
  const [showMedicalInfo, setShowMedicalInfo] = useState(true);
  const [selectTropic, setSelectTropic]=useState();

  return (
    <div className='max-w-full mb-10'>
      {/* Header Section */}
      <div className=' flex justify-between items-center mr-[48px]'>
      <div className='flex gap-4 items-center mt-5'>
        <SlArrowLeftCircle className='text-[#BB5042] w-7 h-7' />
        <div className="relative flex items-center">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="border border-[#B6B6B6] w-[150px] focus:border-[#BB5042] rounded-md px-5 py-3"
                placeholderText="Date"
              />
              <IoCalendarClearOutline className="absolute right-3 top-1/2 h-5 w-5 transform -translate-y-1/2 text-[#BB5042]" />
            </div>
        
      </div>
      <div>
      <span className='text-[#939393] text-[20px]'>Lesson 1 & 2 | Class X | Section-A | Science</span>
      </div>
      </div>
     

      {/* Academic Report Section */}
      <div className='mt-10  mb-6'>

        <div className='mb-8 mr-12 border-[1px]  rounded-[8px]'>
          <div className='bg-[#A7BEAE] p-4 rounded-t-[8px] justify-between flex text-[20px] font-bold text-white'>
            <h3 className='text-[25px] ml-2'>Topic</h3>
            <div className='mr-5 mt-3 cursor-pointer' onClick={() => setShowAcademicReport(!showAcademicReport)}>
              {showAcademicReport ? (
                <BsChevronUp className="text-white w-5 h-5" />
              ) : (
                <BsChevronDown className="text-white w-5 h-5" />
              )}
            </div>
          </div>
          {showAcademicReport && (

          //List of Tropic

<div className='bg-transparent ml-[22px] p-4'>
<div className='mt-5 flex justify-between mr-5'>
<span className='text-[20px] font-bold mb-2'>List of Topics</span>
</div>

{/**First Lesson Integreate here */}
<div className='mt-2'>
  <div className='mb-2'>
    <span className=' text-[#939393] text-[16px] font-semibold'>Lesson 1</span>
  </div>

  <div>
  <div className='flex justify-between border-b-[1px] items-center mt-7 mr-5'>
 <span className='text-[16px] mb-3 font-bold'>Topic 35</span>
</div>
<div className='mt-3 mb-2'>
<span className=' text-[16px] text-[#939393] font-semibold'>Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35</span>
</div>
<div className='flex mb-2 gap-2'>
    <span className='text-[#465049] space-y-3 font-semibold'>Topic Title:</span>
    <span className='space-y-3'>Lorem ipsum dolor sit amet consectetur.</span>
</div>
<div className='text-[16px] mr-10 text-[#465049]'>
Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
</div>
  </div>
  <div>
  <div className='flex justify-between border-b-[1px] items-center mt-7 mr-5'>
 <span className='text-[16px] mb-3 font-bold'>Topic 37</span>

</div>
<div className='mt-3 mb-2'>
<span className=' text-[16px] text-[#939393] font-semibold'>Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35</span>
</div>
<div className='flex mb-2 gap-2'>
    <span className='text-[#465049] space-y-3 font-semibold'>Topic Title:</span>
    <span className='space-y-3'>Lorem ipsum dolor sit amet consectetur.</span>
</div>
<div className='text-[16px] mr-10 text-[#465049]'>
Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
</div>
  </div>

</div>

{/**Secon Lesson Integreate here */}

<div className='mt-7'>

<div>
    <span className=' text-[#939393] font-semibold text-[16px]'>Lesson 2</span>
  </div>
<div className='flex justify-between border-b-[1px] items-center mt-7 mr-5'>
 <span className='text-[16px] mb-3 font-bold'>Topic 39</span>


</div>
<div className='mt-3 mb-2'>
<span className=' text-[16px] text-[#939393] font-semibold'>Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35</span>
</div>
<div className='flex mb-2 gap-2'>
    <span className='text-[#465049] space-y-3 font-semibold'>Topic Title:</span>
    <span className='space-y-3'>Lorem ipsum dolor sit amet consectetur.</span>
</div>
<div className='text-[16px] mb-5 mr-10 text-[#465049]'>
Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
</div>
</div>

</div>
)}
</div>




  {/* Medical Information Section */}
  <div className='mb-8 mr-12 border-[1px] rounded-[8px]'>
          <div className='bg-[#A7BEAE] justify-between flex rounded-t-[8px] p-4 text-[20px] font-bold text-white'>
            <h3 className='text-[25px] ml-2'>Activity</h3>
            <div onClick={() => setShowMedicalInfo(!showMedicalInfo)} className='mr-5 mt-3 cursor-pointer'>
              {showMedicalInfo ? (
                <BsChevronUp className="text-white w-5 h-5" />
              ) : (
                <BsChevronDown className="text-white w-5 h-5" />
              )}
            </div>
          </div>

          <div className='ml-[22px]'>
          {showMedicalInfo && (
            <div className='bg-transparent p-4'>
            <div className='flex gap-16'>
          <div className='gap-9 flex'>
          <div className="relative w-full mt-5 md:w-[200px]">
          <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
            <option value="">Select Activity Type</option>
            <option>Home Work</option>
            <option>Assingment</option>
            <option>Class Test</option>
            <option>Monthly Test</option>
          </select>
          <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <input 
          className="px-5 py-2 placeholder:text-[13px] mt-5 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
          type="text" 
          name="search" 
          placeholder="Time" 
        />
        <input 
          className="px-5 py-2 placeholder:text-[13px] mt-5 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
          type="text" 
          name="search" 
          placeholder="Mark" 
        />
              </div>

            </div>

            <div className='mt-10 gap-14 flex items-center mb-5 mr-5'>
            <div className="relative w-full md:w-[200px]">
          <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
            <option value="">Select Lesson</option>
            <option>Lesson 1</option>
            <option>Lesson 2</option>
            <option>Lesson 3</option>
            <option>Lesson 4</option>
          </select>
          <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <div>
      <div className='flex gap-3 items-center'>
        <span className='text-[16px] font-semibold text-[#465049]'>Select Topic</span>
        <GoPlusCircle 
          className='w-6 h-6 text-[#BB5042] cursor-pointer' 
          onClick={setSelectTropic}
        />
      </div>
      {selectTropic && <TopicSelectModal setSelectTropic={setSelectTropic} />}
    </div>
</div>

{/* Select Lesson for Tropic */}
<div className=' flex items-center gap-4'>
    <button className=' px-3 py-2 w-[100px] bg-[#D7E1DA] rounded-[8px]'> Lesson 1</button>
    <button className=' px-3 py-2 w-[100px] bg-[#D7E1DA] rounded-[8px]'> Lesson 2</button>
    </div>

<div className='mt-10 max-w-full mr-5'>
<textarea placeholder='Write Activity' 
  className='px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full h-[200px]'>
</textarea>
</div>
<div className='flex mt-5 mr-5 justify-between mb-10'>
    <span className=' flex items-center text-[16px] text-[#465049]  gap-3'>Add Attachment <GrAttachment className='w-6 h-6 text-[#BB5042]'/></span>
<button className=' bg-[#B6B6B6] font-bold text-[#626262] rounded-[8px]  px-5 py-2'>Add Topic</button>
</div>



<div className='mt-5'>
  {/* Header */}
  <div className='flex justify-between border-b-[1px] mr-5'>
    <div className='flex gap-5'>
      <span className='text-[20px] items-center text-[#465049] font-bold mb-4'>
        List of Activity
      </span>
      {/* Progress Bar */}
      <div className='mt-2 relative'>
        <div className='flex h-4 w-[300px] bg-gray-200 overflow-hidden relative'>
          {/* First part: 10 min Board Work */}
          <div
            className='w-1/6 bg-[#B9CBBE] hover:opacity-75 cursor-pointer relative'
            onMouseEnter={() => handleMouseEnter('Board Work 10 min')}
            onMouseLeave={handleMouseLeave}
          ></div>
     
          {/* Second part: 40 min Homework */}
          <div
            className='w-2/5 bg-[#7F8073] hover:opacity-75 cursor-pointer relative'
            onMouseEnter={() => handleMouseEnter('Homework 40 min')}
            onMouseLeave={handleMouseLeave}
          ></div>

          {/* Third part: 20 min Class Text */}
          <div
            className='w-1/3 bg-[#BB5042] hover:opacity-75 cursor-pointer relative'
            onMouseEnter={() => handleMouseEnter('Class Text 20 min')}
            onMouseLeave={handleMouseLeave}
          ></div>

          {/* Fourth part: 10 min Board Work */}
          <div
            className='w-1/6 bg-[#D18A80] hover:opacity-75 cursor-pointer relative'
            onMouseEnter={() => handleMouseEnter('Board Work 10 min')}
            onMouseLeave={handleMouseLeave}
          ></div>
         
        </div>
      <div className=' flex mt-2 items-center justify-between'>
        <span className=' text-[#B6B6B6] text-[15px]'>0 min</span>
        <span className=' text-[#B6B6B6] text-[15px]'>40 min</span>
      </div>
        {/* Tooltip */}
        {tooltip && (
  <div className="absolute top-[-60px] w-[200px] font-bold text-center h-[50px] justify-center left-[50%] transform -translate-x-1/2 bg-[#BB5042] text-white text-sm px-4 py-2 rounded-md shadow-lg z-10">
    {/* Arrow pointing up */}
    <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-[#BB5042]"></div>
    
    {/* Tooltip content */}
    <div className="relative">
      {tooltip}
    </div>
  </div>
)}

      </div>
    </div>

    <span>
      <MdExpandMore className='w-6 h-6 mb-2 text-[#151515]' />
    </span>
  </div>
</div>

<div className='mt-3 mb-8'>
<div className='flex justify-between border-b-[1px] items-center mt-7 mr-5'>
  <div className='gap-3 flex'>
  <input type='checkbox' className='w-[18px] text-[#BB5042] h-[18px] checked:border-[#BB5042]'/>
  <h3 className='text-[16px] mb-3 font-bold'>Activity 45</h3>
</div>

<span className=' items-center mb-3 flex gap-10'>
<FiEdit className='w-6 mb-3 h-6 text-[#BB5042]'/>
<CiTrash className='w-6 mb-3 h-6 text-[#BB5042]'/>
</span>
</div>
<div className='mt-4'>
<span className=' text-[16px] font-bold'>Board Work | 10 min</span> <br/>
<div className='mt-3 mb-3'>
<span className=' text-[16px] text-[#939393] font-semibold'>Lesson 2</span>
</div>
</div>
<div className='flex mb-3 gap-2'>
  <span className='text-[#939393] space-y-3 font-semibold'>Topic 22 | Topic Title:</span>
  <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
</div>
<div className=' mr-10 space-y-4'>
    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
</div>
</div>


<div className='mt-3'>
<div className='flex justify-between border-b-[1px] items-center mt-7 mr-5'>
  <div className='gap-3 flex'>
  <input type='checkbox' className='w-[18px] text-[#BB5042] h-[18px] checked:border-[#BB5042]'/>
  <h3 className='text-[16px] mb-3 font-bold'>Activity 46</h3>
</div>

<span className=' items-center mb-3 flex gap-10'>
<FiEdit className='w-6 mb-3 h-6 text-[#BB5042]'/>
<CiTrash className='w-6 mb-3 h-6 text-[#BB5042]'/>
</span>
</div>
<div className='mt-4 mb-4'>
<span className=' text-[16px] font-semibold'>Class Test | 30 Marks | 10 min</span>  <br/>
<div className='mt-3 mb-3'>
<span className=' text-[16px] text-[#939393] font-semibold'>Lesson 1</span>
</div>

</div>
<div className='flex mb-3  gap-2'>
  <span className='text-[#939393] space-y-3 font-semibold'>Topic 22 | Topic Title:</span>
  <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
</div>
<div className='flex mb-3  gap-2'>
  <span className='text-[#939393] space-y-3 font-semibold'>Topic 23 | Topic Title:</span>
  <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
</div>
<div className='flex mb-3 gap-2'>
  <span className='text-[#939393] space-y-3 font-semibold'>Topic 24 | Topic Title:</span>
  <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
</div>
<div className=' mr-10 space-y-4'>
    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
</div>

{/* Attace Files */}
<div className=' flex gap-6 mt-6 mb-7 items-center'>
  <span className=' text-[15px] font-semibold text-[#939393]'>Attached Files</span>
  <button className='p-3 py-2 border-[1px] border-[#B9CBBE] rounded-[8px]'>Document.pdf</button>
  <button className='p-3 py-2 border-[1px] border-[#B9CBBE] rounded-[8px]'>Document.pdf</button>
</div>
</div>
          </div>


          )}
          </div>
        
        </div>
      </div>
      <div className='space-y-6 mb-10'>
  <span className='text-[16px] ml-[50px] font-semibold mb-5'>Additional Note</span>
  
  <div className=' border-slate-300 rounded-[8px] ml-[50px] mr-[98px]'>
    <textarea
      placeholder='Write Note'
      className='w-full h-32 p-4 border-[1px] border-slate-300 rounded-md focus:outline-none focus:ring-[1px] focus:ring-[#BB5042] transition duration-300 resize-none'
    />
  </div>
</div>

     
      <div className='mt-5 pl-[450px] mb-20'><button className='py-3 rounded-[8px] px-8 bg-[#BB5042] w-[400px] justify-center items-center text-white'>Save</button></div>
    </div>
  );
}

export default AddLesson;
