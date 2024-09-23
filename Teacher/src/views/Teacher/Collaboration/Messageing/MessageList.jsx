import React from 'react';
import { FiSearch } from 'react-icons/fi'; // For icons
import { BsCircleFill } from 'react-icons/bs'; // Online indicator

const MessageList = () => {
  const messages = [
    {
      id: 1,
      type: 'Class IX | B',
      subject: 'Dear All, Our Monthly test will be held next week.',
      time: '15 min',
      unreadCount: 2,
      icon: 'IX',
      isGroup: true,
      online: true, // Online status
    },
    {
      id: 2,
      type: 'Class VIII | A',
      subject: 'Reminder: Please submit your assignments.',
      time: '1 hr',
      unreadCount: 0,
      icon: 'VIII',
      isGroup: true,
      online: false,
    },
    {
      id: 3,
      type: 'DM 1600024',
      subject: 'Dear Parent, Samuil is not feeling well.',
      time: '2 hr',
      unreadCount: 5,
      image: 'http://localhost:5173/11.jpg', // Student image
      online: true,
    },
    {
      id: 4,
      type: 'Class IX | B | Basketball',
      subject: 'The next basketball practice will be on Thursday.',
      time: '4 hr',
      unreadCount: 1,
      icon: 'IX',
      isGroup: true,
      online: true,
    },
    {
      id: 5,
      type: 'DM 1600025',
      subject: 'My daughter is sick. She will miss school today.',
      time: '6 hr',
      unreadCount: 0,
      image: 'http://localhost:5173/12.jpg', // Student image
      online: false,
    },
  ];

  return (
    <div className="mt-5 border rounded-lg bg-white w-full shadow-md">
      {/* Header Section */}
      <div className="flex bg-[#E4EBE6] rounded-t-lg py-4 items-center justify-between px-4">
        <h2 className="text-xl text-[#465049] font-semibold flex gap-1">
          Message List
          <span className="text-xs bg-[#BB5042] p-1 rounded-full text-white">10</span>
        </h2>
      </div>

      {/* Search Bar */}
      <div className="relative mt-5 mb-5 mx-5">
        <input
          type="text"
          className="w-full p-3 pl-10 border rounded-lg focus:outline-none"
          placeholder="Search by Student's ID"
        />
        <FiSearch className="absolute top-4 left-3 text-[#BB5042]" size={22} />
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-5 mb-4">
        <button className="px-7 py-2 bg-gray-200 rounded-full text-gray-700">All</button>
        <button className="px-7 py-2 bg-gray-200 rounded-full text-gray-700">Group</button>
        <button className="px-7 py-2 bg-gray-200 rounded-full text-gray-700">Unread</button>
      </div>

      {/* Message List */}
      <div className="space-y-4 px-6 pb-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-all ${
              message.unreadCount > 0 ? 'border-l-4 border-red-500' : ''
            }`}
          >
            {/* Message Icon or Image */}
            <div className="flex items-center space-x-4">
              {message.icon ? (
                <div className="relative w-12 h-12 flex items-center justify-center bg-green-200 rounded-full text-white font-bold">
                  {message.icon}
                  {message.online && (
                    <BsCircleFill className="absolute bottom-0 right-0 text-green-500" size={12} />
                  )}
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={message.image}
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {message.online && (
                    <BsCircleFill className="absolute bottom-0 right-0 text-green-500" size={12} />
                  )}
                </div>
              )}

              <div>
                <h4 className="font-semibold text-sm text-gray-800">{message.type}</h4>
                <p className="text-xs text-gray-500 truncate w-48">{message.subject}</p>
              </div>
            </div>

            {/* Time and Unread Count */}
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500">{message.time}</span>
              {message.unreadCount > 0 && (
                <span className="text-xs text-white bg-red-600 w-5 h-5 flex items-center justify-center rounded-full">
                  {message.unreadCount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
