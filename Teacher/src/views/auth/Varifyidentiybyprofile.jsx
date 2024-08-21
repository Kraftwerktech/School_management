import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPasswordCard = () => {
  return (
    <div>
      <h3 className=" font-bold text-[31px]">Verify Your Identity</h3>
      <div className="flex items-center mt-5 mb-10 justify-center">
      <div className="bg-white border-[1px]  p-20 w-[600px] h-[480px]">
        <h4 className=" mb-10 text-[16px] text-center text-gray-600">
          Please select the email address or mobile number associated with your account to receive an OTP.
        </h4>
        <span className="block text-gray-700 font-medium mb-3">Choose your preferred platform</span>
        <form className="space-y-4">
          {/* Email Selection */}
          <div className="flex items-center">
            <input type="radio" name="verificationMethod" id="email" className="mr-2 h-[44px]" />
            <label htmlFor="email" className="text-gray-700">Email</label>
          </div>
          {/* Phone Selection */}
          <div className="flex items-center">
            <input type="radio" name="verificationMethod" id="phone" className="mr-2 h-[44px]" />
            <label htmlFor="phone" className="text-gray-700">Phone Number</label>
          </div>
          {/* Continue Button */}
          <Link to="http://localhost:5173/teacher/dashboard/verifyotpbyprofile-pass-profile">
            <button className="w-full bg-[#BB5042] text-white py-3 rounded-lg hover:bg-[#c6295c] transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#d73166]/40 mt-10">
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
