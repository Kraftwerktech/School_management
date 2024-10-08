import React from 'react';
import Absence from '../../../assets/Teacher/icons/Absence.png';
import Present from '../../../assets/Teacher/icons/Vector.png';
import { PiStudent } from 'react-icons/pi';
const AttendanceOverview = () => {
  
  return (
    <div className=' border-[1px] border-[#E8E8E8] rounded-[8px]'>
      <h3 className=' ml-10 text-[20px] text-[#465049] font-semibold mt-5'>Attendance Overview</h3>
      <div className="grid grid-cols-3 ml-10 mr-10 gap-[16px] mb-10 mt-5 h-[200px]">
          <div className="h-full rounded-[12px] bg-[#A7BEAE] p-4">
            <div className=" flex flex-col items-center">
              <div className=' mb-6 flex text-center'>
              <span className="block text-[25px] text-[#465049] font-semibold">Total Students</span>
              </div>
              <div className=' flex gap-[40px] items-center'>
              <div className="flex items-center justify-center bg-[#77877C] w-[80px] h-[80px] rounded-full">
                <PiStudent className="w-[50px] text-white h-[50px]" />
              </div>
              <span className="block text-[49px] text-[#465049] font-bold">80</span>
              </div>
            </div>
          </div>

          <div className="h-full rounded-[12px] bg-[#daefe0] p-4">
            <div className="flex flex-col items-center">
              <div className=' mb-6 flex text-center'>
              <span className="block text-[25px] text-[#465049] font-semibold">Today’s Present </span>
              </div>
              <div className='flex gap-[40px] items-center'>
              <div className="flex justify-center items-center bg-[#08A647] w-[80px] h-[80px] rounded-full">
                <img src={Present} className="w-[50px] text-white h-[50px]" />
              </div>
              <div>
              <span className="block text-[49px] text-[#465049] font-bold">
                  70
              </span>
              </div>
              </div>
            </div>
          </div>
          <div className="h-full rounded-[12px] bg-[#F8EEEC] p-4">
            <div className="flex  flex-col items-center">
              <div className=' mb-6 flex text-center'>
              <span className="block text-[25px] text-[#465049] font-semibold">Today’s Absence</span>
              </div>

              <div className='flex gap-[40px] items-center'>
              <div className="flex justify-center items-center bg-[#C97368] w-[80px] h-[80px] rounded-full">
                <img src={Absence} className="w-[50px] text-white h-[50px]" />
              </div>
              <div>
              <span className="block text-[49px] text-[#465049] font-bold">
              10
                </span> 
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  );
};

export default AttendanceOverview;
