import React from 'react';

const ActivityModal = ({ isOpen, onClose, activity }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[500px] p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#465049]">Activity Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            X {/* Close button */}
          </button>
        </div>

        {/* Demo activity details */}
        <div>
          <p className="text-lg text-[#BB5042] mb-3 font-semibold">{activity.subject}</p>
          <p className="text-sm text-gray-700 mb-2">Class: {activity.class}</p>
          <p className="text-sm text-gray-700 mb-2">Time: {activity.time}</p>
          <p className="text-sm text-gray-700 mb-4">Period: {activity.period}</p>
          <p className="text-sm text-gray-600">
            Here is some demo content for the activity. You can replace this text with actual details of the activity.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-4 bg-[#BB5042] text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ActivityModal;
