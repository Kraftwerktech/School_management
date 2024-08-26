import React, { useState } from 'react';
import { PiStudentDuotone } from "react-icons/pi";
import { BsFiletypePdf, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { CiMobile2, CiLocationOn } from "react-icons/ci";
import { MdOutlineBloodtype } from "react-icons/md";
import { TbFileCertificate } from "react-icons/tb";
import { PiMosqueThin } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa";
import { RiParentLine } from "react-icons/ri";
import { HiOutlineHome } from "react-icons/hi2";
import teacher from '../../assets/Teacher/student.jpeg';

const StudentDirectory = () => {

  const [showAcademicReport, setShowAcademicReport] = useState(true);
  const [showMedicalInfo, setShowMedicalInfo] = useState(true);

  return (
    <div className="max-w-[1200px]">
      <h3 className=' font-semibold text-[31px]  mb-8'>Student Information</h3>
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-[1200px] bg-white rounded-lg flex flex-col md:flex-row gap-6">
          {/* Profile Image and Name */}
          <div className="flex flex-col items-center md:items-start w-[240px]">
            <div className='w-[220px] h-[250px]'>
              <img
                src={teacher}
                alt="Teacher"
                className="w-full h-full rounded-t-lg object-cover"
              />
              <div className='bg-[#BB5042] p-2 text-center text-white'>
                <h2 className="text-xl font-semibold">Marceline Avila</h2>
              </div>
              <div className='bg-[#BB5042] p-2  mt-[1px] text-center text-white'>
                <span className="text-sm">Class-VIII</span>
              </div>
              <div className='bg-[#BB5042] p-2 mt-[1px] text-center text-white'>
                <span className="text-sm">Section - D</span>
              </div>
              <div className='bg-[#BB5042] p-2 mt-[1px] rounded-b-lg text-center text-white'>
                <span className="text-sm">Roll - 01</span>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 border-[1px] p-8 gap-4 rounded-[8px] mb-5">
            <div className="col-span-1 md:col-span-2 pb-2 border-b-[1px]">
              <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                <PiStudentDuotone className='h-6 w-6 text-[#BB5042]' />
                Student ID
              </h3>
              <span className="text-[#939393] text-[14px]">45983290420055</span>
            </div>
            <div className='border-b-[1px] gap-1 p-2'>
              <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                <BsCalendarDate className='h-6 w-6 text-[#BB5042]' />
                Date of Birth
              </h3>
              <span className="text-[#939393] text-[14px]">20 Sep 2002</span>
            </div>
            <div className='border-b-[1px] gap-1 p-2'>
              <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                <TbFileCertificate className='h-6 w-6 text-[#BB5042]' />
                Birth Certificate Number
              </h3>
              <span className="text-[#939393] text-[14px]">4848 7474 8887</span>
            </div>
            <div className='border-b-[1px] gap-1 p-2'>
              <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                <PiMosqueThin className='h-6 w-6 text-[#BB5042]' />
                Religion
              </h3>
              <span className="text-[#939393] text-[14px]">Islam</span>
            </div>
            <div className='border-b-[1px] gap-1 p-2'>
              <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                <MdOutlineBloodtype className='h-6 w-6 text-[#BB5042]' />
                Blood Group
              </h3>
              <span className="text-[#939393]  text-[14px]">A+</span>
            </div>

            <div className='bg-[#F8F8F1] border-[1px] max-h-[376px] max-w-full rounded-[8px]'>
              <div className='border-b-[1px] gap-1 p-2'>
                <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                  <RiParentLine className='h-6 w-6 text-[#BB5042]' />
                  Guardian 1
                </h3>
                <span className="text-[#939393] text-[14px] ">Md. Rhamna</span>

              </div>
              <div className='border-b-[1px] gap-1 p-2'>
                <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                  <HiOutlineHome className='h-6 w-6 text-[#BB5042]' />
                  Relation
                </h3>
                <span className="text-[#939393] text-[14px] ">Father</span>

              </div>
              <div className='border-b-[1px] gap-1 p-2'>
                <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                  <CiMobile2 className='h-6 w-6 text-[#BB5042]' />
                  Father's Mobile Number
                </h3>
                <span className="text-[#939393] text-[14px]">01753746826</span>
              </div>
              <div className=' gap-1 p-2'>
                <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                  <FaRegAddressCard className='h-5 w-5 text-[#BB5042]' />
                  <span>Father’s NID Number</span>
                </h3>
                <span className="text-[#939393] text-[14px]">47483290420089</span>
              </div>
            </div>


            <div className='bg-[#F8F8F1] max-h-[376px] border-[1px] max-w-full rounded-[8px]'>
              <div className='border-b-[1px] gap-1 p-2'>
                <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                  <RiParentLine className='h-6 w-6 text-[#BB5042]' />
                  Guardian 2
                </h3>
                <span className="text-[#939393] text-[14px] ">Mrs. Aysha</span>

              </div>
              <div className='border-b-[1px] gap-1 p-2'>
                <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                  <HiOutlineHome className='h-6 w-6 text-[#BB5042]' />
                  Relation
                </h3>
                <span className="text-[#939393] text-[14px] ">Mother</span>

              </div>
              <div className='border-b-[1px] gap-1 p-2'>
                <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                  <CiMobile2 className='h-6 w-6 text-[#BB5042]' />
                  Mother's Mobile Number
                </h3>
                <span className="text-[#939393] text-[14px]">01553746829</span>
              </div>

              <div className=' gap-1 p-2'>
                <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                  <FaRegAddressCard className='h-6 w-6 text-[#BB5042]' />
                  <span className='text-[14px]'>Mother's NID Number</span>
                </h3>
                <span className="text-[#939393] text-[14px] mt-3">47483290420080</span>
              </div>

            </div>



            <div className="col-span-1 md:col-span-2 p-2">
              <h3 className="text-[#151515] text-[14px] mb-3 font-medium flex gap-2">
                <CiLocationOn className='h-6 w-6 text-[#BB5042]' />
                Address
              </h3>
              <p className="text-[#939393] mt-3 text-[14px]">House # 20, Flat-5 D, Road # 11, Banani, Dhaka</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-3'>
        {/* Academic Report */}
        <div className='mb-8 border-[1px] rounded-[8px]'>
          <div className='bg-[#A7BEAE] p-4 rounded-t-[8px] justify-between flex text-[20px] font-bold text-white'>
            <h3 className=' text-[25px]'>Academic Report</h3>
            <div className='mr-5 mt-3' onClick={() => setShowAcademicReport(!showAcademicReport)}>
              {showAcademicReport ? (
                <BsChevronUp className="text-white w-5 h-5" />
              ) : (
                <BsChevronDown className="text-white w-5 h-5" />
              )}
            </div>

          </div>
          {showAcademicReport && (
            <div className='bg-transparent p-4'>
              <table className="min-w-full table-auto">
                <thead className="bg-[#E4EBE6]">
                  <tr className="text-left text-[16px] text-[#465049]">
                    <th className="px-4 py-2">SL</th>
                    <th className="px-4 py-2">Class</th>
                    <th className="px-4 py-2">Grade</th>
                    <th className="px-4 py-2">Rank</th>
                    <th className="px-4 py-2">Total Marks</th>
                    <th className="px-4 py-2">Achievement</th>
                    <th className="px-4 py-2">Report Card</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b-[1px] text-[16px]'>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">VII</td>
                    <td className="px-4 py-2">A+</td>
                    <td className="px-4 py-2">5th</td>
                    <td className="px-4 py-2">550/600</td>
                    <td className="px-4 py-2">Excellent</td>
                    <td className="px-4 py-2 pl-10">
                      <BsFiletypePdf className="text-red-500 w-8 h-8 cursor-pointer" />
                    </td>
                  </tr>
                  <tr className='text-[16px] border-b-[1px]'>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">VI</td>
                    <td className="px-4 py-2">A</td>
                    <td className="px-4 py-2">7th</td>
                    <td className="px-4 py-2">530/600</td>
                    <td className="px-4 py-2">Very Good</td>
                    <td className="px-4 py-2 pl-10">
                      <BsFiletypePdf className="text-red-500 w-8 h-8 cursor-pointer" />
                    </td>
                  </tr>
                  <tr className='text-[16px]'>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">VI</td>
                    <td className="px-4 py-2">A</td>
                    <td className="px-4 py-2">7th</td>
                    <td className="px-4 py-2">530/600</td>
                    <td className="px-4 py-2">Very Good</td>
                    <td className="px-4 py-2 pl-10">
                      <BsFiletypePdf className="text-red-500 w-8 h-8 cursor-pointer" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Medical Information */}
        <div className='mb-8 border-[1px] rounded-[8px]'>
          <div className='bg-[#A7BEAE] justify-between flex rounded-t-[8px] p-4 text-[20px] font-bold text-white'>
            <h3 className=' text-[25px]'>Medical Information</h3>
            <div onClick={() => setShowMedicalInfo(!showMedicalInfo)} className='mr-5 mt-3'>
              {showMedicalInfo ? (
                <BsChevronUp className="text-white w-5 h-5" />
              ) : (
                <BsChevronDown className="text-white w-5 h-5" />
              )}
            </div>

          </div>
          {showMedicalInfo && (
            <div className='bg-[#F6F9F7] p-4 '>
              <table className="min-w-full ">
                <thead className="bg-[#E4EBE6]">
                  <tr className="text-left text-[16px]  text-[#465049]">
                    <th className="px-4 py-2">SL</th>
                    <th className="px-4 py-2">Name of Disease</th>
                    <th className="px-4 py-2">Descriptions</th>
                    <th className="px-4 py-2">Report Card</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b-[1px] text-[16px]'>
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Asthma</td>
                    <td className="px-4 py-2">Chronic condition managed by medication</td>
                    <td className="px-4 py-2 pl-7">
                      <BsFiletypePdf className="text-red-500 ml-[5px] w-8 h-8 cursor-pointer" />
                    </td>
                  </tr>
                  <tr className='text-[16px] border-b-[1px]'>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">Allergy</td>
                    <td className="px-4 py-2">Allergic to peanuts</td>
                    <td className="px-4 py-2 pl-7">
                      <BsFiletypePdf className="text-red-500 ml-[5px] w-8 h-8  cursor-pointer" />
                    </td>
                  </tr>
                  <tr className='text-[16px]'>
                    <td className="px-4 py-2">2</td>
                    <td className="px-4 py-2">Allergy</td>
                    <td className="px-4 py-2">Allergic to peanuts</td>
                    <td className="px-4 py-2 pl-7">
                      <BsFiletypePdf className="text-red-500 ml-[5px] w-8 h-8  cursor-pointer" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDirectory;
