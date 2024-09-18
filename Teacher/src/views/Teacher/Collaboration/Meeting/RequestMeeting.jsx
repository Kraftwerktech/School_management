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
import MeetingLayout from './MeetingLayout';


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


function RequestMeeting() {
  const [acceptShowModal, acceptsetShowModal]=useState(false);
  const [rejectShowModal, rejectsetShowModal]=useState(false);
  const [showModal, setShowModal] = useState(false);

  const [activeTab, setActiveTab] = useState('upcoming'); // Set the default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  
  return (
    <>
    <MeetingLayout/>
     <div className="max-w-full mr-10 mb-10">
 <div>
 <div className=' flex mt-5 justify-end gap-[50px]'>
  <button className='px-5 py-2 border-[1px] bg-[#616158] text-[#FFFF] rounded-[8px]'>All</button>
  <button className='px-5 py-2 border-[1px] rounded-[8px]'>Me</button>
  <button className='px-5 py-2 border-[1px] rounded-[8px]'>Guardian</button>
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
<button className="mt-2 bg-[#85392F] text-[#FFFF] border-[1px] w-[200px] border-[#E5E7EB] rounded-[8px] px-[2px] py-2">
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
<button className="mt-2 bg-[#85392F] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-[8px] w-[200px] px-[2px] py-2">
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
</div></>
   
  );
}

export default RequestMeeting;
