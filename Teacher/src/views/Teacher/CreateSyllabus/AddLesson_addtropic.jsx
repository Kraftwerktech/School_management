import React, { useState } from 'react';
import { SlArrowLeftCircle } from "react-icons/sl";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { CiTrash } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { FaRegHandPointRight } from "react-icons/fa";

function AddLesson_addtropic() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // // Define state to manage the collapse/expand of each topic
    const [isTopicOpen, setIsTopicOpen] = useState({});

// Function to toggle the open/close state of a topic
const toggleTopic = (index) => {
  setIsTopicOpen((prevState) => ({
    ...prevState,
    [index]: !prevState[index],
  }));
};

 // Sample data to show a list of topics (future: replace this with API data)
 const topics = [
  {
    id: 35,
    title: 'Topic 35: Lorem ipsum dolor sit amet consectetur.',
    bookDetails: 'Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35',
    topicTitle: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 36,
    title: 'Topic 36: Lorem ipsum dolor sit amet consectetur.',
    bookDetails: 'Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35',
    topicTitle: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 37,
    title: 'Topic 37: Lorem ipsum dolor sit amet consectetur.',
    bookDetails: 'Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35',
    topicTitle: 'Lorem ipsum dolor sit amet consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
  },
];




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
        <Link to='/coordinator/dasboard/CoDraftsyllabus'>
        <SlArrowLeftCircle className='text-[#BB5042] w-7 h-7' />
        </Link>
       
        <span className='text-[31px] font-semibold'>Lesson 12</span>
        <span className='text-[#939393] text-[18px]'>Class IX | Section-B</span>
      </div>

    
      <div className='mt-5 mb-5'>
  {/* Add Tropic Section Section */}
        <div className='mb-8 mr-12 border-[1px] rounded-[8px]'>
          <div className='bg-[#A7BEAE] p-4 rounded-t-[8px] justify-between flex text-[20px] font-bold text-white'>
            <h3 className='text-[25px] ml-4'>Topic</h3>
            <div className='mr-5 mt-3 cursor-pointer' onClick={() => setShowAcademicReport(!showAcademicReport)}>
              {showAcademicReport ? (
                <BsChevronUp className="text-white w-5 h-5" />
              ) : (
                <BsChevronDown className="text-white w-5 h-5" />
              )}
            </div>
          </div>
          {showAcademicReport && (
            <div className='bg-transparent ml-9 mt-7 mb-7 mr-5'>
              <div className='flex gap-16'>
        <div className='gap-9 flex'>
            
            <div className="relative w-full md:w-[250px]">
            <select className="appearance-none px-4 py-[10px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
              <option value="">Select Resource</option>
              <option>Class IX</option>
              <option>Class X</option>
              <option>Class XI</option>
              <option>Class XII</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <input 
            className="px-5 py-[10px] placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[300px]" 
            type="text" 
            name="search" 
            placeholder="Write Chapter Name" 
          />
                </div>

                <div className='flex'>
                  <div className='flex gap-4 items-center'>
                    <span>Page Number</span>
                    <input 
            className="px-5 py-[10px] placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
            type="text" 
            name="search" 
            placeholder="From" 
          /> 
          <span>to</span>
          <input 
            className="px-5 py-[10px] placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
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
<button className=' bg-[#BB5042]  text-[#FFFF] font-semibold rounded-[8px]  px-5 py-2'>Add Topic</button>
</div>

<div>
      <div className='mt-5 flex justify-between border-b-[1px] mr-5'>
        <span className='text-[20px] font-bold mb-2'>List of Topics</span>
      </div>

      {topics.map((topic, index) => (
        <div key={topic.id} className='mt-4 mb-4'>
          {/* Topic Header with collapse/expand toggle */}
          <div className='flex justify-between border-b-[1px] items-center mt-5 mr-5'>
            <span className='text-[16px] mb-3 font-bold'>{topic.title}</span>
            <span className='flex items-center mb-3 gap-10'>
              <FiEdit className='w-6 h-6 text-[#BB5042]' />
              <CiTrash className='w-6 h-6 text-[#BB5042]' />
              {/* Collapse/Expand toggle */}
              <span onClick={() => toggleTopic(index)} className="cursor-pointer">
                {isTopicOpen[index] ? (
                  <MdExpandLess className='w-6 h-6 text-[#151515]' />
                ) : (
                  <MdExpandMore className='w-6 h-6 text-[#151515]' />
                )}
              </span>
            </span>
          </div>

          {/* Conditional rendering of topic content based on toggle */}
          {isTopicOpen[index] && (
            <div className='mt-4'>
              <span className='text-[16px] flex items-center gap-3 text-[#939393] font-semibold'>
                <FaRegHandPointRight className=' w-5 h-5'/>
                {topic.bookDetails}
              </span>
              
              <div className='pb-7 border-b-[1px]'>
                <div className='text-[16px] mt-2 ml-8 mr-[70px] text-[#465049]'>
                  {topic.description}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>


            </div>
          )}
        </div>

        {/* Add Activity Section */}
        <div className='mb-8 mr-12 border-[1px] rounded-[8px]'>
          <div className='bg-[#A7BEAE] justify-between flex rounded-t-[8px] p-4 text-[20px] font-bold text-white'>
            <h3 className='text-[25px] ml-4'>Activity</h3>
            <div onClick={() => setShowMedicalInfo(!showMedicalInfo)} className='mr-5 mt-3 cursor-pointer'>
              {showMedicalInfo ? (
                <BsChevronUp className="text-white w-5 h-5" />
              ) : (
                <BsChevronDown className="text-white w-5 h-5" />
              )}
            </div>
          </div>
          {showMedicalInfo && (
            <div className='bg-transparent ml-8 mt-7 mb-5 mr-5'>
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
          className="px-5 py-2 placeholder:text-[13px] items-center outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
          type="text" 
          name="search" 
          placeholder="Time" 
        />
        <input 
          className="px-5 py-2 placeholder:text-[13px] items-center outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]" 
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
            className="appearance-none px-4 items-center py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
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
          <MdExpandMore className="absolute text-[#BB5042] right-3 top-[35%] transform -translate-y-1/2 pointer-events-none" />
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
          <div className='bg-white p-6 rounded-[8px]  max-w-[936px] max-h-[725px] w-full'>
            <div className='top-3 right-3 flex justify-end'>
              
               <RxCrossCircled  onClick={toggleModal}
             className=' w-6 h-6 text-[#B6B6B6] hover:text-[#918b8b]'/></div>
           
            <h2 className='text-[24px] text-center font-bold mb-4'>Select Topics</h2>
            <div className='max-w-[888px] mt-7 mb-10 max-h-[576px] p-4'>
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
             <Link to='/coordinator/dasboard/CAddlessonsyllabus'>
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

{/* Add Tropic From Select Tropic Model */}

    <div className='border-[1px] p-3 mr-5 rounded-[8px]'>
<div className='mt-5  max-h-[350px] mr-5'>
  <div className='flex justify-between mr-5 items-center'>
    <div>
    <span className=' ml-4 mt-5 mr-4 mb-3 text-[18px] text-[#939393] font-semibold'>Topic 22</span>
 <p className='ml-4 mt-2 mr-4 mb-3 text-[18px]'>
 <span className='font-semibold'>Topic Title:</span> Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent.
 </p>
    </div>
  <CiTrash className=' w-6 h-6 text-[#BB5042]'/>
  </div>

</div>
<div className='mt-5  max-h-[350px] mr-5'>
  <div className='flex justify-between mr-5 items-center'>
    <div>
    <span className=' ml-4 mt-5 mr-4 mb-3 text-[18px] text-[#939393] font-semibold'>Topic 23</span>
 <p className='ml-4 mt-2 mr-4 mb-3 text-[18px]'>
 <span className='font-semibold'>Topic Title:</span> Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent.
 </p>
    </div>
  <CiTrash className=' w-6 h-6 text-[#BB5042]'/>
  </div>

</div>
<div className='mt-5  max-h-[350px] mr-5'>
  <div className='flex justify-between mr-5 items-center'>
    <div>
    <span className=' ml-4 mt-5 mr-4 mb-3 text-[18px] text-[#939393] font-semibold'>Topic 25</span>
 <p className='ml-4 mt-2 mr-4 mb-3 text-[18px]'>
 <span className='font-semibold'>Topic Title:</span> Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent.
 </p>
    </div>
  <CiTrash className=' w-6 h-6 text-[#BB5042]'/>
  </div>

</div>

</div>

{/* Write Activity Text */}
<div className='mt-10 max-w-full mr-5'>
<textarea placeholder='Write Activity' 
  className='px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full h-[200px]'>
</textarea>
</div>

<div className='flex mt-5 mr-5 justify-between mb-10'>
    <span className=' flex items-center text-[16px] text-[#465049]  gap-3'>Add Attachment <GrAttachment className='w-6 h-6 text-[#BB5042]'/></span>
<button className=' bg-[#BB5042] font-bold text-[#FFFF] rounded-[8px]  px-5 py-2'>Add Topic</button>
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
      <div className='mt-5 pl-[450px] mb-20'>
      <Link to='/teacher/dashboard/createsyllabusDraft'>
      <button className='py-3 rounded-[8px] px-8 bg-[#BB5042] w-[400px] justify-center items-center text-white'>Save</button>
      </Link>
      </div>
    </div>
  );
}

export default AddLesson_addtropic;
