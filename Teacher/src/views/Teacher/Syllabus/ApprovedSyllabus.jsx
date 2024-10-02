import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import LayoutSyllabus from './LayoutSyllabus'
const demoClasses = ["Class IX", "Class X", "Class XI"];
const demoSubjects = ["Science", "Mathematics", "English"];

const dummyData = [
    {
      lesson: "Lesson 1",
      resources: [
        {
          resource: "TB- Cambridge Checkpoint Science Coursebook 9",
          chapter: "Chapter 5: Science toolkit 2: Control and regulation",
          topics: [
            "Forms of Energy and Their Interconversion",
            "Defining the System and its Surroundings",
            "The Law of Energy Conservation",
            "Units of Energy",
          ],
        },
        {
          resource: "TB- Oxford Science 9 Student Book",
          chapter: "Chapter 2: Energy",
          topics: [
            "Units of Energy",
            "State Functions and the Path Independence of the Energy Change",
          ],
        },
      ],
    },
    {
      lesson: "Lesson 2",
      resources: [
        {
          resource: "TB- Cambridge Checkpoint Science Coursebook 9",
          chapter: "Chapter 5: Science toolkit 2: Control and regulation",
          topics: [
            "Forms of Energy and Their Interconversion",
            "Energy Change: Energy Transfer to or from a System",
            "Heat and Work: To from of Energy Transfer",
            "The Law of Energy Conservation",
          ],
        },
        {
          resource: "TB- Oxford Science 9 Student Book",
          chapter: "Chapter 2: Energy",
          topics: [
            "Units of Energy",
            "State Functions and the Path Independence of the Energy Change",
          ],
        },
      ],
    },
    {
      lesson: "Lesson 3",
      resources: [
        {
          resource: "TB- Cambridge Checkpoint Science Coursebook 9",
          chapter: "Chapter 5: Science toolkit 2: Control and regulation",
          topics: [
            "Forms of Energy and Their Interconversion",
            "Defining the System and its Surroundings",
            "The Law of Energy Conservation",
            "Units of Energy",
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
      <LayoutSyllabus/>
      <div className='mb-8 mr-5' id="syllabusTable">
      <div className='mt-5'>
        <h3 className=' text-[31px] font-bold'>Syllabus</h3>
      </div>
      <div className="mt-5 mr-5 max-w-full">
        <div className="flex justify-between">
          <div className="flex text-[20px] text-[#465049] font-bold gap-2">
            <span>{selectedClass}</span>
            <span>| {selectedSubject}</span>
            <span>| 2024</span>
          </div>
          <div className="flex gap-8">
            <div className="relative">
              <select
                className="appearance-none px-8 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-[60px] h-[44px]"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                {demoClasses.map((classItem, index) => (
                  <option key={index} value={classItem}>
                    {classItem}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
            <div className="relative">
              <select
                className="appearance-none px-8 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-[60px] h-[44px]"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                {demoSubjects.map((subjectItem, index) => (
                  <option key={index} value={subjectItem}>
                    {subjectItem}
                  </option>
                ))}
              </select>
              <IoIosArrowDown className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-[#BB5042]" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center border border-slate-300 rounded-md w-[350px] md:max-w-[400px]">
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

        <div className="w-full bg-white mt-6 rounded-[8px]">
          <div className="overflow-x-auto rounded-t-[8px]">
            <table className="min-w-full border-l-[1px] border-r-[1px]  table-auto">
              <thead className="bg-[#E4EBE6] text-left h-[80px]">
                <tr className="text-[#465049] text-[16px]">
                  <th className="py-4 px-8">Lesson</th>
                  <th className="px-4 py-3">Resource</th>
                  <th className="px-4 py-3">Chapter</th>
                  <th className="px-4 py-3">Topic Title</th>

                </tr>
              </thead>
              <tbody className=' text-[#465049]'>
              {dummyData.map((lessonData, index) => (
                
                <React.Fragment  key={index}>
                  
                  <tr className="">
                    <td className="py-4 items-center px-8">{lessonData.lesson}</td>
                    <td className="py- border-b-[1px] mt-3 mb-3 px-4">
                      {lessonData.resources[0].resource}
                    </td>
                    <td className="py-2 border-b-[1px] mt-3 mb-3 px-4">
                      {lessonData.resources[0].chapter}
                    </td>
                    <td className="py-2 border-b-[1px] mt-3 mb-3 px-4">
                      <ul className="list-disc space-y-2 mt-3 mb-3 pl-4">
                        {lessonData.resources[0].topics.slice(0, 3).map((topic, topicIndex) => (
                          <li  key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                  {/* Expanded rows */}
                  {expandedLessons[index] &&
                    lessonData.resources.map((resource, resIndex) => (
                    
                      <tr
                        key={resIndex}
                        className={` ${
                          resIndex > 0 ? "bg-gray-100" : ""
                        }`}
                      >
                        <td className="py-2 px-4"></td>
                        <td className="py-2 px-4">{resource.resource}</td>
                        <td className="py-2 px-4">{resource.chapter}</td>
                        <td className="py-2 px-4">
                          <ul className="list-disc pl-4">
                            {resource.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </td>
                        
                      </tr>
                      
                   
                     
                    ))}
                  {/* Show More / Less button */}
                  <td className="py-0 border-b-[1px] px-8" colSpan="4">
                      <button
                        className="text-[#98AD9E] font-bold hover:underline"
                        onClick={() => toggleLesson(index)}
                      >
                        {expandedLessons[index] ? "Less..." : "More..."}
                      </button>
                    </td>
                 
                 
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
