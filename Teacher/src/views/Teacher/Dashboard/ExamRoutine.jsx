import React from 'react';

const ExamRoutine = () => {
  const exams = [
    { class: "Class VII | Science | A", time: "9:30am - 12:30pm", room: "203" },
    { class: "Class VII | Science | A", time: "9:30am - 12:30pm", room: "210" }
  ];

  return (
    <div className="bg-white rounded-[8px] border-[1px] border-[#E8E8E8] p-5">
      <h3 className="font-semibold text-[#465049] text-[24px]">Today's Exam Routine</h3>
      <div className="grid grid-cols-5  mt-4 mb-3 lg:grid-cols-6 gap-4">
        {exams.map((exam, index) => (
          <div key={index} className="text-center hover:bg-slate-200 bg-[#F4F4EA] p-4 rounded-lg">
            <p className=' font-bold text-[18px] text-[#465049]'>{exam.class}</p>
            <p className=' text-[16px] font-semibold text-[#465049]'>{exam.time}</p>
            <p className='text-[16px] font-semibold text-[#465049]'>Room: {exam.room}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamRoutine;
