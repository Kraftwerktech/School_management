import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

function Homepage() {
  return (
    <div className="min-h-[600px] background flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-[1200px] h-[600px] mt-[100px] w-full space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-[31px] font-bold mb-6 text-center mt-[100px]">Welcome to the Portal</h1>
        <div className="flex justify-center items-center p-[100px] gap-[180px]">
          <Link to="/admin" className="block bg-blue-500 text-white text-center text-[20px] font-bold py-[34px] px-[60px] rounded-lg shadow hover:bg-blue-600">
            Admin Panel
          </Link>
          <Link to="/cologin" className="block bg-green-500 text-white text-center  text-[20px] font-bold py-[34px] px-[60px] rounded-lg shadow hover:bg-green-600">
            Coordinator Panel
          </Link>
          <Link to="/tlogin" className="block bg-purple-500 text-white text-center  text-[20px] font-bold py-[34px] px-[60px] rounded-lg shadow hover:bg-purple-600">
            Teacher Panel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
