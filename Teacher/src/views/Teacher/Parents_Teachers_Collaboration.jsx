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

//meetingCreateModel
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

//EditMeetingModel
function EditMeetingModal({setEditShowModal}) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white w-[1140px] rounded-lg shadow-lg p-8 max-w-[1000px] relative">
        <div className="text-center pb-4">
          <h3 className="text-[31px] font-semibold">Edit Meeting</h3>
          <button
            onClick={() => {
              console.log('Close button clicked');
              setEditShowModal(false);
            }}
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
                  className="px-2 py-2 w-[130px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042]"
                  placeholderText="Select Date"
                  dateFormat="dd MMMM yyyy"
                />
              </div>
              <div className='flex items-center gap-3'>
                <input
                  type="time"
                  className="rounded-md px-2 py-2 outline-none border bg-transparent border-slate-300  focus:border-[#BB5042]"
                  defaultValue="11:00"
                />
                <span className='text-[16px]'>to</span>
                <input
                  type="time"
                  className="px-2 py-2 outline-none border bg-transparent border-slate-300 rounded-md focus:border-[#BB5042]"
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


//StatusModel
function SubmitStatusModal({ setStatusModal }) {
  const [OutcomeStatusModal,setOutcomeStatusModal]=useState(false);
  const [resonStatusModal,setResonStatusModal]=useState(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
  <div className="bg-white w-[400px] rounded-lg shadow-lg p-8  relative">
    <div className="pb-4">
      <h3 className="text-[18px] font-semibold">Was the Meeting Conducted?</h3>
      <button
        onClick={() => setStatusModal(false)}
        className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
      >
        <RxCrossCircled className='w-6 h-6' />
      </button>
    </div>
      <div className="flex justify-between m-5">
        <div>
        <button  onClick={() => setOutcomeStatusModal(true)}
          type="submit"
          className="px-12 py-3 border rounded-md bg-[#BB5042] text-white hover:bg-[#a0443c]"
        >
          Yes
        </button>
        {OutcomeStatusModal && <IOutcomeStatusModal setOutcomeStatusModal={setOutcomeStatusModal} />}
        </div>
      <div>
      <button onClick={() => setResonStatusModal(true)}
          type="submit"
          className="px-12 py-3 border-[1px] border-[#BB5042] rounded-md "
        >
          No
        </button>
        {resonStatusModal && <IResonStatusModal setResonStatusModal={setResonStatusModal} />}
      </div>
       
      </div>
    
  </div>
</div>
  

  );
}

//outcomeMeeting
function IOutcomeStatusModal({ setOutcomeStatusModal }) {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50 bg-black bg-opacity-50">
  <div className="bg-white w-[400px] rounded-lg shadow-lg p-8  relative">
    <div className="pb-4">
      <h3 className="text-[16px] text-center mt-5">What was the Outcome of the Meeting?</h3>
      <button
        onClick={() => setOutcomeStatusModal(false)}
        className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
      >
        <RxCrossCircled className='w-6 h-6' />
      </button>
    </div>
    <div>
    <div className=' justify-start mt-5 text-start'>
      <div className='mb-2'>
      <label className=" text-gray-500 mt-2">Comments</label>
      </div>
        
        <textarea
          className="px-5 py-1 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
          placeholder="Enter Comments"
          rows="4"
        />
      </div>
    </div>
      <div className="flex justify-center mt-10 mb-2">
        <button
          type="submit"
          className="px-12 w-full py-3 border rounded-md bg-[#BB5042] text-white hover:bg-[#a0443c]"
        >
          Submit
        </button>
        
      </div>
    
  </div>
</div>
  

  );
}

//resonStatusModal
function IResonStatusModal({ setResonStatusModal }) {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
  <div className="bg-white w-[400px] rounded-lg shadow-lg p-8  relative">
    <div className="pb-4">
      <h3 className="text-[16px] mt-10">What was the Reason the Meeting did not Take Place?</h3>
      <button
        onClick={() => setResonStatusModal(false)}
        className="text-gray-500 hover:text-gray-700 absolute top-4 right-4"
      >
        <RxCrossCircled className='w-6 h-6' />
      </button>
    </div>
    <div>
    <div className=' justify-start mt-5 text-start'>
      <div className='mb-2'>
      <label className=" text-gray-500 mt-2">Reason</label>
      </div>
        
        <textarea
          className="px-5 py-1 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
          placeholder="Enter Reason"
          rows="4"
        />
      </div>
    </div>
      <div className="flex justify-center mt-10 mb-2">
        <button
          type="submit"
          className="px-12 w-full py-3 border rounded-md bg-[#BB5042] text-white hover:bg-[#a0443c]"
        >
          Submit
        </button>
        
      </div>
    
  </div>
</div>
  

  );
}

function Parents_Teachers_Collaboration() {
  const [showPopup, setShowPopup] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCardrejected, setisCardrejected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editshowModal,  setEditShowModal] = useState(false);
  const [StatusModal,setStatusModal]=useState(false);
  
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
      <div className='max-w-[700px]'>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[16px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042] w-5 h-5' /></span>
          <p className="text-[18px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="max-h-full space-y-4 gap-4">
      <div className="text-[16px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-5 h-5'/></span>
        <span>3:00 PM - 5:00 PM</span>
        </div>
      <div className="text-[16px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-5 h-5'/></span>
        <span>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#98AD9E] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-7 py-2">
      <span className=' font-bold'> Arranged by </span>Me
      </button>
    </div>
    <div className="flex items-center pr-4 space-x-4">
  <button onClick={() => setEditShowModal(true)} className="flex items-center">
    <FiEdit className="w-6 h-6 text-[#BB5042]" />
    {editshowModal && <EditMeetingModal setEditShowModal={setEditShowModal} />}
  </button>
  <span className="text-[#B6B6B6] text-[28px]">|</span>
  <button className="flex items-center">
    <CiTrash className="w-6 h-6 text-[#BB5042]" />
  </button>
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
              onMouseEnter={() => setisCardrejected(true)}
              onMouseLeave={() => setisCardrejected(false)}
            >
              <RxCrossCircled className="w-6 h-6 text-[#BB5042]" />
              <span>3 Guardians</span>
            </div>
            {isCardrejected && (
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
</div>




        {/* Sample Card 2 */}
  <div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#A7BEAE] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">26</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div className='max-w-[700px]'>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[16px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042] w-5 h-5' /></span>
          <p className="text-[16px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="max-h-full pl-[52px] space-y-4 gap-4">
      <div className="text-[16px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-5 h-5'/></span>
        <span>3:00 PM - 5:00 PM</span>
        </div>
      <div className="text-[16px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-5 h-5'/></span>
        <span>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#98AD9E] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-7 py-2">
      <span className=' font-bold'> Arranged by </span>Me
      </button>
    </div>
    <div className="gap-4 w-[140px] h-[140px] items-center justify-center rounded-[12px] text-center bg-[#F8EEEC] mr-4">
      <div className='pt-4 pl-3 pr-3 space-y-3'>
      
      <span className='text-[#767b78] font-semibold text-sm'>Submit the Meeting Status</span>
      
      <button onClick={() => setStatusModal(true)} className='bg-[#BB5042] px-5 py-2 rounded-[8px] text-white'>Status</button>
      {StatusModal && <SubmitStatusModal setStatusModal={setStatusModal} />}
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

{/* Sample Card 3 */}
<div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#A7BEAE] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">26</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div className='max-w-[700px]'>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[16px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042] w-5 h-5' /></span>
          <p className="text-[18px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="max-h-full space-y-4 gap-4">
      <div className="text-[16px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-5 h-5'/></span>
        <span>3:00 PM - 5:00 PM</span>
        </div>
      <div className="text-[16px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-5 h-5'/></span>
        <span>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#98AD9E] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-7 py-2">
      <span className=' font-bold'> Arranged by </span>Me
      </button>
    </div>
    <div className="flex items-center pr-4 space-x-4">
  <button onClick={() => setEditShowModal(true)} className="flex items-center">
    <FiEdit className="w-6 h-6 text-[#BB5042]" />
    {editshowModal && <EditMeetingModal setEditShowModal={setEditShowModal} />}
  </button>
  <span className="text-[#B6B6B6] text-[28px]">|</span>
  <button className="flex items-center">
    <CiTrash className="w-6 h-6 text-[#BB5042]" />
  </button>
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
              onMouseEnter={() => setisCardrejected(true)}
              onMouseLeave={() => setisCardrejected(false)}
            >
              <RxCrossCircled className="w-6 h-6 text-[#BB5042]" />
              <span>3 Guardians</span>
            </div>
            {isCardrejected && (
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
</div>
{/*Simple Card 4*/}
<div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#85392F] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">24</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div className='max-w-[700px]'>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[16px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042] w-5 h-5' /></span>
          <p className="text-[16px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="max-h-full space-y-4 gap-4">
      <div className="text-[14px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-5 h-5'/></span>
        <span className='text-[16px]'>2:00 PM - 4:00 PM</span>
        </div>
      <div className="text-[16px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-5 h-5'/></span>
        <span className='text-[16px]'>Building No. 5, Room 302</span>
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
<div className="border rounded-lg p-5 bg-[#FFFFFF] shadow-sm">
  <div className="flex justify-between border-b-[2px] pb-8 items-center">
    <div className="flex gap-4">
      <div className="bg-[#A7BEAE] rounded-md text-center p-2 h-[118px] w-[112px]">
        <p className="text-[45px] font-bold text-[#ffffff]">26</p>
        <p className="text-[20px] font-semibold text-[#ffffff]">August</p>
      </div>
      <div className='max-w-[700px]'>
        <p className="text-[20px] text-[#465049] font-bold">Meeting Agenda</p>
        <p className="text-[16px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...Lorem ipsum dolor sit amet consectetur. Gravida eu aliquam...</p>
        <div className="flex gap-2 mt-2">
          <span><BsFiletypePdf className='text-[#BB5042] w-5 h-5' /></span>
          <p className="text-[18px] text-[#BB5042]">Class Syllabus.pdf</p>
        </div>
      </div>
    </div>
    <div className="max-h-full space-y-4 gap-4">
      <div className="text-[16px]  font-medium flex gap-2 items-center text-[#6B7280]">
        <span><SlClock className='text-[#BB5042] w-5 h-5'/></span>
        <span>3:00 PM - 5:00 PM</span>
        </div>
      <div className="text-[16px] flex  gap-2 items-center font-medium text-[#6B7280]">
        <span><GoLocation className='text-[#BB5042] w-5 h-5'/></span>
        <span>Building No. 5, Room 302</span>
       </div>
      <button className="mt-2 bg-[#98AD9E] text-[#FFFF] border-[1px] border-[#E5E7EB] rounded-md px-7 py-2">
      <span className=' font-bold'> Arranged by </span>Me
      </button>
    </div>
    <div className="flex items-center pr-4 space-x-4">
  <button onClick={() => setEditShowModal(true)} className="flex items-center">
    <FiEdit className="w-6 h-6 text-[#BB5042]" />
    {editshowModal && <EditMeetingModal setEditShowModal={setEditShowModal} />}
  </button>
  <span className="text-[#B6B6B6] text-[28px]">|</span>
  <button className="flex items-center">
    <CiTrash className="w-6 h-6 text-[#BB5042]" />
  </button>
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
              onMouseEnter={() => setisCardrejected(true)}
              onMouseLeave={() => setisCardrejected(false)}
            >
              <RxCrossCircled className="w-6 h-6 text-[#BB5042]" />
              <span>3 Guardians</span>
            </div>
            {isCardrejected && (
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
</div>
      </div>
    </div>
  );
}

export default Parents_Teachers_Collaboration;
