import React, { useState } from 'react';
import logo from '../../assets/Teacher/logo1.png';
import teacherImage from '../../assets/Teacher/ForgotPassword.svg';
import { Link } from 'react-router-dom';

function Teacherlogin() {

    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Move to next input field
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
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
                                Forgot Your Password?
                            </h1>
                            <p className=" text-[40px] font-extralight text-slate-200  mt-4">
                                Don't worry, we'll help <br /> you to reset it.
                            </p>
                        </div>

                        <img src={teacherImage} alt="Teacher Illustration" className="w-[523px] h-[464px] mt-6" />
                    </div>
<div className='ml-[200px]'>

<div className="bg-white  h-[746px] max-w-full rounded-l-[56px] gap-4  items-center  mt-20 p-20 flex flex-col justify-center ">
                        <div className='w-[446px] h-[115px] items-center mb-10 justify-center text-center'>
                            <h2 className="text-[39px] text-[#151515] mb-[24px] mt-20 font-bold">OTP Verification</h2>
                            <span className='text-[#465049] text-[18px]'>Please enter the OTP sent to your email/mobile. If you don”t see it, check your spam folder.</span>
                        </div>
                        <div className="flex space-x-4 mt-[100px] mb-4">
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    className=" w-20 h-20 text-center border-[1px] border-[#B6B6B6] rounded-lg focus:border-[#BB5042] focus:outline-none text-[24px]"
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            ))}
                        </div>



                        <Link to='/setnewpass' className='w-[480px] mt-10 h-[60px] mb-[97px] p-3 bg-[#BB5042] text-[20px] text-white text-center rounded-lg'>

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




