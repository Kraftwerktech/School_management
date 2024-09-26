import React, { useState } from 'react';
import LayoutLessonn from './LayoutLesson';
import { CiFilter, CiCalendar } from 'react-icons/ci';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SlCheck } from 'react-icons/sl';
import { RxCrossCircled } from 'react-icons/rx';
import { FiEdit } from 'react-icons/fi';

const SyllabusCard = ({
  status,
  date,
  title,
  test,
  mark,
  time,
  lesson,
  topicno,
  topictitle,
  details,
  activityDetails,
  attachedFiles,
  onReject,
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'In Progress':
        return 'bg-[#98AD9E] text-white font-bold';
      case 'Submitted':
        return 'bg-[#A4A594] text-white font-bold';
      case 'Rejected':
        return 'border-[#CD1902] bg-[#CD1902] text-white font-bold'; // Red border and background for rejected status
      default:
        return '';
    }
  };

  return (
    <div className={`bg-white border-b-[1px] mb-4 ${status === 'Rejected' ? 'border-red-500 border-[1px]' : ''}`}>
      <div className="flex items-center mb-4">
        
        <div className="flex mt-5">
          <div className="text-white font-semibold max-w-[250px] text-[18px] pl-5 rounded-[8px] py-2 border-[1.5px] bg-[#A4A594]">
            {date}
          </div>

          <div className="flex justify-between mt-5 items-center">
            <div className="flex gap-4">
              <span className="font-semibold text-[20px] flex items-center gap-2 text-[#98AD9E]">
                <input type="checkbox" className="w-4 h-4" /> {title}
              </span>
              <span className={`py-1 px-5 rounded-[12px] text-[14px] ${getStatusStyles()}`}>
                {status}
              </span>
            </div>
          </div>
          
        </div>
     
      </div>

      <div className="mb-2 text-gray-500">
        <h4 className="text-gray-600 font-bold text-[20px] mt-3 mb-3">Activity</h4>
        <div className="mb-4">
          <p className="text-gray-500 font-bold text-[16px]">{activityDetails}</p>
        </div>
        <span className="font-semibold text-[#939393] text-[18px]">Lesson {lesson}</span>
      </div>

      <div>
        <span className="font-bold text-[18px] text-[#939393]">Topic {topicno}</span>:
        <span className="text-[#939393] text-[16px]"> {topictitle}</span>
      </div>

      <div className="mt-2 mr-10">
        <p>{details}</p>
      </div>

      <div className="mt-4 font-bold mb-3 text-[20px] flex gap-2">
        <span>{test}</span> | <span>{mark}</span> | <span>{time}</span>
      </div>

      {attachedFiles && attachedFiles.length > 0 && (
        <div className="mt-6 flex gap-2">
          <div className="flex items-center flex-wrap gap-8">
            <h4 className="text-gray-600 font-semibold mb-2">Attached Files</h4>
            {attachedFiles.map((file, index) => (
              <a key={index} href={file.url} className="text-[#465049] font-semibold text-[16px] border-[1px] w-[170px] px-7 py-4 rounded-[8px] text-sm underline">
                {file.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const RejectModal = ({ isOpen, onClose, onSubmit }) => {
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    // Demo data submission (replace with actual API call)
    console.log('Reject reason:', reason);
    onSubmit(reason); // Handle API integration here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">Why Reject this Lesson?</h3>
        <textarea
          className="w-full border border-gray-300 rounded-md p-3 mb-4"
          rows={5}
          placeholder="Enter your reason..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const SyllabusList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const syllabusData = [
    // Sample syllabus data
    {
      status: 'In Progress',
      date: 'Sunday | 1st Sep 2024',
      title: 'Economics | Class IX',
      lesson: '7',
      topicno: '33',
      test: 'M.Test',
      mark: '30',
      time: '20 min',
      topictitle:
        'Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent..',
      details:
        'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
      activityDetails: 'Board Work | 10 min',
      attachedFiles: [
        { name: 'Document1.pdf', url: '#' },
        { name: 'Document2.pdf', url: '#' },
      ],
    },
    // Add more data here...
  ];

  const handleRejectClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleRejectSubmit = (reason) => {
    // Handle reason submission
    console.log('Reason submitted:', reason);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-full">
      {syllabusData.map((syllabus, index) => (
        <SyllabusCard key={index} {...syllabus} onReject={handleRejectClick} />
      ))}
      <RejectModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleRejectSubmit} />
    </div>
  );
};

function DraftLesson() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="max-w-full mr-10 font-roboto">
      <LayoutLessonn />
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
              className="appearance-none px-5 py-3 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-[200px] pr-[60px] h-[44px]"
              placeholderText="Select Date"
              dateFormat="dd MMM yyyy"
            />
            <CiCalendar className="absolute w-7 h-7 text-[#BB5042] right-3 pointer-events-none" />
          </div>
        </div>

        {/* Syllabus List */}
        <div className="mt-4">
          <SyllabusList />
        </div>
      </div>
    </div>
  );
}

export default DraftLesson;
