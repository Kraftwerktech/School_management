import React, { useState } from 'react';
import LayoutSyllabus from './LayoutSyllabus';
import { IoIosArrowDown } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const dummyData = [
  {
    lesson: 'Lesson 1',
    resources: [
      {
        resource: 'TB- Cambridge Checkpoint Science Coursebook 9',
        chapter: 'Chapter 5: Science toolkit 2: Control and regulation',
        topics: [
          'Forms of Energy and Their Interconversion',
          'Defining the System and its Surroundings',
          'The Law of Energy Conservation',
          'Units of Energy',
        ],
      },
      {
        resource: 'TB- Oxford Science 9 Student Book',
        chapter: 'Chapter 2: Energy',
        topics: [
          'Units of Energy',
          'State Functions and the Path Independence of the Energy Change',
        ],
      },
    ],
  },
  {
    lesson: 'Lesson 2',
    resources: [
      {
        resource: 'TB- Cambridge Checkpoint Science Coursebook 9',
        chapter: 'Chapter 5: Science toolkit 2: Control and regulation',
        topics: [
          'Forms of Energy and Their Interconversion',
          'Energy Change: Energy Transfer to or from a System',
          'Heat and Work: Two Forms of Energy Transfer',
          'The Law of Energy Conservation',
        ],
      },
      {
        resource: 'TB- Oxford Science 9 Student Book',
        chapter: 'Chapter 2: Energy',
        topics: [
          'Units of Energy',
          'State Functions and the Path Independence of the Energy Change',
        ],
      },
    ],
  },
  {
    lesson: 'Lesson 3',
    resources: [
      {
        resource: 'TB- Cambridge Checkpoint Science Coursebook 9',
        chapter: 'Chapter 5: Science toolkit 2: Control and regulation',
        topics: [
          'Forms of Energy and Their Interconversion',
          'Defining the System and its Surroundings',
          'The Law of Energy Conservation',
          'Units of Energy',
        ],
      },
    ],
  },
];

function DraftedSyllabus() {
  const [expandedLessons, setExpandedLessons] = useState({});

  // Toggle Lesson to expand/collapse resources
  const toggleLesson = (index) => {
    setExpandedLessons((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Render Table Rows for each lesson
  const renderLessonRows = () =>
    dummyData.map((lessonData, index) => (
      <React.Fragment key={index}>
        <tr className="">
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
          <td className="py-2 px-4 mt-8 items-center flex gap-[9px]">
            <FiEdit className="cursor-pointer h-6 w-6 text-[#BB5042] hover:text-red-800" />
            <span className=' text-[22px] text-[#B6B6B6]'>|</span>
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
      </React.Fragment>
    ));

  return (
    <div className="mb-10">
      <LayoutSyllabus />
      <div className="border-r border-l mr-5 max-w-full">
        <div className="flex items-center justify-between mt-8 px-5">
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
          <div className="flex items-center gap-8">
            <div className="relative inline-block">
              <select className="border flex items-center w-[277px] rounded-[8px] px-6 py-3 outline-none border-gray-300 hover:border-[#BB5042] bg-white text-gray-700">
                <option>Class X | Biology | 2024</option>
                <option>Class IX | Science | 2024</option>
                <option>Class VIII | Chemistry | 2024</option>
                {/* Add more options here */}
              </select>
              <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>

            <button className="border rounded-[8px] text-white font-semibold bg-[#BB5042] px-6 py-2">
              Submit Syllabus
            </button>
          </div>
        </div>

        {/* Search & Add Lesson */}
        <div className="flex justify-between items-center mt-10 px-5">
          <div className="flex items-center border rounded-md w-[350px] md:max-w-[400px] border-slate-300">
            <CiSearch className="ml-3 w-5 h-5 text-[#BB5042]" />
            <input
              className="flex-1 px-4 py-2 placeholder:text-[13px] outline-none bg-transparent text-gray-700"
              type="text"
              name="search"
              placeholder="Search by Lesson or Chapter"
            />
          </div>

          <Link className="flex items-center gap-2" to="/teacher/dashboard/createsyllabusaddtropic">
            <span className="text-[19px] text-[#465049]">Add Lesson</span>
            <IoAddCircleOutline className="w-7 h-7 text-[#BB5042]" />
          </Link>
        </div>

        {/* Lessons Table */}
        <div className="w-full bg-white mt-6 p-5">
          <div className="overflow-x-auto rounded-t-[8px]">
            <table className="min-w-full table-auto">
              <thead className="bg-[#E4EBE6] text-left h-[60px]">
                <tr className="text-[#465049] text-[16px]">
                  <th className="px-4 py-3">Lesson</th>
                  <th className="px-4 py-3">Resource</th>
                  <th className="px-4 py-3">Chapter</th>
                  <th className="px-4 py-3">Topic Title</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[#465049]">{renderLessonRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DraftedSyllabus;
