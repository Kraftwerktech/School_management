import {useState} from 'react';
import { BsFiletypePdf } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { CiTrash } from 'react-icons/ci';
import { SlClock } from "react-icons/sl";
import { GoLocation } from "react-icons/go";
import {MdExpandMore} from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { GrAttachment } from "react-icons/gr";
import DatePicker from 'react-datepicker';
import {Link} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendar } from "react-icons/ci";
import MeetingLayout from './MeetingLayout';


function ArchiveMeeting() {
  const [showPopup, setShowPopup] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCardRejected, setIsCardRejected] = useState(false);
 
  const [isCardrejected, setisCardrejected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming'); // Set the default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
   <div>
    <MeetingLayout/>
      {/* Meeting Cards Section */}
      <div className='mr-10'>
      <div className="flex justify-end mb-6 mt-6 gap-[30px]">
  <div className="relative w-full md:w-[160px]"> {/* Adjusted the width for better date visibility */}
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      className="appearance-none px-2 ml-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-[60px] h-[44px]" // Adjusted padding for better alignment
      placeholderText="Start Date"
      dateFormat="dd MMM yyyy" // Changed to show abbreviated month names
    />
    <CiCalendar className="absolute w-7 h-7 text-[#BB5042] right-3 top-[40%] transform -translate-y-1/2 pointer-events-none" /> {/* Adjusted icon position */}
  </div>

  <div className="relative w-full md:w-[160px]"> {/* Adjusted the width for better date visibility */}
    <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      className="appearance-none px-2 ml-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full pr-[60px] h-[44px]" // Adjusted padding for better alignment
      placeholderText="End Date"
      dateFormat="dd MMM yyyy" // Changed to show abbreviated month names
    />
    <CiCalendar className="absolute w-7 h-7 text-[#BB5042] right-3 top-[40%] transform -translate-y-1/2 pointer-events-none" /> {/* Adjusted icon position */}
  </div>

  <button className="px-5 py-2 border-[1px] text-white bg-[#BB5042] rounded-[8px]">
    Search
  </button>
</div>

      </div>
      
      <div className="mt-6 mr-10 space-y-6">
        {/* Sample Card 1 */}
 
        <div className="border rounded-lg p-6 bg-white shadow-sm">
      <div className="flex justify-between border-b-2 pb-8 items-center">
        <div className="flex gap-6">
          <div className="bg-[#A7BEAE] rounded-md text-center p-4 h-[118px] w-[112px] flex flex-col justify-center items-center">
            <p className="text-[45px] font-bold text-white">26</p>
            <p className="text-[20px] font-semibold text-white">August</p>
          </div>
          <div className='flex gap-[60px] justify-between'>
          <div className="flex flex-col">
            <div className='max-w-[800px]'>
            <p className="text-[20px] text-[#465049] pb-2 font-bold">Meeting Agenda</p>
            <p className="text-[16px] text-[#6B7280] leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, hic quos! Illo, inventore vitae, esse nihil dicta sint totam dignissimos qui nulla, praesentium laudantium repellendus molestias.totam dignissimos qui nulla, praesentium laudantium repellendus molestias.
            </p>
            </div>
            
            <div className="flex gap-2 mt-2 items-center">
              <BsFiletypePdf className="text-[#BB5042] w-5 h-5" />
              <p className="text-[16px] text-[#BB5042]">Class Syllabus.pdf</p>
            </div>
          </div>
          <div className="justify-start space-y-[20px]">
            
            <div className="text-[14px] font-medium flex gap-2 items-center text-[#6B7280]">
            <SlClock className="text-[#BB5042] w-5 h-5" />
            <span className=' text-[16px]'>3:00 PM - 5:00 PM</span>
          </div>
          <div className="text-[14px] flex gap-2 items-center font-medium text-[#6B7280]">
            <GoLocation className="text-[#BB5042] w-5 h-5" />
            <span className='text-[16px]'>Building No. 5, Room 302</span>
          </div>
          <button className="mt-3 bg-[#98AD9E] text-white border border-transparent rounded-md px-7 py-2">
            <span className="font-bold">Arranged by </span>Me
          </button>
           
          
        </div>
          </div>
          
        </div>
        
      </div>
      <div className="w-full flex justify-between pb-6 pr-5 pt-4">
        <div className="flex gap-[54px]">
          <div className=' flex'>
            <span className=' font-bold text-[18px]'> Attendant Status</span>
           </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            >
              <IoCheckmarkCircleOutline className="w-6 h-6 text-[#08A647]" />
              <span>15 Guardians</span>
            </div>
            {showPopup && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Accepted by</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setIsCardVisible(true)}
              onMouseLeave={() => setIsCardVisible(false)}
            >
              <AiOutlineMinusCircle className="w-6 h-6 text-[#BB5042] opacity-50" />
              <span>15 Guardians</span>
            </div>
            {isCardVisible && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Not Respond</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setIsCardRejected(true)}
              onMouseLeave={() => setIsCardRejected(false)}
            >
              <RxCrossCircled className="w-6 h-6 text-[#BB5042]" />
              <span>3 Guardians</span>
            </div>
            {isCardRejected && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Rejected by</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-[74px]">
          <div className="flex gap-2 items-center">
            <LiaChalkboardTeacherSolid className="w-6 h-6 text-[#BB5042]" />
            <span>Class VI | B</span>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineUserGroup className="w-6 h-6 text-[#BB5042]" />
            <span>10 Guardians</span>
          </div>
        </div>
      </div>
      <div className=" bg-[#EFF0E0] mr-5 p-4 rounded-md mt-4">
        <span className="font-semibold">Meeting Outcome</span>
        <p className="text-[#465049] mt-2">
          Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam nibh enim quis non cras. Posuere nec eget risus eu adipiscing egestas aliquam vestibulum vestibulum. Est sem sed dolor hac pellentesque elit nisi vulputate eget.
        </p>
      </div>
    </div>


        {/* Sample Card 2 */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
      <div className="flex justify-between border-b-2 pb-8 items-center">
        <div className="flex gap-6">
          <div className="bg-[#A7BEAE] rounded-md text-center p-4 h-[118px] w-[112px] flex flex-col justify-center items-center">
            <p className="text-[45px] font-bold text-white">26</p>
            <p className="text-[20px] font-semibold text-white">August</p>
          </div>
          <div className='flex gap-[60px] justify-between'>
          <div className="flex flex-col">
            <div className='max-w-[800px]'>
            <p className="text-[20px] text-[#465049] pb-2 font-bold">Meeting Agenda</p>
            <p className="text-[16px] text-[#6B7280] leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, hic quos! Illo, inventore vitae, esse nihil dicta sint totam dignissimos qui nulla, praesentium laudantium repellendus molestias.totam dignissimos qui nulla, praesentium laudantium repellendus molestias.
            </p>
            </div>
            
            <div className="flex gap-2 mt-2 items-center">
              <BsFiletypePdf className="text-[#BB5042] w-5 h-5" />
              <p className="text-[16px] text-[#BB5042]">Class Syllabus.pdf</p>
            </div>
          </div>
          <div className="justify-start space-y-[20px]">
            
            <div className="text-[14px] font-medium flex gap-2 items-center text-[#6B7280]">
            <SlClock className="text-[#BB5042] w-5 h-5" />
            <span className=' text-[16px]'>3:00 PM - 5:00 PM</span>
          </div>
          <div className="text-[14px] flex gap-2 items-center font-medium text-[#6B7280]">
            <GoLocation className="text-[#BB5042] w-5 h-5" />
            <span className='text-[16px]'>Building No. 5, Room 302</span>
          </div>
          <button className="mt-3 bg-[#98AD9E] text-white border border-transparent rounded-md px-7 py-2">
            <span className="font-bold">Arranged by </span>Me
          </button>
           
          
        </div>
          </div>
          
        </div>
        
      </div>
      <div className="w-full flex justify-between pb-6 pr-5 pt-4">
        <div className="flex gap-10">
          <div className=' flex'>
            <span className=' font-bold text-[18px]'> Attendant Status</span>
           </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            >
              <IoCheckmarkCircleOutline className="w-6 h-6 text-[#08A647]" />
              <span>15 Guardians</span>
            </div>
            {showPopup && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Accepted by</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setIsCardVisible(true)}
              onMouseLeave={() => setIsCardVisible(false)}
            >
              <AiOutlineMinusCircle className="w-6 h-6 text-[#BB5042] opacity-50" />
              <span>15 Guardians</span>
            </div>
            {isCardVisible && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Not Respond</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setIsCardRejected(true)}
              onMouseLeave={() => setIsCardRejected(false)}
            >
              <RxCrossCircled className="w-6 h-6 text-[#BB5042]" />
              <span>3 Guardians</span>
            </div>
            {isCardRejected && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Rejected by</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <LiaChalkboardTeacherSolid className="w-6 h-6 text-[#BB5042]" />
            <span>Class VI | B</span>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineUserGroup className="w-6 h-6 text-[#BB5042]" />
            <span>10 Guardians</span>
          </div>
        </div>
      </div>
      <div className=" bg-[#EFF0E0] mr-5 p-4 rounded-md mt-4">
        <span className="font-semibold">Meeting Outcome</span>
        <p className="text-[#465049] mt-2">
          Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam nibh enim quis non cras. Posuere nec eget risus eu adipiscing egestas aliquam vestibulum vestibulum. Est sem sed dolor hac pellentesque elit nisi vulputate eget.
        </p>
      </div>
    </div>


    <div className="border rounded-lg p-6 bg-white shadow-sm">
      <div className="flex justify-between border-b-2 pb-8 items-center">
        <div className="flex gap-6">
          <div className="bg-[#A7BEAE] rounded-md text-center p-4 h-[118px] w-[112px] flex flex-col justify-center items-center">
            <p className="text-[45px] font-bold text-white">26</p>
            <p className="text-[20px] font-semibold text-white">August</p>
          </div>
          <div className='flex gap-[60px] justify-between'>
          <div className="flex flex-col">
            <div className='max-w-[800px]'>
            <p className="text-[20px] text-[#465049] pb-2 font-bold">Meeting Agenda</p>
            <p className="text-[16px] text-[#6B7280] leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, hic quos! Illo, inventore vitae, esse nihil dicta sint totam dignissimos qui nulla, praesentium laudantium repellendus molestias.totam dignissimos qui nulla, praesentium laudantium repellendus molestias.
            </p>
            </div>
            
            <div className="flex gap-2 mt-2 items-center">
              <BsFiletypePdf className="text-[#BB5042] w-5 h-5" />
              <p className="text-[16px] text-[#BB5042]">Class Syllabus.pdf</p>
            </div>
          </div>
          <div className="justify-start space-y-[20px]">
            
            <div className="text-[14px] font-medium flex gap-2 items-center text-[#6B7280]">
            <SlClock className="text-[#BB5042] w-5 h-5" />
            <span className=' text-[16px]'>3:00 PM - 5:00 PM</span>
          </div>
          <div className="text-[14px] flex gap-2 items-center font-medium text-[#6B7280]">
            <GoLocation className="text-[#BB5042] w-5 h-5" />
            <span className='text-[16px]'>Building No. 5, Room 302</span>
          </div>
          <button className="mt-3 bg-[#98AD9E] text-white border border-transparent rounded-md px-7 py-2">
            <span className="font-bold">Arranged by </span>Me
          </button>
           
          
        </div>
          </div>
          
        </div>
        
      </div>
      <div className="w-full flex justify-between pb-6 pr-5 pt-4">
        <div className="flex gap-10">
          <div className=' flex'>
            <span className=' font-bold text-[18px]'> Attendant Status</span>
           </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            >
              <IoCheckmarkCircleOutline className="w-6 h-6 text-[#08A647]" />
              <span>15 Guardians</span>
            </div>
            {showPopup && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Accepted by</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setIsCardVisible(true)}
              onMouseLeave={() => setIsCardVisible(false)}
            >
              <AiOutlineMinusCircle className="w-6 h-6 text-[#BB5042] opacity-50" />
              <span>15 Guardians</span>
            </div>
            {isCardVisible && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Not Respond</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setIsCardRejected(true)}
              onMouseLeave={() => setIsCardRejected(false)}
            >
              <RxCrossCircled className="w-6 h-6 text-[#BB5042]" />
              <span>3 Guardians</span>
            </div>
            {isCardRejected && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Rejected by</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <LiaChalkboardTeacherSolid className="w-6 h-6 text-[#BB5042]" />
            <span>Class VI | B</span>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineUserGroup className="w-6 h-6 text-[#BB5042]" />
            <span>10 Guardians</span>
          </div>
        </div>
      </div>
      <div className=" bg-[#EFF0E0] mr-5 p-4 rounded-md mt-4">
        <span className="font-semibold">Meeting Outcome</span>
        <p className="text-[#465049] mt-2">
          Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam nibh enim quis non cras. Posuere nec eget risus eu adipiscing egestas aliquam vestibulum vestibulum. Est sem sed dolor hac pellentesque elit nisi vulputate eget.
        </p>
      </div>
    </div>


<div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#85392F] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">24</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div className=' max-w-[700px]'>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[16px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042] w-5 h-5' /></span>
          <p className="text-[16px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className=" mr-[163px] max-h-full space-y-4 gap-4">
      <div className="text-[16px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-5 h-5'/></span>
        <span className='text-[16px]'>2:00 PM - 4:00 PM</span>
        </div>
      
      <button className="mt-2 bg-[#85392F] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-4 py-2">
      <span className=' font-bold'> Arranged by </span>Guardians
      </button>
    </div>
    
  </div>
  <div className='w-[60%] flex pb-6 pt-4 items-center space-y-4 justify-between'>
    <div className='pl-4'>
      <img src='https://randomuser.me/api/portraits/men/32.jpg' className='w-14 h-14 rounded-full border-[3px] border-[#BB5042]'/>
    </div>
    <div>
      <span className='text-[#0318CF]'>Rebeka</span>
    </div>
    <div>
      <span className='text-[#939393]'>DM 16000024</span>
      <br/>
      <span>Class VI | B</span>
    </div>
    <span className='text-[#E8E8E8] text-[40px]'>|</span>
    <div>
      <span>Request by</span>
      <br/>
      <span className='text-[#939393]'>Md. Rubel Hasan</span>
    </div>
    <div>
      <span>Relation</span>
      <br/>
      <span className='text-[#939393]'>Father</span>
    </div>
  </div>
  <div className=" bg-[#EFF0E0] mr-5 p-4 rounded-md mt-4">
        <span className="font-semibold">Meeting Outcome</span>
        <p className="text-[#465049] mt-2">
          Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam nibh enim quis non cras. Posuere nec eget risus eu adipiscing egestas aliquam vestibulum vestibulum. Est sem sed dolor hac pellentesque elit nisi vulputate eget.
        </p>
      </div>
</div>


<div className="border rounded-lg p-6 bg-white shadow-sm">
      <div className="flex justify-between border-b-2 pb-8 items-center">
        <div className="flex gap-6">
          <div className="bg-[#A7BEAE] rounded-md text-center p-4 h-[118px] w-[112px] flex flex-col justify-center items-center">
            <p className="text-[45px] font-bold text-white">26</p>
            <p className="text-[20px] font-semibold text-white">August</p>
          </div>
          <div className='flex gap-[60px] justify-between'>
          <div className="flex flex-col">
            <div className='max-w-[800px]'>
            <p className="text-[20px] text-[#465049] pb-2 font-bold">Meeting Agenda</p>
            <p className="text-[16px] text-[#6B7280] leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, hic quos! Illo, inventore vitae, esse nihil dicta sint totam dignissimos qui nulla, praesentium laudantium repellendus molestias.totam dignissimos qui nulla, praesentium laudantium repellendus molestias.
            </p>
            </div>
            
            <div className="flex gap-2 mt-2 items-center">
              <BsFiletypePdf className="text-[#BB5042] w-5 h-5" />
              <p className="text-[16px] text-[#BB5042]">Class Syllabus.pdf</p>
            </div>
          </div>
          <div className="justify-start space-y-[20px]">
            
            <div className="text-[14px] font-medium flex gap-2 items-center text-[#6B7280]">
            <SlClock className="text-[#BB5042] w-5 h-5" />
            <span className=' text-[16px]'>3:00 PM - 5:00 PM</span>
          </div>
          <div className="text-[14px] flex gap-2 items-center font-medium text-[#6B7280]">
            <GoLocation className="text-[#BB5042] w-5 h-5" />
            <span className='text-[16px]'>Building No. 5, Room 302</span>
          </div>
          <button className="mt-3 bg-[#98AD9E] text-white border border-transparent rounded-md px-7 py-2">
            <span className="font-bold">Arranged by </span>Me
          </button>
           
          
        </div>
          </div>
          
        </div>
        
      </div>
      <div className="w-full flex justify-between pb-6 pr-5 pt-4">
        <div className="flex gap-10">
          <div className=' flex'>
            <span className=' font-bold text-[18px]'> Attendant Status</span>
           </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            >
              <IoCheckmarkCircleOutline className="w-6 h-6 text-[#08A647]" />
              <span>15 Guardians</span>
            </div>
            {showPopup && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Accepted by</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setIsCardVisible(true)}
              onMouseLeave={() => setIsCardVisible(false)}
            >
              <AiOutlineMinusCircle className="w-6 h-6 text-[#BB5042] opacity-50" />
              <span>15 Guardians</span>
            </div>
            {isCardVisible && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Not Respond</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onMouseEnter={() => setIsCardRejected(true)}
              onMouseLeave={() => setIsCardRejected(false)}
            >
              <RxCrossCircled className="w-6 h-6 text-[#BB5042]" />
              <span>3 Guardians</span>
            </div>
            {isCardRejected && (
              <div className="absolute top-8 left-0 z-10 p-4 w-[340px] bg-white border border-gray-300 rounded shadow-lg">
                <h3 className="font-bold text-lg mb-3">Rejected by</h3>
                {/* Repeated content with correct spacing */}
                <div className="flex justify-between border-b pb-2">
                  <span>
                    <p>Md. Rubel Hasan</p>
                    <p>Father</p>
                  </span>
                  <span className="text-[#939393]">
                    <p>Akil Uz Zaman</p>
                    <p>DM 16000024</p>
                  </span>
                </div>
                {/* Repeat similar blocks as needed */}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2 items-center">
            <LiaChalkboardTeacherSolid className="w-6 h-6 text-[#BB5042]" />
            <span>Class VI | B</span>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineUserGroup className="w-6 h-6 text-[#BB5042]" />
            <span>10 Guardians</span>
          </div>
        </div>
      </div>
      <div className=" bg-[#EFF0E0] mr-5 p-4 rounded-md mt-4">
        <span className="font-semibold">Meeting Outcome</span>
        <p className="text-[#465049] mt-2">
          Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam nibh enim quis non cras. Posuere nec eget risus eu adipiscing egestas aliquam vestibulum vestibulum. Est sem sed dolor hac pellentesque elit nisi vulputate eget.
        </p>
      </div>
    </div>
      </div>
    </div>
  );
}

export default ArchiveMeeting;
