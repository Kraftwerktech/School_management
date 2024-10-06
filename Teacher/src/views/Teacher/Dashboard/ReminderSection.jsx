import React from 'react';

const ReminderSection = () => {
  const reminders = [
    { text: "Today you didn't complete 100% activity at class IX, group-B", link: "See activity" },
    { text: "Today you have a parent meeting with class X, group-B at 4pm", link: "See activity" },
    { text: "Today you didn't complete 100% activity at class IX, group-B", link: "See activity" },
  ];

  return (
    <div className='w-full mb-10 border-[1px] rounded-[8px] border-[#E8E8E8]'>
      <div className=' justify-center mt-4 mb-5 items-center'>
        <h2 className=' text-[#465049] ml-10 mr-10 mb-[6px] font-bold text-[24px]'>Remainder</h2>
      <div className="grid ml-10 mr-10 grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
      {reminders.map((reminder, index) => (
        <div key={index} className="bg-[#F8EEEC] p-4 rounded-lg">
          <p className="text-sm">{reminder.text}</p>
          <a href="#" className="text-blue-500">{reminder.link}</a>
        </div>
      ))}
    </div>
      </div>
      
    </div>
    
  );
};

export default ReminderSection;
