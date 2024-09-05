// Details.js
import React from 'react';

const Details = () => {
  return (
    <div className=" mt-5 h-full">
      <div className="bg-[#E4EBE6] p-4 rounded-t-md">
        <h2 className="text-lg font-bold">Details</h2>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img src="http://localhost:5173/teacher.jpg" alt="profile" className="w-16 h-16 rounded-full" />
          <div>
            <h3 className="text-xl font-bold">Suhana Rahman</h3>
            <p>Class IX | B | Roll 12</p>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="font-bold">Guardian Info</h4>
          <ul className="space-y-2">
            <li>
              <span className="font-bold">Guardian 1:</span> Md. Rubel Hasan
            </li>
            <li>
              <span className="font-bold">Relation:</span> Father
            </li>
            <li>
              <span className="font-bold">NID Number:</span> 123 345 345
            </li>
            <li>
              <span className="font-bold">Mobile Number:</span> 01400000000
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="font-bold">Attached Documents</h4>
          <div className="flex space-x-2">
            <img src="/path/to/document1.png" alt="document" className="w-12 h-12" />
            <img src="/path/to/document2.png" alt="document" className="w-12 h-12" />
            <img src="/path/to/document3.png" alt="document" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
