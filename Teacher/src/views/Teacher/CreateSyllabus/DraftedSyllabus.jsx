import React, { useState } from 'react';
import LayoutSyllabus from './LayoutSyllabus';
import { FiEdit } from "react-icons/fi";
import { CiTrash, CiCirclePlus } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const dummyData = [
  {
    lesson: 'Lesson 1',
    status: 'In Progress',
    resources: [
      {
        resource: 'TB- Cambridge Checkpoint Science Coursebook 9',
        chapter: 'Chapter 5: Science toolkit 2: Control and regulation',
        topics: ['Forms of Energy', 'Energy Interconversion', 'Energy Conservation'],
      },
      {
        resource: 'TB- Oxford Science 9 Student Book',
        chapter: 'Chapter 2: Energy',
        topics: ['Units of Energy', 'Energy Transfer', 'Heat and Work'],
      },
    ],
  },
  {
    lesson: 'Lesson 2',
    status: 'Rejected',
    resources: [
      {
        resource: 'TB- Cambridge Checkpoint Science Coursebook 9',
        chapter: 'Chapter 5: Science toolkit 2: Control and regulation',
        topics: ['Forms of Energy', 'Defining the System', 'Energy Transfer'],
      },
      {
        resource: 'TB- Oxford Science 9 Student Book',
        chapter: 'Chapter 2: Energy',
        topics: ['Units of Energy', 'Path Independence'],
      },
    ],
  },
  {
    lesson: 'Lesson 3',
    status: 'Rejected',
    resources: [
      {
        resource: 'TB- Cambridge Checkpoint Science Coursebook 9',
        chapter: 'Chapter 5: Control and regulation',
        topics: ['Energy Change', 'Heat and Work'],
      },
      {
        resource: 'TB- Oxford Science 9 Student Book',
        chapter: 'Chapter 2: Energy',
        topics: ['State Functions', 'Energy Pathways'],
      },
    ],
  },
  {
    lesson: 'Lesson 4',
    status: 'In Progress',
    resources: [
      {
        resource: 'TB- Cambridge Checkpoint Science Coursebook 9',
        chapter: 'Chapter 5: Control and regulation',
        topics: ['Energy Change', 'Heat and Work'],
      },
      {
        resource: 'TB- Oxford Science 9 Student Book',
        chapter: 'Chapter 2: Energy',
        topics: ['State Functions', 'Energy Pathways'],
      },
    ],
  },
];

function DraftedSyllabus() {
  const [expandedLessons, setExpandedLessons] = useState({});
  const [lessons, setLessons] = useState(dummyData);

  const toggleLesson = (index) => {
    setExpandedLessons((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handleSubmit = () => {
    // Disable the button on click
    setIsSubmitDisabled(true);

    // You can add your submit logic here, like an API call
    console.log("Syllabus submitted successfully!");
  };

  const resolveLesson = (index) => {
    const updatedLessons = lessons.map((lesson, lessonIndex) => {
      if (lessonIndex === index) {
        return { ...lesson, status: 'In Progress' };
      }
      return lesson;
    });
    setLessons(updatedLessons);
  };

  const renderLessonRows = () =>
    lessons.map((lessonData, index) => {
      const isRejected = lessonData.status === 'Rejected';
      return (
        <React.Fragment key={index}>
        <div className={`py-4 px-4 border-[1px] ${isRejected ? 'border-red-500 border-2 rounded-[8px] mt-3 mb-3' : 'border-gray-200 rounded-[8px] mb-3'}`}>
  <div className="flex flex-col gap-4">
    {/* Main Row */}
    <div className="flex items-start gap-4">
      <div className="w-[120px] font-bold text-left">{lessonData.lesson}</div>
      <div className="flex-1 text-left">{lessonData.resources[0].resource}</div>
      <div className="flex-1 text-left">{lessonData.resources[0].chapter}</div>
      <div className="flex-1 text-left">
        <ul className="list-disc space-y-1">
          {lessonData.resources[0].topics.slice(0, 3).map((topic, topicIndex) => (
            <li key={topicIndex}>{topic}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <Link to='/teacher/dashboard/createsyllabusaddtropic'>
        <FiEdit className="cursor-pointer h-5 w-5 text-[#BB5042] hover:text-red-800" />
        <span className="text-gray-400">|</span>
        </Link>
      
        <CiTrash className="cursor-pointer h-5 w-5 text-[#BB5042] hover:text-red-800" />
      </div>
    </div>

    {/* Expanded Rows */}
    {expandedLessons[index] &&
      lessonData.resources.slice(1).map((resource, resIndex) => (
        <div key={resIndex} className="flex items-start gap-4 bg-gray-100 px-4 py-2 rounded-md">
          <div className="w-[120px]" />
          <div className="flex-1 text-left">{resource.resource}</div>
          <div className="flex-1 text-left">{resource.chapter}</div>
          <div className="flex-1 text-left">
            <ul className="list-disc space-y-1 pl-5">
              {resource.topics.map((topic, topicIndex) => (
                <li key={topicIndex}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

    {/* Actions */}
    <div className="py-3 text-left">
      <button
        className="text-[#98AD9E] font-semibold"
        onClick={() => toggleLesson(index)}
      >
        {expandedLessons[index] ? 'Less...' : 'More...'}
      </button>

      {isRejected && (
        <div className="mt-3 rounded-[8px] bg-red-100 p-5 mb-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => resolveLesson(index)}
              className="cursor-pointer w-5 h-5"
            />
            <span className="text-[18px] text-gray-700">Resolve</span>
          </label>
        </div>
      )}
    </div>
  </div>
</div>

        </React.Fragment>
      );
    });

  return (
    <div className="mb-10">
      <LayoutSyllabus />
      <div className="border-r border-l mr-5 max-w-full">
        <div className="flex mb-5 items-center justify-between px-5">
          <div className="flex items-center text-[20px] font-bold gap-2">
            <span>Class IX</span>
            <span>| Science</span>
            <span>| 2024</span>
            <button className="bg-yellow-500 text-white text-[14px] font-semibold px-4 py-1 rounded-md ml-3">
              In Progress
            </button>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative inline-block">
              <select className="border w-[250px] rounded-[8px] px-6 py-3 outline-none border-[#B6B6B6] hover:border-[#BB5042] bg-white text-gray-700 cursor-pointer appearance-none">
                <option>Select Syllabus</option>
                <option>Class X | Biology | 2024</option>
                <option>Class IX | Science | 2024</option>
                <option>Class VIII | Chemistry | 2024</option>
                <option>Class VII | Physics | 2024</option>
                <option>Class VI | Math | 2024</option>
                <option>Class X | CS | 2024</option>
                <option>Class IX | English | 2024</option>
                <option>Class XI | History | 2024</option>
              </select>
              <IoChevronDownSharp className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042] pointer-events-none" />
            </div>
            <button 
              className={`bg-[#BB5042] w-[200px] hover:bg-red-800 text-white font-semibold px-4 py-3 rounded-md ${isSubmitDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
            >
              Submit Syllabus
            </button>
          </div>
        </div>

        <div className="flex gap-2 items-center mr-5 mt-10 mb-7 justify-end text-end font-medium text-[20px]">
          <span>Add Lesson</span>
          <span><Link to='/teacher/dashboard/createsyllabusaddtropic'><CiCirclePlus className='w-7 h-7 text-[#BB5042]' /></Link></span>
        </div>

        <div className="w-full bg-white p-5 rounded-[8px]">
          <div className="overflow-x-auto rounded-t-[8px]">
            <div className="bg-[#E4EBE6] text-left h-[70px] flex text-[#465049] text-[16px] font-semibold">
              <div className="py-5 px-4 w-[120px] text-left">Lesson</div>
              <div className="py-5 px-4 ml-4 flex-1 text-left">Resources</div>
              <div className="py-5 px-4 ml-8 flex-1 text-left">Chapters</div>
              <div className="py-5 px-5 ml-9   flex-1 text-left">Topics</div>
              <div className="py-5 px-4 ml-4 w-[120px] text-left">Actions</div>
            </div>

            <div>{renderLessonRows()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DraftedSyllabus;
