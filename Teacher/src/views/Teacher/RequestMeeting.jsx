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
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


function CreateMeetingModal({ setShowModal }) {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
  <div className="bg-white w-[1140px] rounded-lg shadow-lg p-8 max-w-[1000px] relative">
    <div className="text-center  pb-4">
      <h3 className="text-[31px] font-semibold">Create Meeting</h3>
      <button
        onClick={() => setShowModal(false)}
        className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
      >
        <RxCrossCircled className='w-6 h-6' />
      </button>
    </div>

    <form className="mt-6 space-y-6">
      <div>
        <label className="block text-gray-700 mb-1">Subject</label>
        <input
          type="text"
          className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
          placeholder="Enter Subject"
        />
      </div>

      <div className='flex gap-[76px] flex-wrap'>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative w-full md:w-[130px]">
            <select
              className="appearance-none px-4 py-2 border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
            >
              <option value="">Class</option>
              <option>Class-ix</option>
              <option>Class-x</option>
              <option>Class-xi</option>
              <option>Class-xii</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="relative w-full md:w-[130px]">
            <select
              className="appearance-none px-4 py-2 border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
            >
              <option value="">Section</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
            <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className='w-4 h-4' id="fullClass" />
            <label htmlFor="fullClass" className="text-gray-700">Full Class</label>
          </div>
        </div>

        <div className='flex flex-wrap gap-4 items-center'>
          <div className='flex items-center gap-2'>
            <span><LuAlarmClock className='w-6 h-6 text-[#BB5042]'/></span>
            <DatePicker
    selected={selectedDate}
    onChange={(date) => setSelectedDate(date)}
    className="px-2 py-2 w-[130px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042]" // Adjusted padding for better alignment
    placeholderText="Select Date"
    dateFormat="dd MMMM yyyy"
  />
          </div>
          <div className='flex items-center gap-3'>
            <input
              type="time"
              className=" rounded-md px-2 py-2 outline-none border bg-transparent border-slate-300  focus:border-[#BB5042]"
              defaultValue="11:00"
            />
            <span className='text-[16px]'>to</span>
            <input
              type="time"
              className=" px-2 py-2 outline-none border bg-transparent border-slate-300 rounded-md focus:border-[#BB5042]"
              defaultValue="12:30"
            />
          </div>
        </div>

      </div>

      <div className='flex items-center gap-[76px] flex-wrap'>
        <input 
          className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[386.22px]" 
          type="text" 
          name="search" 
          placeholder="Search by Student Name or ID" 
        />
        <div className='flex items-center gap-1'>
          <span><CiLocationOn className='w-7 h-7 text-[#BB5042]'/></span>
          <input
      type="text"
      className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-[441px] md:max-w-[441px]"
      placeholder="Enter Location"
    />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Details</label>
        <textarea
          className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
          placeholder="Enter Details"
          rows="4"
        />
      </div>

      <div className='justify-start flex gap-2 items-center'>
        <span><GrAttachment className='w-5 h-5'/></span>
        <span>Attachment</span>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-12 py-3 border rounded-md bg-[#BB5042] text-white hover:bg-[#a0443c]"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</div>
  

  );
}


function AcceptMeetingModal({ acceptsetShowModal }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white w-[496px] rounded-lg shadow-lg p-8 max-w-[496px] relative">
      <div className="pb-8">
        <h3 className="text-[18px] mt-8 text-center font-semibold">Please Enter the Meeting Place.</h3>
        <button
          onClick={() => acceptsetShowModal(false)}
          className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
        >
          <RxCrossCircled className='w-6 h-6' />
        </button>
      </div>
      <div className=' space-y-14'>
      <div className='flex items-center gap-1'>
            <span><CiLocationOn className='w-7 h-7 text-[#BB5042]'/></span>
            <input
        type="text"
        className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-[441px] md:max-w-[441px]"
        placeholder="Building No. 5, Room 302"
      />
          </div>

          <div className="flex gap-[35px] pl-[26px] justify-center">
          <button
            type="submit"
            className="px-[65px] py-3  rounded-md bg-transparent border-[2px] text-black"
          >
            Cencel
          </button>
          <button
            type="submit"
            className="px-[65px] py-3 border rounded-md bg-[#BB5042] text-white hover:bg-[#a0443c]"
          >
            Confirm
          </button>
        </div>
      </div>
      
    </div>
  </div>
    
  
    );
  }

  function RejectMeetingModal({ rejectsetShowModal }) {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white w-[468px] rounded-lg shadow-lg p-8 max-w-[1000px] relative">
      <div className="text-center  pb-4">
        <h4 className="text-[16px] text-center mt-7">Are you sure you want to reject this meeting invitation? This action cannot be undone.</h4>
        <button
          onClick={() => rejectsetShowModal(false)}
          className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
        >
          <RxCrossCircled className='w-6 h-6' />
        </button>
      </div>
  <div className='mt-5'>
        <label className="block font-bold text-gray-700 mb-1">Reason</label>
        <textarea
          className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
          placeholder="Enter Reason"
          rows="4"
        />
      </div>
      <div className="flex gap-[35px] mt-10 mb-5 justify-center">
          <button
            type="submit"
            className="px-[65px] py-3  rounded-md bg-transparent border-[2px] text-black"
          >
            Cencel
          </button>
          <button
            type="submit"
            className="px-[65px] py-3 border rounded-md bg-[#BB5042] text-white hover:bg-[#a0443c]"
          >
            Confirm
          </button>
        </div>
    </div>
  </div>
    
  
    );
  }


function Parents_Teachers_Collaboration() {
  const [acceptShowModal, acceptsetShowModal]=useState(false);
  const [rejectShowModal, rejectsetShowModal]=useState(false);
  const [showModal, setShowModal] = useState(false);

  const [activeTab, setActiveTab] = useState('upcoming'); // Set the default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };


  return (
    <div className="max-w-full pr-10 mb-10">
      {/* Header Section */}
      <div className="flex justify-between mt-5 items-center">
        <h1 className="text-[31px] font-bold">Meeting</h1>
        <div>
        <button
        className="bg-[#BB5042] border-[1px] rounded-md w-[102px] h-[44px] text-[#FFFFFF]"
        onClick={() => setShowModal(true)}
      >
        Create
      </button>

      {showModal && <CreateMeetingModal setShowModal={setShowModal} />}
        </div>
        
      </div>

      {/* Tabs Section */}
      <div className="max-h-[1840px] mt-8 w-full flex gap-40 border-b-2 mb-5 text-[18px] text-[#6B7280] font-medium relative">
      <div
        className={`cursor-pointer flex items-center text-[25px] pb-2 relative ${
          activeTab === 'upcoming' ? 'text-[#151515] font-bold border-b-4 border-[#BB5042]' : 'hover:text-[#BB5042]'
        }`}
        onClick={() => handleTabClick('upcoming')}
      >
        <Link to="http://localhost:5173/teacher/dashboard/collaboration">
        <span>Upcoming Meeting</span>
        </Link>
        <span className="absolute -top-2 -right-5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
          5
        </span>
      </div>

      <div
        className={`cursor-pointer flex items-center text-[25px] pb-2 relative ${
          activeTab === 'request' ? 'text-[#151515] font-bold border-b-4 border-[#BB5042]' : 'hover:text-[#BB5042]'
        }`}
        onClick={() => handleTabClick('request')}
      >
        <Link to="http://localhost:5173/teacher/dashboard/requestmeeting">
          <span>Request for Meeting</span>
        </Link>
        <span className="absolute -top-2 -right-5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
          3
        </span>
      </div>

      <div
        className={`cursor-pointer text-[25px] pb-2 ${
          activeTab === 'archive' ? 'text-[#151515] font-bold border-b-4 border-[#BB5042]' : 'hover:text-[#BB5042]'
        }`}
        onClick={() => handleTabClick('archive')}
      >
        <Link to="http://localhost:5173/teacher/dashboard/archive">
          <span>Archive</span>
        </Link>
      </div>
    </div>


      {/* Meeting Cards Section */}
      <div className="mt-6 space-y-6">
        {/* Sample Card 1 */}
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
          <span><BsFiletypePdf className='text-[#BB5042]' /></span>
          <p className="text-[16px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="max-h-full space-y-4 gap-4">
      <div className="text-[16px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span className='text-[16px]'><SlClock className='text-[#BB5042] w-5 h-5'/></span>
        <span className='text-[16px]'>2:00 PM - 4:00 PM</span>
        </div>
      <div className="text-[16px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-5 h-5'/></span>
        <span className='text-[16px]'>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#85392F] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-5 py-2">
      <span className=' font-bold'> Arranged by </span>Guardians
      </button>
    </div>
    <div className=" space-y-6 gap-4 items-center mr-4">

        <div>
        <button  onClick={() => acceptsetShowModal(true)} className='flex border-[1px] border-[#08A647] rounded-[8px] px-5 py-2 items-center justify-center gap-2'>
        <span><IoIosCheckmarkCircleOutline className='w-5 h-5 text-[#08A647]'/></span>
        <span className='text-[#08A647]'>Accept</span>
       
      </button>
      {acceptShowModal && <AcceptMeetingModal acceptsetShowModal={acceptsetShowModal} />}
        </div>
    <div>
    <button onClick={() => rejectsetShowModal(true)} className='flex border-[1px] rounded-[8px] border-[#BB5042] px-5 py-2 items-center justify-center gap-2'>
        <span><RxCrossCircled className='w-5 h-5 text-[#BB5042]'/></span>
        <span className='text-[#BB5042]'>Reject</span>
      </button>
      {rejectShowModal && <RejectMeetingModal rejectsetShowModal={rejectsetShowModal} />}
    </div>
      
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
</div>
{/* Add more cards similarly */}
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
          <span><BsFiletypePdf className='text-[#BB5042]' /></span>
          <p className="text-[16px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="max-h-full space-y-4 gap-4">
      <div className="text-[16px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span className='text-[16px]'><SlClock className='text-[#BB5042] w-5 h-5'/></span>
        <span className='text-[16px]'>2:00 PM - 4:00 PM</span>
        </div>
      <div className="text-[16px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-5 h-5'/></span>
        <span className='text-[16px]'>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#85392F] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-5 py-2">
      <span className=' font-bold'> Arranged by </span>Guardians
      </button>
    </div>
    <div className=" space-y-6 gap-4 items-center mr-4">

        <div>
        <button  onClick={() => acceptsetShowModal(true)} className='flex border-[1px] border-[#08A647] rounded-[8px] px-5 py-2 items-center justify-center gap-2'>
        <span><IoIosCheckmarkCircleOutline className='w-5 h-5 text-[#08A647]'/></span>
        <span className='text-[#08A647]'>Accept</span>
       
      </button>
      {acceptShowModal && <AcceptMeetingModal acceptsetShowModal={acceptsetShowModal} />}
        </div>
    <div>
    <button onClick={() => rejectsetShowModal(true)} className='flex border-[1px] rounded-[8px] border-[#BB5042] px-5 py-2 items-center justify-center gap-2'>
        <span><RxCrossCircled className='w-5 h-5 text-[#BB5042]'/></span>
        <span className='text-[#BB5042]'>Reject</span>
      </button>
      {rejectShowModal && <RejectMeetingModal rejectsetShowModal={rejectsetShowModal} />}
    </div>
      
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
</div>
      </div>
    </div>
  );
}

export default Parents_Teachers_Collaboration;
