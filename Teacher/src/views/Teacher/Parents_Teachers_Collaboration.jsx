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

function Parents_Teachers_Collaboration() {
  const [showPopup, setShowPopup] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCardrejected, setisCardrejected] = useState(false);


  return (
    <div className="max-w-full pr-10 mb-10">
      {/* Header Section */}
      <div className="flex justify-between mt-5 items-center">
        <h1 className="text-[31px] font-bold">Meeting</h1>
        <button className="bg-[#BB5042] border-[1px] rounded-md  w-[102px] h-[44px]  text-[#FFFFFF]">
          Create
        </button>
      </div>

      {/* Tabs Section */}
      <div className="max-h-[1840px] mt-8 w-full flex gap-40 border-b-2 mb-5 text-[18px] text-[#6B7280] font-medium relative">
  <div className="cursor-pointer flex items-center text-[#151515] text-[25px] font-bold border-b-4 border-[#BB5042] pb-2 relative">
    <span>Upcoming Meeting</span>
    <span className="absolute -top-2 -right-5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
      5
    </span>
  </div>
  <div className="cursor-pointer flex items-center text-[25px] hover:text-[#BB5042] pb-2 relative">
    <span>Request for Meeting</span>
    <span className="absolute -top-2 -right-5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center">
      3
    </span>
  </div>
  <div className="cursor-pointer text-[25px] hover:text-[#BB5042] pb-2">
    <span>Archive</span>
  </div>
</div>

<div className=' flex justify-end gap-[50px]'>
  <button className='px-5 py-2 border-[1px] bg-[#616158] text-[#FFFF] rounded-[8px]'>All</button>
  <button className='px-5 py-2 border-[1px] rounded-[8px]'>Me</button>
  <button className='px-5 py-2 border-[1px] rounded-[8px]'>Guardian</button>
</div>


      {/* Meeting Cards Section */}
      <div className="mt-6 space-y-6">
        {/* Sample Card 1 */}
 
        <div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#A7BEAE] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">26</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[14px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042]' /></span>
          <p className="text-[14px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="text-right max-h-full space-y-4 gap-4">
      <div className="text-[14px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-4 h-4'/></span>
        <span>3:00 PM - 5:00 PM</span>
        </div>
      <div className="text-[14px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-4 h-4'/></span>
        <span>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#98AD9E] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-4 py-2">
      <span className=' font-bold'> Arranged by </span>Me
      </button>
    </div>
    <div className="flex gap-4 items-center mr-4">
      <FiEdit className='w-6 h-6 text-[#BB5042]' />
      <span className=' text-[#B6B6B6] text-[28px]'>|</span>
      <CiTrash className='w-6 h-6 text-[#BB5042]' />
    </div>
  </div>
  <div className='w-full flex pb-6 pt-4 justify-between'>
    <div className='flex gap-2 items-center'>
      <span className='font-bold text-[16px]'>Attendant Status</span>
    </div>
    <div className='relative'>
      <div
        className='flex gap-2 items-center cursor-pointer'
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >
        <span>
          <IoCheckmarkCircleOutline className='w-6 h-6 text-[#08A647]' />
        </span>
        <span>15 Guardians</span>
      </div>

      {showPopup && (
        <div className='absolute top-8 left-0 z-10 p-6 w-[340px] bg-white border border-gray-300 rounded shadow-lg'>
          <h3 className='font-bold text-lg mb-3'>Accepted by</h3>
          <div className='flex gap-7 space-y-2  border-b-[1px] items-center'>
          <span>
          <p>Md. Rubel Hasan</p>
          <p>Father</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Akil Uz Zaman</p>
            <p>DM 16000024</p>
          </span>
          </div>
          
          <div className='flex gap-7 space-y-3 border-b-[1px] items-center'>
          <span>
          <p>Md. Rubel Hasan</p>
          <p>Father</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Akil Uz Zaman</p>
            <p>DM 16000024</p>
          </span>
          </div>
          <div className='flex gap-7 space-y-3 border-b-[1px] items-center'>
          <span>
          <p>Fatema Fegum</p>
          <p>Mother</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Anika Mahazabin</p>
            <p>DM 16000024</p>
          </span>
          </div>
          <div className='flex gap-7   items-center'>
          <span>
          <p>Abul Malek</p>
          <p>Father</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Taseen Ahmed</p>
            <p>DM 16000024</p>
          </span>
          </div>
        </div>
      )}
    </div>
    <div className='relative'>
      <div
        className='flex gap-2 items-center cursor-pointer'
        onMouseEnter={() =>setIsCardVisible(true)}
        onMouseLeave={() => setIsCardVisible(false)}
      >
        <span>
          <AiOutlineMinusCircle className='w-6 h-6 text-[#BB5042] opacity-50' />
        </span>
        <span>15 Guardians</span>
      </div>

      {isCardVisible && (
        <div className='absolute top-8 left-0 z-10 p-6 w-[340px] bg-white border border-gray-300 rounded shadow-lg'>
          <h3 className='font-bold text-lg mb-3'>Not Respond</h3>
          <div className='flex gap-7 space-y-2  border-b-[1px] items-center'>
          <span>
          <p>Md. Rubel Hasan</p>
          <p>Father</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Akil Uz Zaman</p>
            <p>DM 16000024</p>
          </span>
          </div>
          
          <div className='flex gap-7 space-y-3 border-b-[1px] items-center'>
          <span>
          <p>Md. Rubel Hasan</p>
          <p>Father</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Akil Uz Zaman</p>
            <p>DM 16000024</p>
          </span>
          </div>
          <div className='flex gap-7 space-y-3 border-b-[1px] items-center'>
          <span>
          <p>Fatema Fegum</p>
          <p>Mother</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Anika Mahazabin</p>
            <p>DM 16000024</p>
          </span>
          </div>
          <div className='flex gap-7   items-center'>
          <span>
          <p>Abul Malek</p>
          <p>Father</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Taseen Ahmed</p>
            <p>DM 16000024</p>
          </span>
          </div>
        </div>
      )}
    </div>
    <div className='relative'>
      <div
        className='flex gap-2 items-center cursor-pointer'
        onMouseEnter={() =>setisCardrejected(true)}
        onMouseLeave={() => setisCardrejected(false)}
      >
        <span>
          <RxCrossCircled className='w-6 h-6 text-[#BB5042]' />
        </span>
        <span>3 Guardians</span>
      </div>

      {isCardrejected && (
        <div className='absolute top-8 left-0 z-10 p-6 w-[340px] bg-white border border-gray-300 rounded shadow-lg'>
          <h3 className='font-bold text-lg mb-3'>Rejected by</h3>
          <div className='flex gap-7 space-y-2  border-b-[1px] items-center'>
          <span>
          <p>Md. Rubel Hasan</p>
          <p>Father</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Akil Uz Zaman</p>
            <p>DM 16000024</p>
          </span>
          </div>
          
          <div className='flex gap-7 space-y-3 border-b-[1px] items-center'>
          <span>
          <p>Md. Rubel Hasan</p>
          <p>Father</p>
          </span>
          <span className=' text-[#939393]'>
            <p>Akil Uz Zaman</p>
            <p>DM 16000024</p>
          </span>
          </div>
         
        </div>
      )}
    </div>
    <div className='flex gap-2 items-center'>
      <span><LiaChalkboardTeacherSolid className='w-6 h-6 text-[#BB5042]' /></span>
      <span>Class VI | B</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><HiOutlineUserGroup className='w-6 h-6 text-[#BB5042]' /></span>
      <span>10 Guardians</span>
    </div>
  </div>
</div>

        {/* Sample Card 2 */}
  <div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#A7BEAE] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">26</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[14px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042]' /></span>
          <p className="text-[14px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="text-right max-h-full space-y-4 gap-4">
      <div className="text-[14px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-4 h-4'/></span>
        <span>3:00 PM - 5:00 PM</span>
        </div>
      <div className="text-[14px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-4 h-4'/></span>
        <span>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#98AD9E] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-4 py-2">
      <span className=' font-bold'> Arranged by </span>Me
      </button>
    </div>
    <div className="gap-4 w-[140px] h-[140px] items-center justify-center rounded-[12px] text-center bg-[#F8EEEC] mr-4">
      <div className='pt-4 pl-3 pr-3 space-y-3'>
      
      <span className='text-[#767b78] font-semibold text-sm'>Submit the Meeting Status</span>
      
      <button className='bg-[#BB5042] px-5 py-2 rounded-[8px] text-white'>Status</button>
      </div>
      
    </div>
  </div>
  <div className='w-full flex pb-6 pt-4 justify-between'>
    <div className='flex gap-2 items-center'>
      <span className='font-bold text-[16px]'>Attendant Status</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><IoCheckmarkCircleOutline className='w-6 h-6 text-[#08A647]' /></span>
      <span>15 Guardians</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><AiOutlineMinusCircle className='w-6 h-6 text-[#BB5042] text-opacity-50' /></span>
      <span>12 Guardians</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><RxCrossCircled className='w-6 h-6 text-[#BB5042]' /></span>
      <span>4 Guardians</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><LiaChalkboardTeacherSolid className='w-6 h-6 text-[#BB5042]' /></span>
      <span>Class VI | B</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><HiOutlineUserGroup className='w-6 h-6 text-[#BB5042]' /></span>
      <span>10 Guardians</span>
    </div>
  </div>
</div>


<div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#A7BEAE] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">25</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[14px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042]' /></span>
          <p className="text-[14px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="text-right max-h-full space-y-4 gap-4">
      <div className="text-[14px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-4 h-4'/></span>
        <span>3:00 PM - 4:00 PM</span>
        </div>
      <div className="text-[14px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-4 h-4'/></span>
        <span>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#98AD9E] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-4 py-2">
      <span className=' font-bold'> Arranged by </span>Me
      </button>
    </div>
    <div className="flex gap-4 items-center mr-4">
      <FiEdit className='w-6 h-6 text-[#BB5042]' />
      <span className=' text-[#B6B6B6] text-[28px]'>|</span>
      <CiTrash className='w-6 h-6 text-[#BB5042]' />
    </div>
  </div>
  <div className='w-full flex pb-6 pt-4 justify-between'>
    <div className='flex gap-2 items-center'>
      <span className='font-bold text-[16px]'>Attendant Status</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><IoCheckmarkCircleOutline className='w-6 h-6 text-[#08A647]' /></span>
      <span>7 Guardians</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><AiOutlineMinusCircle className='w-6 h-6 text-[#BB5042] text-opacity-50' /></span>
      <span>3 Guardians</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><RxCrossCircled className='w-6 h-6 text-[#BB5042]' /></span>
      <span>2 Guardians</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><LiaChalkboardTeacherSolid className='w-6 h-6 text-[#BB5042]' /></span>
      <span>Class VI | B</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><HiOutlineUserGroup className='w-6 h-6 text-[#BB5042]' /></span>
      <span>10 Guardians</span>
    </div>
  </div>
</div>


<div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#A7BEAE] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">24</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[14px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042]' /></span>
          <p className="text-[14px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="text-right max-h-full space-y-4 gap-4">
      <div className="text-[14px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-4 h-4'/></span>
        <span>2:00 PM - 4:00 PM</span>
        </div>
      <div className="text-[14px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-4 h-4'/></span>
        <span>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#98AD9E] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-4 py-2">
      <span className=' font-bold'> Arranged by </span>Me
      </button>
    </div>
    <div className="flex gap-4 items-center mr-4">
      <FiEdit className='w-6 h-6 text-[#BB5042]' />
      <span className=' text-[#B6B6B6] text-[28px]'>|</span>
      <CiTrash className='w-6 h-6 text-[#BB5042]' />
    </div>
  </div>
  <div className='w-full flex pb-6 pt-4 justify-between'>
    <div className='flex gap-2 items-center'>
      <span className='font-bold text-[16px]'>Attendant Status</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><IoCheckmarkCircleOutline className='w-6 h-6 text-[#08A647]' /></span>
      <span>5 Guardians</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><AiOutlineMinusCircle className='w-6 h-6 text-[#BB5042] text-opacity-50' /></span>
      <span>3 Guardians</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><RxCrossCircled className='w-6 h-6 text-[#BB5042]' /></span>
      <span>2 Guardians</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><LiaChalkboardTeacherSolid className='w-6 h-6 text-[#BB5042]' /></span>
      <span>Class VI | B</span>
    </div>
    <div className='flex gap-2 items-center'>
      <span><HiOutlineUserGroup className='w-6 h-6 text-[#BB5042]' /></span>
      <span>10 Guardians</span>
    </div>
  </div>
</div>


<div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#85392F] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">24</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[14px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042]' /></span>
          <p className="text-[14px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="text-right max-h-full space-y-4 gap-4">
      <div className="text-[14px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-4 h-4'/></span>
        <span>2:00 PM - 4:00 PM</span>
        </div>
      <div className="text-[14px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-4 h-4'/></span>
        <span>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#85392F] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-4 py-2">
      <span className=' font-bold'> Arranged by </span>Guardians
      </button>
    </div>
    <div className="flex gap-4 items-center mr-4">
      <FiEdit className='w-6 h-6 text-[#BB5042]' />
      <span className=' text-[#B6B6B6] text-[28px]'>|</span>
      <CiTrash className='w-6 h-6 text-[#BB5042]' />
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
      </div>
    </div>
  );
}

export default Parents_Teachers_Collaboration;
