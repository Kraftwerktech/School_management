import React, { useState, useEffect, useRef } from 'react';
import { FaList, FaCaretDown } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import teacher from '../assets/Teacher/teacher.jpg'; // Replace with appropriate icon or image for notifications
import { CiTrash } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';

const Header = ({ showSidebar, setShowSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New message from admin', timestamp: '2 minutes ago', icon: teacher },
    { id: 2, message: 'Assignment deadline approaching', timestamp: '1 hour ago', icon: teacher },
    { id: 3, message: 'New class schedule available', timestamp: 'Yesterday', icon: teacher },
    { id: 4, message: 'Meeting at 3 PM', timestamp: 'Yesterday', icon: teacher },
    { id: 5, message: 'Meeting at 3 PM', timestamp: 'Yesterday', icon: teacher }
  ]);
  const [unreadCount, setUnreadCount] = useState(notifications.length);
  const [filter, setFilter] = useState('all');

  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Hide dropdowns when navigating to a new page
    setShowDropdown(false);
    setShowNotifications(false);
  }, [location]);

  useEffect(() => {
    // Event listener to handle clicks outside of the dropdowns
    const handleClickOutside = (event) => {
      if (
        notificationRef.current && !notificationRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (showNotifications) setShowNotifications(false); // Close notifications if dropdown is opened
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showDropdown) setShowDropdown(false); // Close profile dropdown if notifications are opened
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
    setUnreadCount(notifications.length - 1);
  };

  const filteredNotifications = filter === 'unread'
    ? notifications.slice(0, unreadCount)
    : notifications;

  return (
    <div className='fixed w-full z-10'> {/* Ensures header is above all content */}
      <div className='ml-0 lg:ml-[260px] h-[65px] flex justify-between items-center bg-[#F6F9F7] text-[#f2f4f6] px-5 transition-all'>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className='w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer'
        >
          <FaList className='text-white' />
        </div>

        <div className='hidden md:block'>
          <input
            className='px-3 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
            type="text"
            name='search'
            placeholder='Search'
          />
        </div>

        <div className='flex justify-center ml-5 items-center gap-8 relative'>
          {/* Notification Icon */}
          <div className='relative z-20' ref={notificationRef}> {/* Ensures notifications dropdown is above profile dropdown */}
            <IoMdNotificationsOutline 
              className={`text-xl cursor-pointer w-7 h-7 ${showNotifications ? 'text-blue-500' : 'text-[#BB5042]'}`}
              onClick={toggleNotifications} 
            />
            {unreadCount > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center'>
                {unreadCount}
              </span>
            )}
            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className='absolute w-[500px] top-full right-0 mt-2 bg-white shadow-lg rounded-md py-2 z-100'>
                <div className='px-5 py-2 text-[20px] border-b text-gray-700 font-semibold'>Notifications</div>
                <div className='flex px-5 py-2 gap-4 w-full h-[48px] mt-2 mb-2'>
                  <button 
                    className={`px-5 text-center border-[1px] rounded-md ${filter === 'all' ? 'bg-[#616158] text-white' : 'text-gray-600'} hover:bg-[#616158] hover:text-white`}
                    onClick={() => setFilter('all')}
                  >
                    All
                  </button>
                  <button 
                    className={`px-5 border-[1px] rounded-md ${filter === 'unread' ? 'bg-[#616158] text-white' : 'text-gray-600'} hover:bg-[#616158] hover:text-white`}
                    onClick={() => setFilter('unread')}
                  >
                    Unread
                  </button>
                  <div className='justify-end text-black mt-2 ml-[160px]'>
                    <span>Mark all as read</span>
                  </div>
                </div>
                <div className='max-h-[350px] max-w-[480px] justify-center pl-[20px] scrollbar-custom overflow-y-auto'>
                  {filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification, index) => (
                      <div 
                        key={notification.id} 
                        className={`px-4 py-2 border-b last:border-b-0 flex justify-between items-center ${index % 2 === 0 ? 'bg-[#e9efeb]' : 'bg-[#F6F9F7]'}`}
                      >
                        <div className='flex items-center'>
                          <img 
                            src={notification.icon} 
                            alt="icon" 
                            className='w-[50px] h-[50px] rounded-full mr-3' 
                          />
                          <div>
                            <p className='text-gray-800 font-semibold'>{notification.message}</p>
                            <p className=' text-black'>Please Conforim your all personal</p>
                            <span className='text-gray-500 text-sm'>{notification.timestamp}</span>
                          </div>
                        </div>
                        < CiTrash 
                          className='text-[#bb5042] w-5 h-5 cursor-pointer'
                          onClick={() => handleDeleteNotification(notification.id)}
                        />
                      </div>
                    ))
                  ) : (
                    <div className='px-4 py-2 text-gray-500'>No notifications</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-3 relative z-10' ref={profileRef}> {/* Ensures profile dropdown is below notifications */}
            <div className='flex items-center cursor-pointer' onClick={toggleDropdown}>
                <img
                  className='w-[45px] h-[45px] rounded-full overflow-hidden border-[3px] border-[#BB5042]'
                  src={teacher}
                  alt="profile"
                />
                
              </div>
              <div className='flex justify-center items-center flex-col pr-8'>
             
                <h2 onClick={toggleDropdown} className='text-sm text-[#000] font-bold flex'>
                  <span>Mohammad Ibrahim</span>
                <FaCaretDown className='text-xl text-[#BB5042] ml-2' />
                </h2>
                
                <span className='text-[14px] text-gray-400 w-full font-normal'>Teacher</span>
              </div>
              
              {/* Dropdown Menu */}
              {showDropdown && (
                <div className='absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50'>
                  <Link to="/teacher/dashboard/teacher-profile" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                    Profile
                  </Link>
                  <Link to="http://localhost:5173/teacher/dashboard/verifyidentybyprofile-pass-profile" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                    Reset Password
                  </Link>
                  <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                    Settings
                  </a>
                  <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
