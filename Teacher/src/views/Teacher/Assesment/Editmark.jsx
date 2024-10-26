import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineCloseCircle } from "react-icons/ai";
// Dummy Data
const students = [
  {
    id: 1,
    picture: 'https://randomuser.me/api/portraits/men/32.jpg',
    studentId: 'DM 16000024',
    name: 'John Doe',
    mark: '30',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 2,
    picture: 'https://randomuser.me/api/portraits/men/33.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '18',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 3,
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '25',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 4,
    picture: 'https://randomuser.me/api/portraits/men/37.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '27',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 5,
    picture: 'https://randomuser.me/api/portraits/women/47.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '32',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 6,
    picture: 'https://randomuser.me/api/portraits/women/41.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '22',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 7,
    picture: 'https://randomuser.me/api/portraits/women/61.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '35',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 8,
    picture: 'https://randomuser.me/api/portraits/women/74.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '33',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 9,
    picture: 'https://randomuser.me/api/portraits/women/49.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '19',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 10,
    picture: 'https://randomuser.me/api/portraits/women/50.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '20',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 11,
    picture: 'https://randomuser.me/api/portraits/women/99.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
    mark: '24',
    comment: 'Lorem ipsum dolor sit amet consectetur.',
  },
  //... (Other students as before)
];


//Edit mark model

const EditMarkModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Modal won't be rendered if not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 z-50 flex justify-center items-center">
      <div className="relative bg-white p-[80px] rounded-md shadow-md w-[600px]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <AiOutlineCloseCircle size={24} />        </button>

        <h2 className="text-xl font-bold mb-7">
          Are you sure you want to change the Assessment Report?
        </h2>

        {/* Textarea for reason */}
        <textarea
          placeholder="Write Reason"
          className="border-[1px] focus:border-[#BB5042] focus:outline-none  border-gray-300 p-2 h-[150px] w-full rounded-md"
        />

        {/* Proceed button */}
        <div className="flex justify-center mt-[60px]">
          <Link to='/teacher/dashboard/editmarkes'>
          <button
            onClick={onClose} // You can change this to handle saving
            className="bg-[#BB5042] text-white w-[270px] px-5 py-4 rounded-[8px]"
          >
            Proceed
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};



const itemsPerPage = 8;


function Editmark() {

  const [iseditModalOpened, seteditIsModalOpened] = useState(false);

  // Function to handle opening the modal
  const handleEditClick = () => {
    seteditIsModalOpened(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    seteditIsModalOpened(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // State to track marks and comments for each student
  const [studentData, setStudentData] = useState(students);

  const handleSubmitClick = () => {
    setIsModalOpen(true); // Show the modal when "Submit" is clicked
  };

  const handleConfirmYes = () => {
    setIsModalOpen(false); // Close the modal
    navigate('/teacher/dashboard/disunmarked'); // Navigate to the target page
  };

  const handleConfirmNo = () => {
    setIsModalOpen(false); // Close the modal
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const displayedStudents = studentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Update mark and comment for a specific student
  const handleInputChange = (id, field, value) => {
    const updatedStudents = studentData.map((student) =>
      student.id === id ? { ...student, [field]: value } : student
    );
    setStudentData(updatedStudents);
  };

  return (
    <div className="pr-8 pb-6 mt-7">
      <h3 className="text-[31px] flex gap-3 items-center font-semibold mb-6">
        Assessment
      </h3>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[20px] flex gap-3 items-center font-semibold mb-6">
          <span>
            <Link to="/teacher/dashboard/unmarked">
              <BsArrowLeftCircle className="w-6 h-6 text-[#BB5042]" />
            </Link>
          </span>
          <span>Economics | Class IX | Group 1 | Class Test | 11th Jul 2024</span>
        </h3>
        <div>
          {/* Submit Button */}
          <button
            onClick={handleSubmitClick}
            className="px-5 py-3 w-[150px] font-bold bg-[#BB5042] text-white rounded-[8px]"
          >
            Submit
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center z-50 justify-center bg-black bg-opacity-50">
              <div className="bg-white p-[60px] rounded-lg text-center shadow-lg w-[500px]">
                <h2 className="text-xl font-semibold mb-4">
                  Are you Sure, Do you want to Submit the Assessment Result?
                </h2>
                <span>
                  After Submission you are not able to modify the Result.
                </span>
                <div className="flex mt-10 justify-center gap-4">
                  <button
                    onClick={handleConfirmYes}
                    className="px-5 border-[1px] w-[160px] py-[10px] bg-[#BB5042] text-white rounded-[8px]"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleConfirmNo}
                    className="px-5 py-[10px] w-[160px] border-[1px] text-[#BB5042] border-[#BB5042] bg-transparent rounded-[8px]"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-5 border-[1px] rounded-[16px]">
        <div className="mt-4 mb-5">
          <span className="text-[18px] font-semibold">
            Monthly Test | 40 Marks | 8th Aug 2024
          </span>
        </div>
        <div className="w-full text-center bg-white">
          <div className="overflow-x-auto rounded-t-[12px]">
            <table className="min-w-full table-auto text-center">
              <thead className="bg-[#E4EBE6] h-[70px] text-center">
                <tr className="text-[#465049] text-[16px] text-center">
                  <th className="px-4 py-2">Picture</th>
                  <th className="px-4 py-2">Student ID</th>
                  <th className="px-4 py-2">Student Name</th>
                  <th className="px-4 py-2">Input Mark</th>
                  <th className="px-4 py-2">Comments for Guardian</th>
                </tr>
              </thead>
              <tbody>
                {displayedStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b text-[16px] text-gray-700"
                  >
                    <td className="px-4 py-2 text-center">
                      <img
                        src={student.picture}
                        alt={student.name}
                        className="w-[70px] h-[70px] rounded-full mx-auto"
                      />
                    </td>
                    <td className="px-4 text-[18px] py-2">{student.studentId}</td>
                    <td className="px-4 text-[17px] py-2">{student.name}</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        className="border-[1px] w-[160px] py-3 rounded-[8px] text-center h-[55px] placeholder:text-start px-3 placeholder:text-[14px] placeholder:text-[#B6B6B6] border-[#B6B6B6] focus:border-[#BB5042] focus:outline-none"
                        placeholder="Input Mark"
                        value={student.mark}
                        onChange={(e) =>
                          handleInputChange(student.id, 'mark', e.target.value)
                        }
                      />
                    </td>
                    <td className="px-4 flex gap-8 items-center py-2">
                      <input
                        type="text"
                        className="border-[1px] placeholder:text-[14px] w-full px-3 py-3 h-[55px] rounded-[8px] border-[#B6B6B6] focus:border-[#BB5042] focus:outline-none"
                        placeholder="Write Comments"
                        value={student.comment}
                        onChange={(e) =>
                          handleInputChange(student.id, 'comment', e.target.value)
                        }
                      />
                     <div>
      {/* Edit Button */}
      <button onClick={handleEditClick}>
        <FiEdit className="text-[#BB5042] w-7 h-7" />
      </button>

      {/* Edit Modal */}
      <EditMarkModal isOpen={iseditModalOpened} onClose={handleCloseModal} />
    </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevPage}
                className={`w-12 h-12 flex items-center justify-center bg-transparent border-[#BB5042] border-[1px] rounded text-[#BB5042] hover:bg-[#BB5042] hover:text-white ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={currentPage === 1}
              >
                <MdKeyboardArrowLeft className="text-xl" />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index + 1)}
                  className={`w-12 h-12 flex items-center justify-center border-[1px] border-[#BB5042] rounded hover:bg-[#BB5042] hover:text-white ${
                    currentPage === index + 1
                      ? 'bg-[#BB5042] text-white'
                      : 'bg-transparent text-[#BB5042]'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                className={`w-12 h-12 flex items-center justify-center bg-transparent border-[#BB5042] border-[1px] rounded text-[#BB5042] hover:bg-[#BB5042] hover:text-white ${
                  currentPage === totalPages
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={currentPage === totalPages}
              >
                <MdKeyboardArrowRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editmark;
