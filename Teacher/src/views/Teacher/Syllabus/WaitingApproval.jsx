import React, { useState } from 'react';
import LayoutSyllabus from './LayoutSyllabus';
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";

const announcements = [
  {
    lesson: "Lesson 1",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "10 to 20",
    activityType: "Lecture",
    topicNo: "1",
    activityTime: "45 mins"
  },
  {
    lesson: "Lesson 2",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 7: Science toolkit 2: Control and regulation",
    pages: "21 to 30",
    activityType: "Lab",
    topicNo: "2",
    activityTime: "1 hour"
  },
  {
    lesson: "Lesson 3",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 8: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  },
  {
    lesson: "Lesson 4",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  },
  {
    lesson: "Lesson 5",
    resource: "TB- Cambridge Checkpoint Science Coursebook 9",
    chapter: "Chapter 5: Science toolkit 2: Control and regulation",
    pages: "31 to 40",
    activityType: "Discussion",
    topicNo: "3",
    activityTime: "30 mins"
  }
];

function WaitingApproval() {
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const openRejectModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsRejectModalOpen(true);
  };

  const openViewModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsViewModalOpen(true);
  };

  const closeRejectModal = () => {
    setIsRejectModalOpen(false);
    setRejectReason('');
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const handleReject = () => {
    console.log("Rejected:", selectedAnnouncement, "Reason:", rejectReason);
    closeRejectModal();
  };

  return (
    <div>
      <LayoutSyllabus />
      <div className="mt-10 mr-5 max-w-full">
        <div className="flex justify-between">
          <div className="flex text-[20px] font-bold gap-2">
            <span>Class IX</span>
            <span>| Science</span>
            <span>| 2024</span>
          </div>
          <div className="flex gap-8">
            <button className="border-[1px] flex gap-3 items-center rounded-[8px] px-6 py-2">
              Select Syllabus
              <IoIosArrowDown className="w-5 h-5 text-[#BB5042]" />
            </button>
            <button className="font-bold bg-[#B6B6B6] rounded-[8px] text-[#626262] px-6 py-2">
              Submit Syllabus
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="flex items-center border border-slate-300 rounded-md w-[350px] md:max-w-[400px]">
            <CiSearch className="ml-3 w-5 h-5 text-[#BB5042]" />
            <input
              className="flex-1 px-4 py-2 placeholder:text-[13px] outline-none bg-transparent text-gray-700"
              type="text"
              name="search"
              placeholder="Search by Lesson or Chapter"
            />
          </div>
        </div>

        <div className="w-full bg-white mt-6 rounded-md">
          <div className="overflow-x-auto rounded-t-md">
            <table className="min-w-full table-auto">
              <thead className="bg-[#E4EBE6] text-left h-[60px]">
                <tr className="text-[#465049] text-[16px]">
                  <th className="px-4 py-3">Lesson</th>
                  <th className="px-4 py-3">Resource</th>
                  <th className="px-4 py-3">Chapter</th>
                  <th className="px-4 py-3">Pages</th>
                  <th className="px-4 py-3">Activity Type</th>
                  <th className="px-4 py-3">Topic No.</th>
                  <th className="px-4 py-3">Activity Time</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {announcements.map((announcement, index) => (
                  <tr
                    key={index}
                    className="border-b text-[16px] text-gray-700 cursor-pointer"
                    onClick={() => openViewModal(announcement)}
                  >
                    <td className="px-4 py-3">{announcement.lesson}</td>
                    <td className="px-4 max-w-[164px] py-3">{announcement.resource}</td>
                    <td className="px-4 max-w-[186px] py-3">{announcement.chapter}</td>
                    <td className="px-4 max-w-[100px] py-3">{announcement.pages}</td>
                    <td className="px-4 max-w-[160px] py-3">{announcement.activityType}</td>
                    <td className="px-4 max-w-[100px] py-3">{announcement.topicNo}</td>
                    <td className="px-4 max-w-[130px] py-3">{announcement.activityTime}</td>
                    <td
                      className="px-4 max-w-[130px] space-y-3 py-3"
                      onClick={(e) => e.stopPropagation()} // Prevent row click event
                    >
                      <IoCheckmarkCircleOutline className="w-6 h-6 text-[#08A647]" />
                      <RxCrossCircled
                        className="w-6 h-6 text-[#CD1902] cursor-pointer"
                        onClick={() => openRejectModal(announcement)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isRejectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h2 className="text-lg font-bold mb-4">Why do you want to reject?</h2>
            <textarea
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#BB5042]"
              rows="4"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Please provide your reason here..."
            ></textarea>
            <div className="flex justify-end mt-4 gap-3">
              <button
                onClick={handleReject}
                className="bg-[#CD1902] text-white rounded-md px-4 py-2"
              >
                Reject
              </button>
              <button
                onClick={closeRejectModal}
                className="bg-gray-300 text-gray-700 rounded-md px-4 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isViewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h2 className="text-lg font-bold mb-4">Lesson Details</h2>
            <p><strong>Lesson:</strong> {selectedAnnouncement.lesson}</p>
            <p><strong>Resource:</strong> {selectedAnnouncement.resource}</p>
            <p><strong>Chapter:</strong> {selectedAnnouncement.chapter}</p>
            <p><strong>Pages:</strong> {selectedAnnouncement.pages}</p>
            <p><strong>Activity Type:</strong> {selectedAnnouncement.activityType}</p>
            <p><strong>Topic No.:</strong> {selectedAnnouncement.topicNo}</p>
            <p><strong>Activity Time:</strong> {selectedAnnouncement.activityTime}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeViewModal}
                className="bg-gray-300 text-gray-700 rounded-md px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WaitingApproval;
