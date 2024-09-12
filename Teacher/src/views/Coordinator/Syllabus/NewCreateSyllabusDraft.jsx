import React, { useState } from 'react';
import LayoutSyllabus from './LayoutSyllabus';
import { IoIosArrowDown } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const announcements = [
  {
    lesson: "Lesson 1",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "10 to 20",
    activityType: "Lecture",
    topicNo: "1",
    activityTime: "45 mins"
  }
];

function DraftedSyllabus() {
  return (
    <div>
      <LayoutSyllabus />
      <div className="mt-10 mr-5 max-w-full">
<div className="flex items-center justify-between">
  {/* Class Information */}
  <div className="flex text-[20px] font-bold gap-2">
    <span>Class IX</span>
    <span>| Science</span>
    <span>| 2024</span>
  </div>

  <div className="flex">
            <button className="border-[2px] flex gap-3 items-center rounded-[8px] px-6 py-3">
              Select Syllabus
              <IoIosArrowDown className="w-5 h-5 text-[#BB5042]" />
            </button>
  </div>

</div>
        <div className="flex justify-end items-center mt-10">
          <div className='flex items-center gap-2'>
            <span className=' text-[20px]'>Add Lesson</span>
            <Link to="coordinator/dasboard/CAddlessonsyllabus">
            <IoAddCircleOutline className="w-7 h-7 text-[#BB5042] cursor-pointer" />
            </Link>
         
          </div>
        </div>

        <div className="w-full bg-white mt-6 rounded-md">
          <div className="overflow-x-auto rounded-t-md">
            <table className="min-w-full table-auto">
              <thead className="bg-[#E4EBE6] text-left h-[60px]">
                <tr className="text-[#465049] text-[16px]">
                  <th className="px-4 py-3">Lesson</th>
                  <th className="px-4 py-3">Resource</th>
                  <th className="px-4 py-3">Chapter</th>
                  <th className="px-4 py-3">Pages</th>
                  <th className="px-4 py-3">Activity Type</th>
                  <th className="px-4 py-3">Topic No.</th>
                  <th className="px-4 py-3">Activity Time</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {announcements.map((announcement, index) => (
                  <tr key={index} className="border-b text-[16px] text-gray-700">
                    <td className="px-4 py-3">{announcement.lesson}</td>
                    <td className="px-4 max-w-[164px] py-3">{announcement.resource}</td>
                    <td className="px-4 max-w-[186px] py-3">{announcement.chapter}</td>
                    <td className="px-4 max-w-[100px] py-3">{announcement.pages}</td>
                    <td className="px-4 max-w-[160px] py-3">{announcement.activityType}</td>
                    <td className="px-4 max-w-[100px] py-3">{announcement.topicNo}</td>
                    <td className="px-4 max-w-[130px] py-3">{announcement.activityTime}</td>
                    <td className="px-4 max-w-[130px] items-center mt-5 flex gap-4 py-3">
                      <FiEdit className='text-[#BB5042] w-5 h-5'/>
                      <span className='text-[20px] text-[#B6B6B6]'>|</span>
                      <CiTrash className='text-[#BB5042] w-5 h-5'/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DraftedSyllabus;
