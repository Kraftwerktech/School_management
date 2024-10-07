
import React from 'react';
import { RxCrossCircled } from "react-icons/rx";

const ActivityModal = ({ isOpen, onClose, activity }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[1000px] p-10 rounded-lg relative">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <RxCrossCircled size={24} />
        </button>
        
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-center text-[28px] font-bold">Activity</h3>
          <div className=" text-start font-semibold text-[20px] flex gap-1 text-[#98AD9E]">
           <span>{activity.subject}</span>
           <span>|</span>
           <span>Class:{activity.class}</span>
           <span>|</span>
           <span>Period:{activity.period}</span>
          </div>
        </div>

        {/* Activity Content */}
        <div className="mb-6">
          <div className="mb-4 space-y-2">
            <h4 className="font-semibold text-[16px]">Board Work | 10 min</h4>
            <p className="text-[16px] text-[#939393] font-medium ">Lesson 11</p>
            <p className=" text-[16px] text-[#939393]">
              <strong className='  font-semibold text-[16px]'>Topic 35 | Topic Title: </strong>
             Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper.
            </p>
            <p className=" text-[16px]">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="mb-5 space-y-3">
            <h4 className="font-semibold text-[16px]">M. Test | 30 marks | 20 min</h4>
            <p className="text-[16px] text-[#939393]">Lesson 7 | Lesson 30</p>
            <p className="text-[16px] text-[#939393]">
              <strong>Topic 22 | Topic Title: </strong>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper.
            </p>
            <p className="text-[16px] text-[#939393]">
              <strong>Topic 23 | Topic Title: </strong>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper.
            </p>
            <p className="text-[16px] text-[#939393]">
              <strong>Topic 27 | Topic Title: </strong>Lorem ipsum dolor sit amet consectetur. Quis risus egestas nisl a ullamcorper.
            </p>
            <p className="text-[16px] ">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        {/* Attached Files */}
        <div className="mb-6">
          <h4 className="font-semibold">Attached Files</h4>
          <div className="flex gap-4 mt-2">
            <button className="bg-gray-100 p-4 border-[2px] rounded-md text-[14px]">Document.pdf</button>
            <button className="bg-gray-100 p-4 border-[2px] rounded-md text-[14px]">Document 2.pdf</button>
          </div>
        </div>

        {/* Homework and Additional Note */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">H.W</h4>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <h4 className="font-semibold">Additional Note</h4>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
