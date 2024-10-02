import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { BsDownload } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import LayoutSyllabus from './LayoutSyllabus';

const demoClasses = ['Class IX', 'Class X', 'Class XI'];
const demoSubjects = ['Science', 'Mathematics', 'English'];

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

function ApprovedSyllabus() {
  const [selectedClass, setSelectedClass] = useState(demoClasses[0]);
  const [selectedSubject, setSelectedSubject] = useState(demoSubjects[0]);
  const [expandedLessons, setExpandedLessons] = useState({});

  const toggleLesson = (index) => {
    setExpandedLessons((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const downloadPDF = () => {
    const input = document.getElementById('syllabusTable');
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('syllabus.pdf');
    });
  };

  return (
    <div>
      <LayoutSyllabus />
      <div className='mb-8 mr-5' id="syllabusTable">
        <div className="max-w-full border-l-[1px] border-r-[1px]">

          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="flex text-[20px] mt-8 ml-5 font-bold gap-2">
              <span>{selectedClass}</span>
              <span>| {selectedSubject}</span>
              <span>| 2024</span>
            </div>

            <div className="flex mt-10 items-center mr-5 gap-8">
            <div className="relative inline-block">
  <select
    className="border-[1px] w-[250px] rounded-[8px] px-6 py-3 outline-none border-[#B6B6B6] hover:border-[#BB5042] bg-white text-gray-700 cursor-pointer appearance-none" // added appearance-none
    value={`${selectedClass} | ${selectedSubject} | 2024`}
    onChange={(e) => {
      const [cls, subj] = e.target.value.split(' | ');
      setSelectedClass(cls);
      setSelectedSubject(subj);
    }}
  >
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
  {/* Use pointer-events-none to ensure clicking works on the select */}
</div>


              <button className="border-[1px] rounded-[8px] w-[250px]      text-[#BB5042] border-[#BB5042] px-6 py-3">
              Request for Change 
              </button>
            </div>
          </div>

          {/* Search and Download Section */}
          <div className="flex justify-between mr-5 items-center mt-5">
            <div className="flex ml-5 items-center border border-slate-300 rounded-md w-[350px] md:max-w-[400px]">
              <CiSearch className="ml-3 w-5 h-5 text-[#BB5042]" />
              <input
                className="flex-1 px-4 py-2 placeholder:text-[13px] outline-none bg-transparent text-gray-700"
                type="text"
                name="search"
                placeholder="Search by Lesson or Chapter"
              />
            </div>
            <BsDownload
              className="w-5 h-5 text-[#BB5042] cursor-pointer"
              onClick={downloadPDF}
            />
          </div>

          {/* Table Section */}
          <div className="w-full bg-white mt-6 p-5 rounded-[8px]">
            <div className="overflow-x-auto rounded-t-[8px]">
              <table className="min-w-full table-auto">
                <thead className="bg-[#E4EBE6] text-left h-[70px]">
                  <tr className="text-[#465049] text-[16px]">
                    <th className="py-4 px-8">Lesson</th>
                    <th className="px-4 py-3">Resource</th>
                    <th className="px-4 py-3">Chapter</th>
                    <th className="px-4 py-3">Topic Title</th>
                  </tr>
                </thead>
                <tbody className="text-[#465049]">
                  {dummyData.map((lessonData, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td className="py-4 font-bold pb-3 pt-3 w-[140px] px-8">{lessonData.lesson}</td>
                        <td className="py-2 px-4 pb-3 pt-3 ">
                          {lessonData.resources[0].resource}
                        </td>
                        <td className="py-2 pb-3 pt-3 px-4 ">
                          {lessonData.resources[0].chapter}
                        </td>
                        <td className="py-2 pb-3 pt-3 px-4 ">
                          <ul className="list-disc space-y-2 pl-4">
                            {lessonData.resources[0].topics.slice(0, 3).map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>

                      {expandedLessons[index] && lessonData.resources.slice(1).map((resource, resIndex) => (
                        <tr key={resIndex} className="bg-gray-100 pb-3 pt-3">
                          <td className="py-4 px-8" />
                          <td className="py-2 px-4 ">
                            {resource.resource}
                          </td>
                          <td className="py-2 px-4 ">
                            {resource.chapter}
                          </td>
                          <td className="py-2 px-4">
                            <ul className="list-disc space-y-2 pl-4">
                              {resource.topics.map((topic, topicIndex) => (
                                <li key={topicIndex}>{topic}</li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}

                      <tr>
                        <td colSpan={4} className="py-3 px-8 text-left border-b-[1px]">
                          <button
                            className="text-[#98AD9E] font-semibold"
                            onClick={() => toggleLesson(index)}
                          >
                            {expandedLessons[index] ? 'Less...' : 'More...'}
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApprovedSyllabus;
