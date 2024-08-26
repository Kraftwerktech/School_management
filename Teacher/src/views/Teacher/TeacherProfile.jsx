import React from 'react';
import { PiStudentDuotone } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { MdMenuBook } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BsCalendarDate } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { MdOutlineBloodtype } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import teacher from '../../assets/Teacher/teacher.jpg'

const TeacherProfile = () => {
  return (
    <div className='max-w-full'>
        <h3 className=' font-semibold text-[31px]'>Profile</h3>
         <div className=" max-w-full mr-[47px] mt-5  flex items-center justify-center">
      <div className=" w-[1200px] h-[566px] pt-2 bg-white rounded-lg  flex flex-col md:flex-row gap-6">
        {/* Profile Image and Name */}
        <div className="flex flex-col  items-center md:items-start  w-[238px]">
        <div className='w-[220px] h-[250px]'>
        <img
            src={teacher} // Replace with your image path
            alt="Teacher"
            className="w-full h-full items-center rounded-t-lg  object-cover"
          />
          <div className='bg-[#BB5042] p-2 rounded-b-lg  text-center text-white'><h2 className="text-xl font-semibold  text-white">Mohammad Ibrahim</h2>
          <span className="text-sm">Assistant Teacher</span></div>
        </div>
          
          
        </div>

        {/* Profile Information */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 border-[1px] p-8 gap-4 rounded-[8px] mb-5">
          <div className=' border-b-[1px] gap-1'>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span><MdMenuBook className='h-6 w-6 text-[#BB5042]'/></span>
            <span className=' text-[16px]'>Subject Name</span>
                
                </h3>
            <p className="text-[#939393] text-[16px] mt-3">Math</p>
          </div>
          <div className=' border-b-[1px]'>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span><LiaChalkboardTeacherSolid className='h-6 w-6 text-[#BB5042]'/></span>
            <span className=' text-[16px]'>Assigned Class</span>
                </h3>
            <p className="text-[#939393] mt-3">IX</p>
          </div>
          <div className=' border-b-[1px] p-2 gap-1'>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span ><BsCalendarDate className='h-6 w-6 text-[#BB5042]'/></span>
            <span className=' text-[16px]'>Joining Date</span>
              </h3>
            <p className="text-[#939393] text-[16px] mt-3">1 May 2009</p>
          </div>
          <div className=' border-b-[1px] p-2 gap-1'>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span><MdOutlineBloodtype className='h-6 w-6 text-[#BB5042]'/></span>
               <span className=' text-[16px]'> Blood Group</span></h3>
            <span className="text-[#939393] text-[16px] mt-3">O+</span>
          </div>
          <div className=' border-b-[1px] p-2 gap-1'>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span><CiMobile2 className='h-6 w-6 text-[16px] text-[#BB5042]'/></span>
            <span className=' text-[16px]'> Mobile Number</span>
               </h3>
            <p className="text-[#939393] text-[16px] mt-3">01400000000</p>
          </div>
          <div className=' border-b-[1px] p-2 gap-1'>
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span><TfiEmail className='h-6 w-6 text-[#BB5042]'/></span>
            <span className='text-[16px'>Email</span>
                </h3>
            <p className="text-[#939393] className='text-[16px' mt-3">ibrahim@gmail.com</p>
          </div>
          <div className="col-span-1 md:col-span-2  border-b-[1px] gap-1">
            <h3 className="text-gray-600 font-medium flex gap-2">
            <span ><CiLocationOn className='h-6 w-6 text-[#BB5042]'/>
            </span>
            <span className='text-[16px'>
            Address
            </span>
              </h3>
            <p className="text-[#939393] mt-3">House # 20, Flat-5 D, Road # 11, Banani, Dhaka</p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-gray-600 font-medium flex gap-2">
                <span><PiStudentDuotone className='h-6 w-6 text-[#BB5042]'/></span>
                <span className='text-[16px]'> Education</span>
               </h3>
            <p className="text-[#939393] text-[16px] mt-3">
              M.A. English Lectures. Dhaka University, 1st Class
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default TeacherProfile;
