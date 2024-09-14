import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";

function Homepage() {
  return (
    <div className="min-h-screen background bg-cover flex flex-col items-center justify-center bg-transparent p-6">
      <div className="max-w-[1410px] h-[600px] mt-[100px] w-full space-y-6 bg-transparent rounded-lg shadow-lg">
        {/* Typewriter effect for welcome message */}
        <h1 className="text-[44px] font-bold mb-6 text-center mt-[40px]">
          <ReactTyped
            strings={["Welcome to the Portal....",
              "School Management System....",
              
            ]} // Text to be typed
            typeSpeed={50} // Typing speed
            backSpeed={30} // Speed of backspacing (if loop is true)
            loop={true}   // Set to false to avoid looping
            showCursor={true} // Show the cursor
          />
        </h1>

        {/* Link buttons for different user roles */}
        <div className="flex items-center justify-center p-[50px] gap-[120px]">
          {/* Administration link */}
          <Link to="http://localhost:5174/login" className="flex gap-3 bg-blue-500 text-[24px] text-white items-center text-center font-bold py-[34px] px-[60px] rounded-lg shadow hover:bg-blue-600">
            <img className='w-10 h-10' src='http://localhost:5173/admin (1).svg' alt="Admin Icon" />
            <span>Administration</span>
          </Link>

          {/* Coordinator's link */}
          <Link to="/cologin" className="flex gap-3 bg-green-500 text-white text-center items-center text-[24px] font-bold py-[34px] px-[80px] rounded-lg shadow hover:bg-green-600">
            <img className='w-10 h-10' src='http://localhost:5173/corodinator (1).svg' alt="Coordinator Icon" />
            <span>Coordinator's</span>
          </Link>

          {/* Teacher's link */}
          <Link to="/tlogin" className="flex gap-3 bg-purple-500 text-white text-center items-center text-[24px] font-bold py-[34px] px-[60px] rounded-lg shadow hover:bg-purple-600">
            <img className='w-10 h-10' src='http://localhost:5173/teacher (1).svg' alt="Teacher Icon" />
            <span>Teacher's</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
