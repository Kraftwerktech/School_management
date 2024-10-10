import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

// Dummy Data
const students = [
  {
    id: 1,
    picture: 'https://randomuser.me/api/portraits/men/32.jpg',
    studentId: 'DM 16000024',
    name: 'John Doe',
  },
  {
    id: 2,
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    studentId: 'DM 16000025',
    name: 'Jane Smith',
  },
  {
    id: 3,
    picture: 'https://randomuser.me/api/portraits/men/85.jpg',
    studentId: 'DM 16000026',
    name: 'Sam Johnson',
  },
  {
    id: 4,
    picture: 'https://randomuser.me/api/portraits/women/65.jpg',
    studentId: 'DM 16000027',
    name: 'Emily Davis',
  },
  {
    id: 5,
    picture: 'https://randomuser.me/api/portraits/men/76.jpg',
    studentId: 'DM 16000028',
    name: 'Michael Brown',
  },
  {
    id: 6,
    picture: 'https://randomuser.me/api/portraits/women/88.jpg',
    studentId: 'DM 16000029',
    name: 'Sophia Wilson',
  },
  {
    id: 7,
    picture: 'https://randomuser.me/api/portraits/men/92.jpg',
    studentId: 'DM 16000030',
    name: 'James Anderson',
  },
  {
    id: 8,
    picture: 'https://randomuser.me/api/portraits/women/52.jpg',
    studentId: 'DM 16000031',
    name: 'Olivia Martinez',
  },
  {
    id: 9,
    picture: 'https://randomuser.me/api/portraits/men/49.jpg',
    studentId: 'DM 16000032',
    name: 'Liam Taylor',
  },
  {
    id: 10,
    picture: 'https://randomuser.me/api/portraits/women/60.jpg',
    studentId: 'DM 16000033',
    name: 'Isabella Thomas',
  },
  {
    id: 11,
    picture: 'https://randomuser.me/api/portraits/men/67.jpg',
    studentId: 'DM 16000034',
    name: 'Ethan Roberts',
  },
  {
    id: 12,
    picture: 'https://randomuser.me/api/portraits/women/90.jpg',
    studentId: 'DM 16000035',
    name: 'Mia Harris',
  },
];

const itemsPerPage = 8;

function InputMark() {

    const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    setIsModalOpen(true); // Show the modal when "Submit" is clicked
  };

  const handleConfirmYes = () => {
    setIsModalOpen(false); // Close the modal
    navigate('/teacher/dashboard/ummarked'); // Navigate to the target page
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

  const displayedStudents = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="pr-8 pb-6 mt-7">
      <h3 className="text-[31px] flex gap-3 items-center font-semibold mb-6">
        Assessment
      </h3>
      <div className=' flex justify-between items-center mb-4'>
      <h3 className="text-[20px] flex gap-3 items-center font-semibold mb-6">
        <span>
            <Link to='/teacher/dashboard/marked'> <BsArrowLeftCircle className="w-6 h-6 text-[#BB5042]" /></Link>
         
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
            Are you Sure, Do you want to  Submit the Assessment Result?
            </h2>
            <span>After Submission you are not avail to modify the Result.</span>
            <div className="flex mt-10 justify-center gap-4">
                <Link to='/teacher/dashboard/unmarked'>
                <button
                onClick={handleConfirmYes}
                className="px-5 border-[1px] w-[160px] py-[10px] bg-[#BB5042] text-white rounded-[8px]"
              >
                Yes
              </button>
                </Link>
           
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
     

      <div className='p-5 border-[1px] rounded-[16px]'>

      <div className="mt-4 mb-5">
        <span className="text-[18px] ml-1 font-semibold">
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
              {displayedStudents.map((student, index) => (
                <tr key={student.id} className="border-b text-[16px] text-gray-700">
                  <td className="px-4 py-4 text-center">
                    <img
                      src={student.picture}
                      alt={student.name}
                      className="w-[70px] h-[70px] rounded-full mx-auto"
                    />
                  </td>
                  <td className="px-4 text-[18px] font-medium py-2">{student.studentId}</td>
                  <td className="px-4 text-[17px] text-[#465049] py-2">{student.name}</td>
                  <td className="px-4 h-[50px] py-3">
                    <input
                      type="number"
                      className="border-[1px] border-[#B6B6B6] w-[160px] py-3 h-[55px] rounded-[8px] text-center placeholder:text-start px-3 placeholder:text-[14px]  focus:border-[#BB5042] focus:outline-none"
                      placeholder="Input Mark"
                    />
                  </td>
                  <td className="px-4  w-[400px] py-3">
                    <input
                      type="text"
                      className="border-[1px] placeholder:text-[14px] w-full px-3 py-3 h-[55px] rounded-[8px] border-[#B6B6B6] focus:border-[#BB5042] focus:outline-none"
                      placeholder="Write Comments"
                    />
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
                className={`w-12 h-12 flex items-center justify-center border-[1px] border-[#BB5042] rounded ${
                  currentPage === index + 1
                    ? 'bg-[#BB5042] text-white'
                    : 'bg-transparent text-[#BB5042] hover:bg-[#BB5042] hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              className={`w-12 h-12 flex items-center justify-center bg-transparent border-[#BB5042] border-[1px] rounded text-[#BB5042] hover:bg-[#BB5042] hover:text-white ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
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

export default InputMark;
