import React, { useState } from 'react';
import { SlArrowLeftCircle } from "react-icons/sl";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdExpandMore } from 'react-icons/md';
import { CiTrash } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { Link } from 'react-router-dom';

function AddActivity() {
    const [showAcademicReport, setShowAcademicReport] = useState(true);
    const [showMedicalInfo, setShowMedicalInfo] = useState(true);

    return (
        <div className='max-w-full mb-10'>
            {/* Header Section */}
            <div className='flex gap-4 items-center mt-5'>
                <SlArrowLeftCircle className='text-[#BB5042] w-7 h-7' />
                <span className='text-[31px] font-semibold'>Lesson 12</span>
                <span className='text-[#939393] text-[16px]'>Class IX | Section-B</span>
            </div>

            {/* Academic Report Section */}
            <div className='mt-10 mb-6'>

                <div className='mb-8 mr-12 border-[1px] rounded-[8px]'>
                    <div className='bg-[#A7BEAE] p-4 rounded-t-[8px] justify-between flex text-[20px] font-bold text-white'>
                        <h3 className='text-[25px]'>Topic</h3>
                        <div className='mr-5 mt-3 cursor-pointer' onClick={() => setShowAcademicReport(!showAcademicReport)}>
                            {showAcademicReport ? (
                                <BsChevronUp className="text-white w-5 h-5" />
                            ) : (
                                <BsChevronDown className="text-white w-5 h-5" />
                            )}
                        </div>
                    </div>
                    {showAcademicReport && (
                        <div className='bg-transparent p-4'>
                            <div className='flex gap-16'>
                                <div className='gap-9 flex'>
                                    <input
                                        className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[300px]"
                                        type="text"
                                        name="search"
                                        placeholder="Search by Student Name or ID"
                                    />
                                    <div className="relative w-full md:w-[200px]">
                                        <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
                                            <option value="">Select Class</option>
                                            <option>Class IX</option>
                                            <option>Class X</option>
                                            <option>Class XI</option>
                                            <option>Class XII</option>
                                        </select>
                                        <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='flex gap-4 items-center'>
                                        <span>Page Number</span>
                                        <input
                                            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]"
                                            type="text"
                                            name="search"
                                            placeholder="From"
                                        />
                                        <span>to</span>
                                        <input
                                            className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]"
                                            type="text"
                                            name="search"
                                            placeholder="To"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='mt-10 mb-5 mr-5'>
                                <input
                                    className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full"
                                    type="text"
                                    name="search"
                                    placeholder="Topic Title"
                                />
                            </div>

                            <div className='mt-10 max-w-full mr-5'>
                                <textarea placeholder='Write Topic'
                                    className='px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full h-[200px]'>
                                </textarea>
                            </div>
                            <div className='flex mt-5 mr-5 justify-end'>
                                <Link to="http://localhost:5173/teacher/dashboard/addlessonaddtropic" className=' bg-[#BB5042]  text-[#FFFF] rounded-[8px]  px-5 py-2' >Add Topic</Link>

                            </div>

                            <div className='mt-5 flex justify-between border-b-[1px] mr-5'>
                                <span className='text-[20px] font-bold mb-2'>List of Topics</span>
                                <span><MdExpandMore className='w-6 h-6 mb-2 text-[#151515]' /></span>
                            </div>
                            <div className='mt-2'>
                                <div className='flex justify-between border-b-[1px] items-center mt-5 mr-5'>
                                    <span className='text-[16px] mb-3 font-bold'>Topic 35</span>
                                    <span className=' items-center mb-3 flex gap-10'>
                                        <FiEdit className='w-6 mb-3 h-6 text-[#BB5042]' />
                                        <CiTrash className='w-6 mb-3 h-6 text-[#BB5042]' />
                                    </span>
                                </div>
                                <div className='mt-3'>
                                    <span className=' text-[16px] text-[#939393] font-semibold'>Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35</span>
                                </div>
                                <div className='flex   gap-2'>
                                    <span className='text-[#465049] space-y-3 font-semibold'>Topic Title:</span>
                                    <span className='space-y-3'>Lorem ipsum dolor sit amet consectetur.</span>
                                </div>
                                <div className='text-[16px] text-[#465049]'>
                                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
                                </div>
                            </div>
                            <div className='mt-2'>
                                <div className='flex justify-between border-b-[1px] items-center mt-5 mr-5'>
                                    <span className='text-[16px] mb-3 font-bold'>Topic 36</span>
                                    <span className=' items-center mb-3 flex gap-10'>
                                        <FiEdit className='w-6 mb-3 h-6 text-[#BB5042]' />
                                        <CiTrash className='w-6 mb-3 h-6 text-[#BB5042]' />
                                    </span>
                                </div>
                                <div className='mt-3'>
                                    <span className=' text-[16px] text-[#939393] font-semibold'>Oxford textbooks Science, Class IX | Chapter 5 | Page 20-35</span>
                                </div>
                                <div className='flex   gap-2'>
                                    <span className='text-[#465049] space-y-3 font-semibold'>Topic Title:</span>
                                    <span className='space-y-3'>Lorem ipsum dolor sit amet consectetur.</span>
                                </div>
                                <div className='text-[16px] mb-5 text-[#465049]'>
                                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
                                </div>
                            </div>

                        </div>
                    )}
                </div>





                {/* Medical Information Section */}
                <div className='mb-8 mr-12 border-[1px] rounded-[8px]'>
                    <div className='bg-[#A7BEAE] justify-between flex rounded-t-[8px] p-4 text-[20px] font-bold text-white'>
                        <h3 className='text-[25px]'>Activity</h3>
                        <div onClick={() => setShowMedicalInfo(!showMedicalInfo)} className='mr-5 mt-3 cursor-pointer'>
                            {showMedicalInfo ? (
                                <BsChevronUp className="text-white w-5 h-5" />
                            ) : (
                                <BsChevronDown className="text-white w-5 h-5" />
                            )}
                        </div>
                    </div>
                    {showMedicalInfo && (
                        <div className='bg-transparent p-4'>
                            <div className='flex gap-16'>
                                <div className='gap-9 flex'>
                                    <div className="relative w-full md:w-[200px]">
                                        <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
                                            <option value="">Select Activity Type</option>
                                            <option>Class IX</option>
                                            <option>Class X</option>
                                            <option>Class XI</option>
                                            <option>Class XII</option>
                                        </select>
                                        <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                    </div>
                                    <input
                                        className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]"
                                        type="text"
                                        name="search"
                                        placeholder="Time"
                                    />
                                    <input
                                        className="px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full md:max-w-[100px]"
                                        type="text"
                                        name="search"
                                        placeholder="Mark"
                                    />
                                </div>

                            </div>

                            <div className='mt-10 gap-14 flex items-center mb-5 mr-5'>
                                <div className="relative w-full md:w-[200px]">
                                    <select className="appearance-none px-4 py-2 outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full">
                                        <option value="">Select Lesson</option>
                                        <option>Class IX</option>
                                        <option>Class X</option>
                                        <option>Class XI</option>
                                        <option>Class XII</option>
                                    </select>
                                    <MdExpandMore className="absolute text-[#BB5042] right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                                </div>
                                <div className=' flex gap-3'>
                                    <span className=' text-[16px] font-semibold text-[#465049]'>Select Topic</span>
                                    <GoPlusCircle className='w-6 h-6 text-[#BB5042]' />
                                </div>

                            </div>

                            <div className='mt-10 max-w-full mr-5'>
                                <textarea placeholder='Write Activity'
                                    className='px-5 py-2 placeholder:text-[13px] outline-none border bg-transparent border-slate-300 rounded-md text-gray-700 focus:border-[#BB5042] w-full h-[200px]'>
                                </textarea>
                            </div>
                            <div className='flex mt-5 mr-5 justify-between mb-10'>
                                <span className=' flex items-center text-[16px] text-[#465049]  gap-3'>Add Attachment <GrAttachment className='w-6 h-6 text-[#BB5042]' /></span>
                                <button className=' bg-[#B6B6B6] font-bold text-[#626262] rounded-[8px]  px-5 py-2'>Add Topic</button>
                            </div>

                            <div className='mt-5 flex justify-between border-b-[1px] mr-5'>
                                <span className='text-[20px] font-bold mb-2'>List of Activity</span>
                                <span><MdExpandMore className='w-6 h-6 mb-2 text-[#151515]' /></span>
                            </div>
                            <div className='mt-2'>
                                <div className='flex justify-between border-b-[1px] items-center mt-5 mr-5'>
                                    <span className='text-[16px] mb-3 font-bold'>Activity 45</span>
                                    <span className=' items-center mb-3 flex gap-10'>
                                        <FiEdit className='w-6 mb-3 h-6 text-[#BB5042]' />
                                        <CiTrash className='w-6 mb-3 h-6 text-[#BB5042]' />
                                    </span>
                                </div>
                                <div className='mt-3'>
                                    <span className=' text-[16px] font-semibold'>Board Work | 10 min</span> <br />
                                    <span className=' text-[16px] text-[#939393] font-semibold'>Lesson 11</span>
                                </div>
                                <div className='flex   gap-2'>
                                    <span className='text-[#939393] space-y-3 font-semibold'>Topic 22 | Topic Title:</span>
                                    <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
                                </div>
                                <div className='flex   gap-2'>
                                    <span className='text-[#939393] space-y-3 font-semibold'>Topic 23 | Topic Title:</span>
                                    <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
                                </div>
                                <div className='flex  gap-2'>
                                    <span className='text-[#939393] space-y-3 font-semibold'>Topic 24 | Topic Title:</span>
                                    <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
                                </div>
                                <div className=' space-y-4'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <div className='flex justify-between border-b-[1px] items-center mt-5 mr-5'>
                                    <span className='text-[16px] mb-3 font-bold'>Activity 46</span>
                                    <span className=' items-center mb-3 flex gap-10'>
                                        <FiEdit className='w-6 mb-3 h-6 text-[#BB5042]' />
                                        <CiTrash className='w-6 mb-3 h-6 text-[#BB5042]' />
                                    </span>
                                </div>
                                <div className='mt-3'>
                                    <span className=' text-[16px] font-semibold'>Board Work | 10 min</span> <br />
                                    <span className=' text-[16px] text-[#939393] font-semibold'>Lesson 11</span>
                                </div>
                                <div className='flex   gap-2'>
                                    <span className='text-[#939393] space-y-3 font-semibold'>Topic 22 | Topic Title:</span>
                                    <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
                                </div>
                                <div className='flex   gap-2'>
                                    <span className='text-[#939393] space-y-3 font-semibold'>Topic 23 | Topic Title:</span>
                                    <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
                                </div>
                                <div className='flex  gap-2'>
                                    <span className='text-[#939393] space-y-3 font-semibold'>Topic 24 | Topic Title:</span>
                                    <span className='space-y-3 text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper. Vitae in leo lorem molestie sit eget quis luctus praesent</span>
                                </div>
                                <div className=' space-y-4'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <div className=' space-y-6 mb-10'>
                <span className=' text-[16px]  ml-[50px] font-semibold mb-5'>Additional Note</span>
                <div className='p-3 border-[1px] rounded-[8px] ml-[50px] mr-[98px]'>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className=' space-y-6 mb-[70px]'>
                <span className=' text-[16px]  ml-[50px] font-semibold mb-5'>Reason</span>
                <div className='p-3 border-[1px] rounded-[8px] ml-[50px] mr-[98px]'>
                    <p className=' text-[#939393]'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className='mt-5 pl-[450px] mb-20'>
                <Link to='/teacher/dashboard/draftLesson'>
                    <button className='py-3 rounded-[8px] px-8 bg-[#BB5042] w-[400px] justify-center items-center text-white'>Save</button>
                </Link>
            </div>
        </div>
    );
}

export default AddActivity;
