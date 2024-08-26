import React from "react";
import { Link } from "react-router-dom";

const ResetPasswordCard = () => {
  return (
    <div>
      <h3 className="font-bold text-[31px]">Verify Your Identity</h3>
      <div className="flex items-center mt-5 mb-10 justify-center">
        <div className="bg-white border-[1px] p-20 rounded-md w-[600px] h-[480px]">
          <h4 className="mb-12 text-[16px] text-center text-[#465049]">
          Please select the email address or mobile number associated with your account to receive OTP.
          </h4>
         
          <form className="space-y-4">
            {/* Email Selection */}
            <div className="flex mb-12 gap-2 items-center">
              <input
                type="radio"
                name="verificationMethod"
                id="email"
                className="mr-2 h-[24px] w-[24px] text-[#BB5042] border-2 border-[#BB5042] focus:ring-[#BB5042] checked:bg-[#BB5042] checked:border-transparent"
              />
              <label htmlFor="email" className="text-[#465049]">Email :</label>
              <label htmlFor="email" className="text-[#B6B6B6]">
                ibrahi.soft.*****@gmail.com
              </label>
            </div>
            {/* Phone Selection */}
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="verificationMethod"
                id="phone"
                className="mr-2 h-[24px] w-[24px] text-[#BB5042] border-2 border-[#BB5042] focus:ring-[#BB5042] checked:bg-[#BB5042] checked:border-transparent"
              />
              <label htmlFor="phone" className="text-[#465049]">
                Mobile :
              </label>
              <label htmlFor="phone" className="text-[#B6B6B6]">
                +123 456 ******
              </label>
            </div>
            {/* Continue Button */}
            <Link to="http://localhost:5173/teacher/dashboard/verifyotpbyprofile-pass-profile">
              <button className="w-full bg-[#BB5042] text-white py-3 rounded-lg hover:bg-[#c6295c] transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#d73166]/40 mt-12">
                Continue
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordCard;
