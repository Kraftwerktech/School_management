import React, { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
const ReminderSection = () => {
  const [showModal, setShowModal] = useState(false);

  const reminders = [
    { text: "Today you didn't complete 100% activity at class IX, group-B", link: "See activity" },
    { text: "Today you have a parent meeting with class X, group-B at 4pm", link: "See activity" },
    { text: "Today you didn't complete 100% activity at class IX, group-B", link: "See activity" },
  ];

  return (
    <div className='w-full mb-8 border-[1px] rounded-[8px] border-[#E8E8E8]'>
      <div className='justify-center items-center'>
        <h2 className='text-[#465049] ml-10 mr-10 mt-2 font-bold text-[24px]'>Reminder</h2>
        <div className='flex justify-end text-[#A4A594] text-[13px] mr-10 cursor-pointer' onClick={() => setShowModal(true)}>
          See all
        </div>
        <div className="grid ml-10 mt-3 mr-10 grid-cols-1 lg:grid-cols-3 gap-4 mb-2">
          {reminders.map((reminder, index) => (
            <div key={index} className="bg-[#F8EEEC] p-4 rounded-lg">
              <p className="text-[13px] text-[#465049]">{reminder.text}</p>
              <a href="#" className="text-[#0318CF]">{reminder.link}</a>
            </div>
          ))}
        </div>
      </div>

      {/* Modal to display all reminders */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50">
          <div className="bg-white w-[700px] lg:w-[700px] p-[70px] h-[600px] rounded-[8px] mt-24">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[24px] font-bold text-[#465049]">All Reminders</h2>
              <button
                className="text-[#BB5042] text-xl"
                onClick={() => setShowModal(false)}
              >
              <RxCrossCircled className='w-6 h-6'/>
              </button>
            </div>
            <div className="overflow-y-auto">
              {reminders.map((reminder, index) => (
                <div key={index} className="bg-[#F8EEEC] p-4 rounded-lg mb-4">
                  <p className="text-sm">{reminder.text}</p>
                  <a href="#" className="text-blue-500">{reminder.link}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReminderSection;
