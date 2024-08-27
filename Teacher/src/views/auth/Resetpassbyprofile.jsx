import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { CiLock } from "react-icons/ci";

const ResetPasswordCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div>
      <h3 className="font-bold text-[31px]">Change Password</h3>
      <div className="flex items-center mt-5 mb-10 justify-center">
        <div className="bg-white border-[1px] rounded-md p-20 w-[600px] h-[480px]">
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2 font-medium">
                <CiLock className="inline-block text-xl text-[#BB5042] mr-2" />
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full placeholder:text-[12px] p-3 mt-1 focus:border-[#BB5042] focus:outline-none border border-gray-300 rounded-lg"
                  placeholder="Password Must be at Least 8 Characters"
                />
                {password && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-500" />
                  </button>
                )}
              </div>
            </div>
            <div className="mb-10">
              <label className="block text-gray-600 mb-2 font-medium">
                <CiLock className="inline-block text-xl text-[#BB5042] mr-2" />
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full placeholder:text-[12px] p-3 mt-1 focus:border-[#BB5042] focus:outline-none border border-gray-300 rounded-lg"
                  placeholder="Re-enter Password"
                />
                {confirmPassword && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} className="text-gray-500" />
                  </button>
                )}
              </div>
            </div>
            <Link to="http://localhost:5173/teacher/dashboard">
              <button className="w-full bg-[#BB5042] text-white py-3 rounded-lg hover:bg-[#c6295c] transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#d73166]/40">
                Change Password
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordCard;
