import React, { useState } from 'react';
import LayoutSyllabus from './LayoutSyllabus';
import { IoIosArrowDown } from "react-icons/io";
import { BsDownload} from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const announcements = [
  {
    lesson: "Lesson 1",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "10 to 20",
    activityType: "Lecture",
    topicNo: "1",
    activityTime: "45 mins"
  },
  {
    lesson: "Lesson 2",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 7: Science toolkit 2: Control and regulation",
    pages: "21 to 30",
    activityType: "Lab",
    topicNo: "2",
    activityTime: "1 hour"
  },
  {
    lesson: "Lesson 3",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 8: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  },
  {
    lesson: "Lesson 4",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  },
  {
    lesson: "Lesson 5",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  },{
    lesson: "Lesson 6",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  },{
    lesson: "Lesson 7",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  },{
    lesson: "Lesson 8",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  },{
    lesson: "Lesson 9",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  },{
    lesson: "Lesson 10",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  }
];


function ApprovedSyllabus() {
  return (
    <div className=' mb-10'>
      <LayoutSyllabus />
      <div className="border-r-[1px] border-l-[1px]  mr-5 max-w-full">
        <div className="flex items-center justify-between">
          <div className="flex text-[20px] mt-8 ml-5 font-bold gap-2">
            <span>Class IX</span>
            <span>| Science</span>
            <span>| 2024</span>
          </div>
          <div className="flex mt-10 mr-5 gap-8">
  <div className="relative inline-block">
  <select className="border-[1px] flex gap-3 items-center w-[277px] rounded-[8px] px-6 py-3 cursor-pointer outline-none  border-[#B6B6B6] hover:border-[#BB5042] appearance-none bg-white text-gray-700">
    <option>Class X | Biology | 2024</option>
    <option>Class IX | Science | 2024</option>
    <option>Class VIII | Chemistry | 2024</option>
    <option>Class VII | Physics | 2024</option>
    <option>Class VI | Math | 2024</option>
    <option>Class X | CS | 2024</option>
    <option>Class IX | English | 2024</option>
    <option>Class XI | History | 2024</option>
  </select>
  <IoIosArrowDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#BB5042] pointer-events-none" />
</div>

            <button className="border-[1px] rounded-[8px] text-[#BB5042] border-[#BB5042] px-6 py-2">
              Change Request
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="flex items-center border ml-5 border-slate-300 rounded-md w-[350px] md:max-w-[400px]">
            <CiSearch className="ml-3 w-5 h-5 text-[#BB5042]" />
            <input
              className="flex-1 px-4 py-2 placeholder:text-[13px] outline-none bg-transparent text-gray-700"
              type="text"
              name="search"
              placeholder="Search by Lesson or Chapter"
            />
          </div>
          <BsDownload className="w-5 h-5 text-[#BB5042] mr-5 cursor-pointer" />
        </div>

        <div className="w-full p-5 bg-white mt-6 rounded-md">
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
                </tr>
              </thead>
              <tbody>
                {announcements.map((announcement, index) => (
                  <tr key={index} className="border-b-[1px] text-[16px] text-gray-700">
                  <td className="px-4 py-3">{announcement.lesson}</td>
                  <td className="px-4 max-w-[164px] py-3">{announcement.resource}</td>
                  <td className="px-4 max-w-[186px] py-3">{announcement.chapter}</td>
                  <td className="px-4 max-w-[100px] py-3">{announcement.pages}</td>
                  <td className="px-4 max-w-[160px] py-3">
                    <ul className="space-y-3 mt-[10px] mb-[10px]">
                      <li className='flex gap-2 items-center'> <GoDotFill className='w-3 h-3'/>{announcement.activityType}</li>
                      <li className='flex gap-2 items-center'>  <GoDotFill className='w-3 h-3'/>{announcement.activityType}</li>
                    </ul>
                  </td>
                  <td className="px-4 max-w-[100px] py-3">{announcement.topicNo}</td>
                  <td className="px-4 max-w-[130px] py-3">
                    <ul className="space-y-3 mt-[10px] mb-[10px]">
                      <li>{announcement.activityTime}</li>
                      <li>{announcement.activityTime}</li>
                    </ul>
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

export default ApprovedSyllabus;