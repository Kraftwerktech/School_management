import React from 'react';
import logo from '../../assets/Teacher/logo1.png';
import teacherImage from '../../assets/Teacher/ForgotPassword.svg';
import { Link } from 'react-router-dom';

function Teacherlogin() {
    return (
        <div className=" min-h-screen inset-0 bg-cover bg-[#A7BEAE]">
            <div className="absolute top-2 left-4 md:left-10 mt-3 lg:left-14 pt-7">
                <img src={logo} alt="Logo" className=" h-16 w-full" />
            </div>
            <div className=" justify-center mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px] items-center">
                    <div className="flex flex-col  justify-center items-center text-center">
                        <div className=' text-center justify-center mt-10 items-center w-[650px]'>
                            <h1 className="text-[55px] font-bold text-white mt-[120px]">
                                Forgot Your Password?
                            </h1>
                            <p className=" text-[40px] font-extralight text-slate-200  mt-4">
                                Don't worry, we'll help <br /> you to reset it.
                            </p>
                        </div>

                        <img src={teacherImage} alt="Teacher Illustration" className="w-[523px] h-[464px] mt-6" />
                    </div>
                    <div className='ml-[200px]'>

                        <div className="bg-white h-[746px] max-w-full rounded-l-[56px] gap-4  items-center mt-[100px] p-20 flex flex-col justify-center ">
                            <div className='w-[446px] h-[115px] items-center mb-10 justify-center text-center'>
                                <h2 className="text-[39px] text-[#151515] mb-6 mt-20 font-bold">Verify Your Identity</h2>
                                <span className=' text-[18px] text-[#465049]'>Please enter the email address or mobile number associated with your account to receive OTP.</span>
                            </div>

                            <div className=' mt-[80px] mb-6'>
                                <label className="text-gray-700 text-[18px] flex items-center">
                                    Email or Mobile Number
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Email or Mobile Number"
                                    className="w-[480px] placeholder:text-sm mt-2 p-3  focus:border-[#BB5042] focus:outline-none  border border-gray-300 rounded-lg mb-4"
                                />
                            </div>


                            <Link to='/verified' className='w-[480px] mt-10 h-[60px] mb-[97px] p-3 bg-[#BB5042] text-[20px] text-white text-center rounded-lg'>

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
