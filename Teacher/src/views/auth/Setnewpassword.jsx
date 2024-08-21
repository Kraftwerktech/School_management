import React from 'react';
import logo from '../../assets/Teacher/logo1.png';
import teacherImage from '../../assets/Teacher/resetpass.svg';
import { Link } from 'react-router-dom';
import { CiLock } from "react-icons/ci";
function Teacherlogin() {
    return (
        <div className=" min-h-screen inset-0 bg-cover bg-[#A7BEAE]">
            <div className=" absolute top-2 left-4 md:left-10 mt-3 lg:left-14 pt-7">
                <img src={logo} alt="Logo" className=" h-16 w-full" />
            </div>
            <div className=" justify-center mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px] items-center">
                    <div className="flex flex-col  justify-center items-center text-center">
                        <div className=' text-center justify-center mt-10 items-center w-[650px]'>
                            <h1 className="text-[55px] font-bold text-white mt-[120px]">
                                Password Recovery
                            </h1>
                            <p className=" text-[40px] font-extralight text-slate-200 mb-4  mt-2">
                                <div>  Create a new password to<br />recover your account</div>
                              
                            </p>
                        </div>

                        <img src={teacherImage} alt="Teacher Illustration" className="w-[523px] h-[464px] mt-6" />
                    </div>
                    <div className='ml-[200px]'>
                        <div className="bg-white h-[746px] max-w-full rounded-l-[56px] gap-4  items-center  mt-[100px] mb-[100px] p-[77px] flex flex-col justify-center ">
                            <div className='w-[446px] h-[115px] items-center mb-10 justify-center text-center'>
                                <h2 className="text-[39px] text-gray-700 mb-[24px] mt-20 font-bold">Reset Password</h2>
                            </div>

                            <div>
                                <label className="text-gray-700 text-[18px]  flex items-center">
                                    <CiLock className="text-[#BB5042] mb-2 w-6 h-6 mr-2" />
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="New password"
                                    className="w-[446px] mt-1 p-3  focus:border-[#BB5042] focus:outline-none  border border-gray-300 rounded-lg mb-4"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700  text-[18px] flex items-center">
                                    <CiLock className="text-[#BB5042] mb-2 w-6 h-6 mr-2" />
                                    Confrim Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-[446px] mt-1 p-3  focus:border-[#BB5042] focus:outline-none  border border-gray-300 rounded-lg mb-4"
                                />
                            </div>


                            <Link to='/' className='w-[480px] mt-[35px] h-[60px] mb-[97px] p-3 bg-[#BB5042] text-[20px] text-white text-center rounded-lg'>

                                Continue

                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Teacherlogin;

