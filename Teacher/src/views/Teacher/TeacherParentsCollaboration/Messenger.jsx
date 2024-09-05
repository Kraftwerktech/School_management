import React from 'react';
import { IoIosSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";

const Message = () => {
  const messages = [
    { sender: 'user', text: "Sir, May I talk with you? It's urgent.", time: '12:15 PM' },
    { sender: 'admin', text: 'Sure, Please tell me.', time: '12:25 PM' },
    {
      sender: 'user',
      text: "My daughter is sick. Last night we were admitted to the hospital. So, she can't attend today's exam.",
      time: '12:29 PM',
    },
    { sender: 'admin', text: "Oh! No. It's really sad to hear it.", time: '12:33 PM' },
    {
      sender: 'admin',
      text: 'Don’t worry, Please take care of her. I will inform the authority. We are praying for her. InShaAllah she will recover soon.',
      time: '12:33 PM',
    },
  ];

  return (
    <div className="mt-5 max-h-[1700px] flex flex-col">
      <div className="bg-[#E4EBE6] p-4 rounded-t-md">
        <h2 className="text-lg font-bold">Message</h2>
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
            <div className={` w-1/2 p-2 rounded-lg ${msg.sender === 'admin' ? 'bg-transparent' : 'bg-[#E4EBE6]'}`}>
              <p>{msg.text}</p>
              <p className="text-xs text-right text-gray-600 mt-1">{msg.time}</p>
            </div>
            <div className="ml-2 items-center">
              <img
                src={msg.sender === 'admin' ? 'http://localhost:5173/teacher.jpg' : 'http://localhost:5173/admin.jpeg'}
                alt="icon"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-8 bg-white">
        <div className="flex items-center mb-10 flex-1 p-3 border border-gray-300 rounded-md">
          <input
            type="text"
            className="flex-1 p-2 focus:outline-none"
            placeholder="Write a message..."
          />
          <GrAttachment className="w-6 h-6 text-gray-500 mx-8 cursor-pointer" />
          <button className="ml-2 mx-6 bg-[#BB5042] text-white p-3 rounded-[8px] hover:bg-blue-600 transition duration-300">
          <IoIosSend className="w-6 h-6" />
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Message;
