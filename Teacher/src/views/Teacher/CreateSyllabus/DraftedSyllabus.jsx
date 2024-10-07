import React, { useState } from 'react';
import LayoutSyllabus from './LayoutSyllabus';
import { FiEdit } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';


// Dummy Data for Syllabus with rejection status
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
    status: 'Rejected', // Rejected lesson example
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
  {
    lesson: 'Lesson 4',
    status: 'Rejected',
    resources: [
      {
        resource: 'TB- Cambridge Checkpoint Science Coursebook 9',
        chapter: 'Chapter 5: Control and regulation',
        topics: ['Forms of Energy', 'Energy Conservation'],
      },
      {
        resource: 'TB- Oxford Science 9 Student Book',
        chapter: 'Chapter 2: Energy',
        topics: ['Heat Transfer', 'Thermodynamics'],
      },
    ],
  },
  {
    lesson: 'Lesson 5',
    status: 'In Progress',
    resources: [
      {
        resource: 'TB- Cambridge Checkpoint Science Coursebook 9',
        chapter: 'Chapter 5: Science toolkit 2: Control and regulation',
        topics: ['Energy Conversion', 'Conservation'],
      },
      {
        resource: 'TB- Oxford Science 9 Student Book',
        chapter: 'Chapter 2: Energy',
        topics: ['Units of Energy', 'System Path'],
      },
    ],
  },
];

function DraftedSyllabus() {
  const [expandedLessons, setExpandedLessons] = useState({});
  const [rejectedLessons, setRejectedLessons] = useState(dummyData);

  // Toggle Lesson to expand/collapse chapters
  const toggleLesson = (index) => {
    setExpandedLessons((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Handle resolving a rejected lesson
  const resolveLesson = (index) => {
    const updatedLessons = rejectedLessons.map((lesson, lessonIndex) => {
      if (lessonIndex === index) {
        return { ...lesson, status: 'In Progress' }; // Resolves the rejected status
      }
      return lesson;
    });
    setRejectedLessons(updatedLessons);
  };

  // Render Table Rows for each lesson
  const renderLessonRows = () =>
    rejectedLessons.map((lessonData, index) => {
      const isRejected = lessonData.status === 'Rejected';

      return (

        <React.Fragment key={index}>

          <tr></tr>
          <tr
            className={`${isRejected
                ? 'border-[1.5px] border-red-500' // Apply red borders for rejected lessons
                : ''
              }`}
          >
            <td className="py-4 px-4 w-[120px] font-bold">{lessonData.lesson}</td>
            <td className="py-2 px-4">{lessonData.resources[0].resource}</td>
            <td className="py-2 px-4">{lessonData.resources[0].chapter}</td>
            <td className="py-2 px-4">
              <ul className="list-disc space-y-2 pl-4">
                {lessonData.resources[0].topics.slice(0, 3).map((topic, topicIndex) => (
                  <li key={topicIndex}>{topic}</li>
                ))}
              </ul>
            </td>
            <td className="py-2 px-4 items-center flex gap-[9px]">
              <FiEdit className="cursor-pointer h-6 w-6 text-[#BB5042] hover:text-red-800" />
              <span className="text-[22px] text-[#B6B6B6]">|</span>
              <CiTrash className="cursor-pointer h-6 w-6 text-[#BB5042] hover:text-red-800" />
            </td>
          </tr>

          {/* Expanded Resources */}
          {expandedLessons[index] &&
            lessonData.resources.slice(1).map((resource, resIndex) => (
              <tr key={resIndex} className="bg-gray-100">
                <td className="py-4 px-8" />
                <td className="py-2 px-4">{resource.resource}</td>
                <td className="py-2 px-4">{resource.chapter}</td>
                <td className="py-2 px-4">
                  <ul className="list-disc space-y-2 pl-4">
                    {resource.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 px-8"></td>
              </tr>
            ))}

          {/* Toggle More/Less Button */}
          <tr>
            <td colSpan={5} className="py-3 px-4 text-left border-b-[1px]">
              <button
                className="text-[#98AD9E] font-semibold"
                onClick={() => toggleLesson(index)}
              >
                {expandedLessons[index] ? 'Less...' : 'More...'}
              </button>
            </td>
          </tr>

          {/* Rejected Lesson Resolve Section */}
          {isRejected && (
            <tr className="bg-[#F8EEEC] rounded-[8px]">
              <td colSpan={5} className="py-3 px-4 text-red-700   border-red-500">
                <div className="flex gap-3 items-center">
                  <input onClick={() => resolveLesson(index)}  type='checkbox' className='w-5 h-5'/>
                  <span>Resolve</span>
                
                  
                </div>
              </td>
            </tr>
          )}
        </React.Fragment>
      );
    });

  return (
    <div className="mb-10">
      <LayoutSyllabus />
      <div className="border-r-[1px]   border-l-[1px]  mr-5 max-w-full">
        <div className="flex mb-5 items-center justify-between  px-5">
          {/* Class Information */}
          <div className="flex items-center text-[20px] font-bold gap-2">
            <span>Class IX</span>
            <span>| Science</span>
            <span>| 2024</span>
            <button className="bg-yellow-500 text-white text-[14px] font-semibold px-4 py-1 rounded-md ml-3">
              In Progress
            </button>
          </div>

          {/* Select & Submit */}
          <div className="flex items-center mt-5 gap-8">
            <div className="relative inline-block">
              <select className="border-[1px] w-[250px] rounded-[8px] px-6 py-3 outline-none border-[#B6B6B6] hover:border-[#BB5042] bg-white text-gray-700 cursor-pointer appearance-none">
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
            <IoChevronDownSharp className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042] pointer-events-none"/>
            </div>
            <button className="bg-[#BB5042] w-[200px] hover:bg-red-800 text-white font-semibold px-4 py-3 rounded-md">
              Submit Syllabus
            </button>
          </div>
        </div>
        <div className=' flex gap-2 items-center mr-5 mt-10 mb-7  justify-end text-end font-medium text-[20px]'>
          
          <span>Add Lesson</span>
          <span><Link to='/teacher/dashboard/createsyllabusaddtropic'><CiCirclePlus className=' w-7 h-7 text-[#BB5042]'/></Link></span>
         </div>

        {/* Table Section */}

        <div className="w-full bg-white p-5 rounded-[8px]">
          <div className="overflow-x-auto rounded-t-[8px]">
            <table className="min-w-full table-auto">
              <thead className="bg-[#E4EBE6] text-left h-[70px]">
                <tr className="text-[#465049] text-[16px]">
                  <th className="py-2 px-4">Lesson</th>
                  <th className="py-2 px-4">Resources</th>
                  <th className="py-2 px-4">Chapters</th>
                  <th className="py-2 px-4">Topics</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>{renderLessonRows()}</tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DraftedSyllabus;
