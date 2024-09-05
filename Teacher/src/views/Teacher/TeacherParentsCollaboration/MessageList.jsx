import React from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi'; // For icons, you can use react-icons
import { FaUserCircle } from 'react-icons/fa'; // Placeholder for user icons
import { BsPlusCircle } from "react-icons/bs";

const MessageList = () => {
    const messages = [
        {
            id: 1,
            type: 'Class IX | B',
            subject: 'Dear All, Our Monthly test...',
            time: '15 min',
            unreadCount: 2,
            icon: 'IX',
            isGroup: true,
        },
        {
            id: 2,
            type: 'Class VIII | A',
            subject: 'Dear All, Our Monthly test...',
            time: '15 min',
            unreadCount: 2,
            icon: 'VIII',
            isGroup: true,
        },
        {
            id: 3,
            type: 'DM 1600024',
            subject: 'Dear Parent, Samuil is not...',
            time: '15 min',
            unreadCount: 5,
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            id: 4,
            type: 'Class IX | B | Basketball',
            subject: 'Dear All, Our Monthly test...',
            time: '15 min',
            unreadCount: 1,
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            id: 5,
            type: 'DM 1600024',
            subject: 'My daughter is sick. Last...',
            time: '15 min',
            unreadCount: 2,
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
    ];

    return (
        <div className=" mt-5 bg-white w-96">
            {/* Header Section */}
            <div className="flex bg-[#E4EBE6] rounded-t-[8px] pt-4 pb-4 items-center justify-between mb-4">
                <h2 className="text-lg ml-4 font-semibold flex gap-1">Message List
                    <div>
                    <span className="text-xs bg-[#BB5042] p-1 rounded-full  font-bold text-[#FFFF]">10</span>
                    </div>
                
                </h2>
               
            </div>

            {/* Create Group */}
            <div className="flex items-center  justify-between mb-4">
                <span className="text-gray-600 ml-4 font-semibold">Create Group</span>
                <button className='pr-2 mr-4'> 
                    <BsPlusCircle size={24} className='text-[#BB5042] ' />
                </button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4 ml-5 items-center mr-5">
                <input
                    type="text"
                    className="w-full p-3 pl-10 border-[1px] rounded-lg focus:outline-none"
                    placeholder="Search by Student's ID"
                />
                <FiSearch className="absolute top-4 left-3 text-[#BB5042]" size={22} />
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-8 mb-4">
                <button className="px-7 py-2 bg-gray-200 rounded-full text-gray-700">All</button>
                <button className="px-7 py-2 bg-gray-200 rounded-full text-gray-700">Group</button>
                <button className="px-7 py-2 bg-gray-200 rounded-full text-gray-700">Unread</button>
            </div>

            {/* Message List */}
            <div className="space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className="flex items-center justify-between">
                        {/* Message Icon or Image */}
                        <div className="flex items-center space-x-2">
                            {message.icon ? (
                                <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-full text-white font-bold">
                                    {message.icon}
                                </div>
                            ) : (
                                <img
                                    src={message.image}
                                    alt="User"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            )}

                            <div>
                                <h4 className="font-semibold text-sm text-gray-800">{message.type}</h4>
                                <p className="text-xs text-gray-500 truncate w-40">{message.subject}</p>
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
