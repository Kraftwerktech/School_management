import React from 'react';
import AssessmentLayout from './assesmentLayout';
import { Link } from 'react-router-dom';
import { CiBookmarkCheck } from "react-icons/ci";

// AssessmentCard Component
const AssessmentCard = ({ title, marks, date, link }) => (
  <Link
    to={link || '#'}
    className="h-[105px] p-6 hover:bg-[#dce2de] w-full gap-4 flex flex-col text-start bg-[#F4F4EA] rounded-[8px]  transition duration-200"
  >
    <div className="flex justify-between items-center">
      <span className="font-semibold text-[18px] text-[#465049]">{title}</span>
      <CiBookmarkCheck className="text-[#465049] text-[24px]" />
    </div>
    <div className="flex gap-2">
      <span className="text-[#465049]">{marks} Marks</span>
      <span className="text-[#465049]">|</span>
      <span className="text-[#465049]">{date}</span>
    </div>
  </Link>
);

// NomarksGiven Component
function NomarksGiven() {
  const assessments = [
    { title: 'Class Test', marks: 20, date: '11th Jul 2024', link: '/teacher/dashboard/dismarked' },
    { title: 'Monthly Test', marks: 40, date: '11th Jul 2024', link: '/teacher/dashboard/dismarked' },
    { title: 'Home Work', marks: 30, date: '11th Jul 2024', link: '/teacher/dashboard/dismarked' },
    { title: 'Class Test', marks: 25, date: '11th Jul 2024', link: '/teacher/dashboard/dismarked' },
  ];

  return (
    <div className="mb-10">
      <AssessmentLayout />
      <div className="flex flex-col gap-5 justify-start mr-[57px] mt-5">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="h-[225px] border-[1px] rounded-[8px]">
            <div className="mt-5 mr-5 ml-5">
              <span className="font-bold text-[20px] text-[#465049]">
                Economics | Class IX | Group 1
              </span>
              <div className="grid h-[150px] grid-cols-4 gap-5 mt-8">
                {assessments.map((assessment, idx) => (
                  <AssessmentCard
                    key={idx}
                    title={assessment.title}
                    marks={assessment.marks}
                    date={assessment.date}
                    link={assessment.link}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NomarksGiven;
