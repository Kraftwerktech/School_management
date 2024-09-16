import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoCalendarClearOutline } from 'react-icons/io5';

function ActivityTracking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedBoardWork, setSelectedBoardWork] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);
  const [reason, setReason] = useState("");

  const handleBoardWorkChange = (e) => setSelectedBoardWork(e.target.value);
  const handleTestChange = (e) => setSelectedTest(e.target.value);
  const handleReasonChange = (e) => setReason(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  // Dynamic calculation for completion rate
  const completionRate = 
    (selectedBoardWork === 'yes' ? 50 : 0) + 
    (selectedTest === 'yes' ? 50 : 0);

  return (
    <div className="w-full p-5">
      <div className="mt-5">
        <h3 className="text-[31px] font-bold">Activity Tracking</h3>
      </div>

      {/* Date Picker */}
      <div className="flex justify-end mt-5 mr-[60px]">
        <div className="relative flex items-center">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="border border-[#B6B6B6] w-[150px] focus:border-[#BB5042] rounded-md px-5 py-3"
            placeholderText="Date"
          />
          <IoCalendarClearOutline className="absolute right-3 top-1/2 h-5 w-5 transform -translate-y-1/2 text-[#BB5042]" />
        </div>
      </div>

      {/* Activity Form */}
      <div className="mr-[60px] mt-7">
        <div className="bg-white p-6 rounded-[8px] border-[1px] w-full">
          <h2 className="text-[20px] font-semibold text-[#98AD9E]">Economics | Class IX | Group 1</h2>
          <p className="mt-5 text-[19px] font-semibold text-[#151515]">
            Have you completed your today's activities?
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Board Work Section */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[#465049] font-semibold">Board Work | Activity 31 | 10 min</span>
                  <div className="flex space-x-4 mt-10">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="boardWork"
                        value="yes"
                        checked={selectedBoardWork === "yes"}
                        onChange={handleBoardWorkChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="boardWork"
                        value="no"
                        checked={selectedBoardWork === "no"}
                        onChange={handleBoardWorkChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* Completion Rate Section */}
                <div className="flex flex-col items-center">
                  <h3 className="text-[#465049] text-[16px] font-bold">Activity Completion Rate</h3>
                  <div className="relative w-[200px] h-[200px] mt-2">
                    <div className="w-full h-full rounded-full border-[25px] border-[#E7E8D1]"></div>
                    <div
                      className="absolute inset-0 w-full h-full rounded-full border-[25px] border-[#08A647]"
                      style={{ clipPath: `inset(0 0 ${100 - completionRate}% 0)` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">{completionRate}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Test Section */}
              <div className="flex justify-between  items-center">
                <div className="flex flex-col">
                  <h3 className="text-[#465049] text-[16px] font-semibold">M.Test | Activity 34 | 30 marks | 20 min</h3>
                  <div className="flex mt-10 space-x-4">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="test"
                        value="yes"
                        checked={selectedTest === "yes"}
                        onChange={handleTestChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="test"
                        value="no"
                        checked={selectedTest === "no"}
                        onChange={handleTestChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason Section */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                Reason
              </label>
              <textarea
                id="reason"
                rows="4"
                value={reason}
                onChange={handleReasonChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your reason here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#BB5042] font-semibold w-[160px] px-5 py-3 text-white rounded-md shadow-sm hover:bg-red-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mr-[60px] mt-7">
        <div className="bg-white p-6 rounded-[8px] border-[1px] w-full">
          <h2 className="text-[20px] font-semibold text-[#98AD9E]">Economics | Class IX | Group 1</h2>
          <p className="mt-5 text-[19px] font-semibold text-[#151515]">
            Have you completed your today's activities?
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Board Work Section */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[#465049] font-semibold">Board Work | Activity 31 | 10 min</span>
                  <div className="flex space-x-4 mt-10">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="boardWork"
                        value="yes"
                        checked={selectedBoardWork === "yes"}
                        onChange={handleBoardWorkChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="boardWork"
                        value="no"
                        checked={selectedBoardWork === "no"}
                        onChange={handleBoardWorkChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* Completion Rate Section */}
                <div className="flex flex-col items-center">
                  <h3 className="text-[#465049] text-[16px] font-bold">Activity Completion Rate</h3>
                  <div className="relative w-[200px] h-[200px] mt-2">
                    <div className="w-full h-full rounded-full border-[25px] border-[#E7E8D1]"></div>
                    <div
                      className="absolute inset-0 w-full h-full rounded-full border-[25px] border-[#08A647]"
                      style={{ clipPath: `inset(0 0 ${100 - completionRate}% 0)` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">{completionRate}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Test Section */}
              <div className="flex justify-between  items-center">
                <div className="flex flex-col">
                  <h3 className="text-[#465049] text-[16px] font-semibold">M.Test | Activity 34 | 30 marks | 20 min</h3>
                  <div className="flex mt-10 space-x-4">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="test"
                        value="yes"
                        checked={selectedTest === "yes"}
                        onChange={handleTestChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="test"
                        value="no"
                        checked={selectedTest === "no"}
                        onChange={handleTestChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason Section */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                Reason
              </label>
              <textarea
                id="reason"
                rows="4"
                value={reason}
                onChange={handleReasonChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your reason here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#BB5042] font-semibold w-[160px] px-5 py-3 text-white rounded-md shadow-sm hover:bg-red-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mr-[60px] mt-7">
        <div className="bg-white p-6 rounded-[8px] border-[1px] w-full">
          <h2 className="text-[20px] font-semibold text-[#98AD9E]">Economics | Class IX | Group 1</h2>
          <p className="mt-5 text-[19px] font-semibold text-[#151515]">
            Have you completed your today's activities?
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Board Work Section */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[#465049] font-semibold">Board Work | Activity 31 | 10 min</span>
                  <div className="flex space-x-4 mt-10">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="boardWork"
                        value="yes"
                        checked={selectedBoardWork === "yes"}
                        onChange={handleBoardWorkChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="boardWork"
                        value="no"
                        checked={selectedBoardWork === "no"}
                        onChange={handleBoardWorkChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* Completion Rate Section */}
                <div className="flex flex-col items-center">
                  <h3 className="text-[#465049] text-[16px] font-bold">Activity Completion Rate</h3>
                  <div className="relative w-[200px] h-[200px] mt-2">
                    <div className="w-full h-full rounded-full border-[25px] border-[#E7E8D1]"></div>
                    <div
                      className="absolute inset-0 w-full h-full rounded-full border-[25px] border-[#08A647]"
                      style={{ clipPath: `inset(0 0 ${100 - completionRate}% 0)` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">{completionRate}%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Test Section */}
              <div className="flex justify-between  items-center">
                <div className="flex flex-col">
                  <h3 className="text-[#465049] text-[16px] font-semibold">M.Test | Activity 34 | 30 marks | 20 min</h3>
                  <div className="flex mt-10 space-x-4">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="test"
                        value="yes"
                        checked={selectedTest === "yes"}
                        onChange={handleTestChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="test"
                        value="no"
                        checked={selectedTest === "no"}
                        onChange={handleTestChange}
                        className="form-radio h-5 w-5 text-[#BB5042]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Reason Section */}
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                Reason
              </label>
              <textarea
                id="reason"
                rows="4"
                value={reason}
                onChange={handleReasonChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Enter your reason here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#BB5042] font-semibold w-[160px] px-5 py-3 text-white rounded-md shadow-sm hover:bg-red-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ActivityTracking;
