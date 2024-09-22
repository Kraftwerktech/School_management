import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 
import { FaPeopleArrows } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaRegAddressCard } from "react-icons/fa";

const Details = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (

    <div className=" mt-5 border-[1px] w-full h-full">
      <div className="bg-[#E4EBE6] p-4 rounded-t-md">
        <h2 className="text-lg font-bold">Details</h2>
      </div>
      <div className="p-4">
        <div className="flex flex-col items-center border-b-[1px] space-y-4">
          <img src="http://localhost:5173/teacher.jpg" alt="profile" className="w-[100px] h-[100px] rounded-full" />
          <div className=' flex justify-center mb-5 pb-4 items-center flex-col'>
            <span className=' text-[16px] text-[#465049] font-medium'>DM 16000024</span>
            <span className="text-xl font-bold">Mohammad Ibrahim</span>
            <span className=' text-[16px] text-[#465049] font-medium'>Class IX | B | Roll 12</span>

          </div>
        </div>
        <div>
      {/* Guardian Info Section */}
      <div className="mt-6">
        <div className="flex border-b-[1px] pb-3 justify-between items-center">
          <h4 className="font-bold">Guardian Info</h4>
          <button onClick={toggleExpand} className="focus:outline-none">
            {isExpanded ? <FiChevronUp className='w-6 h-6 text-[#BB5042]' /> : <FiChevronDown className='w-6 h-6 text-[#BB5042]'  />}
          </button>
        </div>

        {/* Collapsible Content */}
        {isExpanded && (
          <ul className="space-y-2 mt-4">
            <li className=' p-5 border-b-[1px]'>
              <span className="font-bold   text-[20px] flex items-center gap-3">
                <FaPeopleArrows className=' text-[#BB5042] w-7 h-7'/>
                Guardian 1</span> Md. Rubel Hasan
            </li>
            <li className=' p-5 border-b-[1px]'>
              <span className="font-bold   text-[20px] flex items-center gap-3">
                <GiEternalLove className=' text-[#BB5042] w-7 h-7'/>
                Relation</span> Father
            </li>
            <li className=' p-5 border-b-[1px]'>
              <span className="font-bold   text-[20px] flex items-center gap-3">
                <FaRegAddressCard className=' text-[#BB5042] w-7 h-7'/>
                NID</span> 4543982398434
            </li>
            <li className=' p-5 border-b-[1px]'>
              <span className="font-bold   text-[20px] flex items-center gap-3">
                <HiMiniDevicePhoneMobile className=' text-[#BB5042] w-7 h-7'/>
                Mobile Number</span> 01315974775
            </li>
          </ul>
        )}
      </div>

      {/* Attached Documents Section */}
      <div className="mt-6">
        <h4 className="font-bold">Attached Documents</h4>
        <div className="flex space-x-2">
          <img src="http://localhost:5173/12.jpg" alt="document" className="w-12 h-12" />
          <img src="http://localhost:5173/14.jpg" alt="document" className="w-12 h-12" />
          <img src="http://localhost:5173/13.jpg" alt="document" className="w-12 h-12" />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Details;
