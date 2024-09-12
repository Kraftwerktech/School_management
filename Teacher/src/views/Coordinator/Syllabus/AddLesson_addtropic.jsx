import React, { useState } from 'react';
import { SlArrowLeftCircle } from "react-icons/sl";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdExpandMore } from 'react-icons/md';
import { CiTrash } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';

function AddLesson_addtropic() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle the modal visibility
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
  const [showAcademicReport, setShowAcademicReport] = useState(true);
  const [showMedicalInfo, setShowMedicalInfo] = useState(true);
  const [selectedLessons, setSelectedLessons] = useState([]);
  const [currentLesson, setCurrentLesson] = useState('');

  const handleSelectChange = (e) => {
    const selectedLesson = e.target.value;
    if (selectedLesson && !selectedLessons.includes(selectedLesson)) {
      setSelectedLessons([...selectedLessons, selectedLesson]);
    }
    setCurrentLesson(''); // Reset the select box after selection
  };

  const removeLesson = (lesson) => {
    setSelectedLessons(selectedLessons.filter(l => l !== lesson));
  };

  return (
    <div className='max-w-full mb-10'>
      {/* Header Section */}
      <div className='flex gap-4 items-center mt-5'>
        <SlArrowLeftCircle className='text-[#BB5042] w-7 h-7' />
        <span className='text-[31px] font-semibold'>Lesson 12</span>
        <span className='text-[#939393] text-[16px]'>Class IX | Section-B</span>
      </div>

      {/* Academic Report Section */}
      <div className='mt-10 mb-6'>

        <div className='mb-8 mr-12 border-[1px] rounded-[8px]'>
          <div className='bg-[#A7BEAE] p-4 rounded-t-[8px] justify-between flex text-[20px] font-bold text-white'>
            <h3 className='text-[25px]'>Topic</h3>
            <div className='mr-5 mt-3 cursor-pointer' onClick={() => setShowAcademicReport(!showAcademicReport)}>
              {showAcademicReport ? (
                <BsChevronUp className="text-white w-5 h-5" />
              ) : (
                <BsChevronDown className="text-white w-5 h-5" />
              )}
            </div>
          </div>
          {showAcademicReport && (
            <div className='bg-transparent p-4'>
              <div className='flex gap-16'>
        <div className='gap-9 flex'>
            <input 
            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[300px]" 
            type="text" 
            name="search" 
            placeholder="Search by Student Name or ID" 
          />
            <div className="relative w-full md:w-[200px]">
            <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
              <option value="">Select Class</option>
              <option>Class IX</option>
              <option>Class X</option>
              <option>Class XI</option>
              <option>Class XII</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
                </div>

                <div className='flex'>
                  <div className='flex gap-4 items-center'>
                    <span>Page Number</span>
                    <input 
            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
            type="text" 
            name="search" 
            placeholder="From" 
          /> 
          <span>to</span>
          <input 
            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
            type="text" 
            name="search" 
            placeholder="To" 
          /> 
                  </div>
                </div>
              </div>

              <div className='mt-10 mb-5 mr-5'>
  <input 
    className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full" 
    type="text" 
    name="search" 
    placeholder="Topic Title" 
  /> 
</div>

<div className='mt-10 max-w-full mr-5'>
  <textarea placeholder='Write Topic' 
    className='px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full h-[200px]'>
  </textarea>
</div>
<div className='flex mt-5 mr-5 justify-end'>
<button className=' bg-[#B6B6B6]  text-[#626262] font-semibold rounded-[8px]  px-5 py-2'>Add Topic</button>
</div>

<div className='mt-5 flex justify-between border-b-[1px] mr-5'>
<span className='text-[20px] font-bold mb-2'>List of Topics</span>
<span><MdExpandMore className='w-6 h-6 mb-2 text-[#151515]'/></span>
</div>
<div className='mt-2'>
<div className='flex justify-between border-b-[1px] items-center mt-5 mr-5'>
 <span className='text-[16px] mb-3 font-bold'>Topic 35</span>
 <span className=' items-center mb-3 flex gap-10'>
<FiEdit className='w-6 mb-3 h-6 text-[#BB5042]'/>
<CiTrash className='w-6 mb-3 h-6 text-[#BB5042]'/>
 </span>
</div>
<div className='mt-3'>
<span className=' text-[16px] text-[#939393] font-semibold'>Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35</span>
</div>
<div className='flex   gap-2'>
    <span className='text-[#465049] space-y-3 font-semibold'>Topic Title:</span>
    <span className='space-y-3'>Lorem ipsum dolor sit amet consectetur.</span>
</div>
<div className='text-[16px] text-[#465049]'>
Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
</div>
</div>
<div className='mt-2'>
<div className='flex justify-between border-b-[1px] items-center mt-5 mr-5'>
 <span className='text-[16px] mb-3 font-bold'>Topic 36</span>
 <span className=' items-center mb-3 flex gap-10'>
<FiEdit className='w-6 mb-3 h-6 text-[#BB5042]'/>
<CiTrash className='w-6 mb-3 h-6 text-[#BB5042]'/>
 </span>
</div>
<div className='mt-3'>
<span className=' text-[16px] text-[#939393] font-semibold'>Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35</span>
</div>
<div className='flex   gap-2'>
    <span className='text-[#465049] space-y-3 font-semibold'>Topic Title:</span>
    <span className='space-y-3'>Lorem ipsum dolor sit amet consectetur.</span>
</div>
<div className='text-[16px] mb-5 text-[#465049]'>
Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
</div>
</div>

            </div>
          )}
        </div>





        {/* Medical Information Section */}
        <div className='mb-8 mr-12 border-[1px] rounded-[8px]'>
          <div className='bg-[#A7BEAE] justify-between flex rounded-t-[8px] p-4 text-[20px] font-bold text-white'>
            <h3 className='text-[25px]'>Activity</h3>
            <div onClick={() => setShowMedicalInfo(!showMedicalInfo)} className='mr-5 mt-3 cursor-pointer'>
              {showMedicalInfo ? (
                <BsChevronUp className="text-white w-5 h-5" />
              ) : (
                <BsChevronDown className="text-white w-5 h-5" />
              )}
            </div>
          </div>
          {showMedicalInfo && (
            <div className='bg-transparent p-4'>
            <div className='flex gap-16'>
          <div className='gap-9 flex'>
          <div className="relative w-full md:w-[200px]">
          <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
            <option value="">Select Activity Type</option>
            <option>Class IX</option>
            <option>Class X</option>
            <option>Class XI</option>
            <option>Class XII</option>
          </select>
          <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
        <input 
          className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
          type="text" 
          name="search" 
          placeholder="Time" 
        />
        <input 
          className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
          type="text" 
          name="search" 
          placeholder="Mark" 
        />
              </div>

            </div>

            <div className='mt-10 gap-14 flex mb-5 mr-5'>
      <div className="relative w-full md:w-[200px]">
        <div className='items-center flex'>
          <select
            className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
            onChange={handleSelectChange}
            value={currentLesson}
          >
            <option value="">Select Lesson</option>
            <option value="Lesson1">Lesson1</option>
            <option value="Lesson2">Lesson2</option>
            <option value="Lesson3">Lesson3</option>
            <option value="Lesson4">Lesson4</option>
            <option value="Lesson5">Lesson5</option>
            <option value="Lesson6">Lesson6</option>
            <option value="Lesson7">Lesson7</option>
          </select>
          <MdExpandMore className="absolute text-[#BB5042] right-3 top-[20%] transform -translate-y-1/2 pointer-events-none" />
        </div>

        <div className='flex mt-5 gap-3'>
          {selectedLessons.map((lesson, index) => (
            <button
              key={index}
              className='py-3 items-center flex gap-2 px-5 w-[120px] bg-[#D7E1DA] text-black rounded-md'
            >
              {lesson}
              <RxCrossCircled
                className='h-6 w-6 cursor-pointer'
                onClick={() => removeLesson(lesson)}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
      <div className='flex gap-3'>
        <span className='text-[16px] font-semibold text-[#465049]'>Select Topic</span>
        <GoPlusCircle
          className='w-6 h-6 text-[#BB5042] cursor-pointer'
          onClick={toggleModal}
        />
      </div>

      {/* Add tropic Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-md  max-w-[936px] max-h-[725px] w-full'>
            <h2 className='text-[24px] text-center font-bold mb-4'>Select Topics</h2>
            <div className='max-w-[888px] mt-7 mb-10 max-h-[576px] p-4 shadow-md'>
             <div className=' flex items-center gap-[100px]'>
                <div className=' flex gap-2 items-center'>
                <input className='w-5 h-5' type='checkbox'/>
                <span className=' font-semibold'>Select All</span>
                </div>
            
             <div className='flex gap-4'>
             <button className=' py-2 px-5 bg-[#D7E1DA]'>Topic 21</button>
             <button className=' py-2 px-5 bg-[#D7E1DA]'>Topic 22</button>
             <button className=' py-2 px-5 bg-[#D7E1DA]'>Topic 23</button>
             <button className=' py-2 px-5 bg-[#D7E1DA]'>Topic 24</button>
             </div>
             <Link to='/teacher/dashboard/addTopic'>
             <div className=' flex justify-end items-center'>
              
              <button className=' justify-end py-2 rounded-[8px] px-5 text-white bg-[#BB5042]'>Add Topic</button>
              </div>
             </Link>
            
            
             </div>
             <div className='flex gap-5 mt-7 items-center'>
             <input 
            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[300px]" 
            type="text" 
            name="search" 
            placeholder="Search by Student Name or ID" 
          />
          <button 
            className="px-7 py-2 bg-[#BB5042] text-white rounded-md w-full md:w-auto"
          >
            Search
          </button>
             </div>
             <div className='mt-5 border-b-[1px]'>
              <span className=' font-semibold text-[#939393] text-[16px]'>Lesson7</span>
              <div className='mt-3 gap-2 flex items-center'>
                <input type='checkbox' className='w-4 h-4'/>
                <span>Topic 21</span>
              </div>
              <div className='mt-3'>
                <span><b>Topic Title:</b> Lorem ipsum dolor sit amet consectetur.</span>
              </div>
              <div className='mb-4'>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
              </div>
             </div>
             <div className='mt-5 border-b-[1px]'>
              <span className=' font-semibold text-[#939393] text-[16px]'>Lesson7</span>
              <div className='mt-3 gap-2 flex items-center'>
                <input type='checkbox' className='w-4 h-4'/>
                <span>Topic 21</span>
              </div>
              <div className='mt-3'>
                <span><b>Topic Title:</b> Lorem ipsum dolor sit amet consectetur.</span>
              </div>
              <div className='mb-4'>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
              </div>
             </div>
            </div>
            <button
              className='mt-4 px-4 py-2 bg-[#BB5042] text-white rounded hover:bg-red-700'
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
      <div className='flex flex-wrap gap-2 mt-4'>
        {selectedLessons.map((lesson, index) => (
          <div key={index} className='flex items-center gap-2 bg-[#f5f5f5] p-2 rounded'>
            <span className='text-gray-700'>{lesson}</span>
            <AiOutlineClose
              className='text-red-500 cursor-pointer'
              onClick={() => removeLesson(lesson)}
            />
          </div>
        ))}
      </div>
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
          </div>
          )}
        </div>
      </div>
   
      <div className=' space-y-6 mb-[70px]'>
        <span className=' text-[16px]  ml-[90px] font-semibold mb-5'>Additional Note</span>
        <div className='mt-10 ml-[90px] mr-[90px] max-w-full'>
<textarea placeholder='Write Activity' 
  className='px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full h-[200px]'>
</textarea>
</div>           
      </div>
      <div className='mt-5 pl-[450px] mb-20'><button className='py-3 rounded-[8px] px-8 bg-[#BB5042] w-[400px] justify-center items-center text-white'>Save</button></div>
    </div>
  );
}

export default AddLesson_addtropic;
