import React from 'react';

const InProgressSyllabus = ({ syllabus }) => {
  return (
    <>
      {syllabus
        .filter(item => item.status === 'In Progress')
        .map((announcement, index) => (
          <tr key={index} className="border-b text-[16px] text-gray-700">
            <td className="px-4 py-3">{announcement.lesson}</td>
            <td className="px-4 max-w-[164px] py-3">{announcement.resource}</td>
            <td className="px-4 max-w-[186px] py-3">{announcement.chapter}</td>
            <td className="px-4 max-w-[100px] py-3">{announcement.pages}</td>
            <td className="px-4 max-w-[160px] py-3">{announcement.activityType}</td>
            <td className="px-4 max-w-[100px] py-3">{announcement.topicNo}</td>
            <td className="px-4 max-w-[130px] py-3">{announcement.activityTime}</td>
            <td className="px-4 max-w-[130px] items-center mt-5 flex gap-4 py-3">
              <FiEdit className="text-[#BB5042] w-5 h-5" />
              <span className="text-[20px] text-[#B6B6B6]">|</span>
              <CiTrash className="text-[#BB5042] w-5 h-5" />
            </td>
          </tr>
        ))}
    </>
  );
};

export default InProgressSyllabus;