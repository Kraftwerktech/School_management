import React, { useState } from 'react';
import LayoutLesson from './LayoutLesson';
import { CiFilter, CiCalendar } from "react-icons/ci";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SyllabusCard = ({ status, date, title, test, mark, time, lesson, topicno, topictitle, details, activityDetails, attachedFiles }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'In Progress':
        return 'bg-yellow-500 text-white font-bold';
      case 'Submitted':
        return 'bg-green-500 text-white font-bold';
      case 'Rejected':
        return 'border border-red-500 bg-red-50 text-red-500 font-bold'; // Red border and background for rejected status
      default:
        return '';
    }
  };

  return (
    <div className={`bg-white rounded-md shadow-md mb-4 p-6 ${status === 'Rejected' ? 'border-red-500 border-[2px]' : ''}`}>
      <div className="flex justify-start items-center mb-4">
        <div className="flex flex-col">
          <div className="text-white font-semibold max-w-[250px] text-[18px] pl-5 rounded-[8px] py-2 border-[1.5px] bg-[#A4A594]">
            {date}
          </div>
          <div className="mt-4 flex gap-3">
            <span className="font-semibold text-[20px] flex items-center gap-2 text-[#98AD9E]">
              <input type="checkbox" className="w-4 h-4" /> {title}
            </span>
            <span className={`py-1 px-5 rounded-[12px] text-[14px] ${getStatusStyles()}`}>
              {status}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-2 text-gray-500 text-sm">
        <h4 className="text-gray-600 font-bold text-[20px] mt-3 mb-3">Activity</h4>
        <div className="mb-4">
          <p className="text-gray-500 text-[16px]">{activityDetails}</p>
        </div>
        <span className="font-medium text-[18px]">Lesson </span>
        {lesson}
      </div>

      <div>
        <span className="font-bold text-[18px] text-[#939393]">Topic {topicno}</span>: 
        <span className="text-[#939393] text-[16px]"> {topictitle}</span>
      </div>

      <div className="mt-2">
        <p>{details}</p>
      </div>

      <div className="mt-4 font-bold text-[20px] flex gap-2">
        <span>{test}</span> |
        <span>{mark}</span> |
        <span>{time}</span>
      </div>

      {attachedFiles && attachedFiles.length > 0 && (
        <div className="mt-6 flex flex-col gap-2">
          <h4 className="text-gray-600 font-semibold mb-2">Attached Files</h4>
          <div className="flex flex-wrap gap-5">
            {attachedFiles.map((file, index) => (
              <a key={index} href={file.url} className="text-blue-500 text-sm underline">
                {file.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SyllabusList = () => {
  const syllabusData = [
    {
      status: 'In Progress',
      date: 'Sunday | 1st Sep 2024',
      title: 'Economics | Class IX',
      lesson: '7',
      topicno: "33",
      test: "M.Test",
      mark: "30",
      time: "20 min",
      topictitle: 'Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper.',
      details: 'Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorperLorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper',
      activityDetails: 'Board Work | 10 min Lesson 11...',
      attachedFiles: [{ name: 'Document1.pdf', url: '#' }, { name: 'Document2.pdf', url: '#' }]
    },
    {
      status: 'Submitted',
      date: 'Sunday | 1st Sep 2024',
      title: 'Economics | Class IX',
      lesson: '11',
      topicno: "33",
      test: "M.Test",
      mark: "30",
      time: "20 min",
      details: 'Lorem ipsum dolor sit amet consectetur...',
      topictitle: 'Lorem ipsum dolor sit amet consectetur...',
      activityDetails: 'M.Test | 30 marks | Lesson 30...',
      attachedFiles: [{ name: 'Document1.pdf', url: '#' }]
    },
    {
      status: 'Rejected',
      date: 'Monday | 2nd Sep 2024',
      title: 'Economics | Class IX',
      lesson: '8',
      topicno: "33",
      test: "M.Test",
      mark: "30",
      time: "20 min",
      details: 'Lorem ipsum dolor sit amet consectetur...',
      topictitle: 'Lorem ipsum dolor sit amet consectetur...',
      activityDetails: 'Homework and notes...',
      attachedFiles: []
    },
    {
      status: 'In Progress',
      date: 'Monday | 2nd Sep 2024',
      title: 'Economics | Class IX',
      lesson: '10',
      topicno: "33",
      test: "M.Test",
      mark: "50",
      time: "30 min",
      details: 'Lorem ipsum dolor sit amet consectetur...',
      topictitle: 'Lorem ipsum dolor sit amet consectetur...',
      activityDetails: 'Homework and notes...',
      attachedFiles: []
    }
  ];

  return (
    <div className="max-w-full">
      {syllabusData.map((syllabus, index) => (
        <SyllabusCard key={index} {...syllabus} />
      ))}
    </div>
  );
};

function DraftLesson() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="max-w-full mr-10 font-roboto">
      <LayoutLesson />
      <div className="mt-6">

        {/* Flex container for the filter button and date picker */}
        <div className="flex justify-between items-center">

          {/* Filter Button */}
          <div className="flex gap-2 items-center">
            <button className="py-2 px-6 w-[150px] font-medium border border-[#BB5042] text-[#BB5042] flex items-center rounded-md">
              <CiFilter className="w-6 h-6" /> Filter
            </button>
          </div>

          {/* Date Picker with Calendar Icon */}
          <div className="relative flex items-center">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="appearance-none px-8 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-[60px] h-[44px]"
              placeholderText="Select Date"
              dateFormat="dd MMMM yyyy"
            />
            <CiCalendar className="absolute w-7 h-7 text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Rendering the Syllabus List */}
      <div className="mt-6">
        <SyllabusList />
      </div>
    </div>
  );
}

export default DraftLesson;
