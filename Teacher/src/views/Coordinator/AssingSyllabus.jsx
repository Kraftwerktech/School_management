import React from 'react';

const AssignSyllabus = () => {
  const teachers = [
    { id: 1, name: 'Kamrn Nahar', class: 'IX', subject: 'English', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, name: 'Md. Kamrul Hasan', class: 'IX', subject: 'Bangla', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Md. Kamrul Hasan', class: 'IX', subject: 'Math', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Kamrn Nahar', class: 'IX', subject: 'Science', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Kamrn Nahar', class: 'IX', subject: 'BGS', image: 'https://randomuser.me/api/portraits/women/5.jpg' }
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <h1 className="text-2xl font-bold mb-6">Assign Syllabus</h1>

      {/* Search and Assign Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Teachers Name"
          className="border p-3 rounded-md w-full md:w-1/2"
        />
        <select className="border p-3 rounded-md w-full md:w-1/4">
          <option value="">Class</option>
          <option value="IX">IX</option>
          {/* Add more options as necessary */}
        </select>
        <select className="border p-3 rounded-md w-full md:w-1/4">
          <option value="">Subject</option>
          <option value="English">English</option>
          {/* Add more options as necessary */}
        </select>
        <button className="bg-red-500 text-white p-3 rounded-md">Assign</button>
      </div>

      {/* Teachers List Table */}
      <h2 className="text-xl font-bold mb-4">List of Assign Teachers</h2>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-200 md:table-row block md:flex md:justify-between">
            <th className="px-4 py-2 border md:table-cell">Sl.</th>
            <th className="px-4 py-2 border md:table-cell">Picture</th>
            <th className="px-4 py-2 border md:table-cell">Teacher Name</th>
            <th className="px-4 py-2 border md:table-cell">Class</th>
            <th className="px-4 py-2 border md:table-cell">Subject</th>
            <th className="px-4 py-2 border md:table-cell">Action</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {teachers.map((teacher, index) => (
            <tr key={teacher.id} className="bg-white border md:border-0 md:table-row block md:flex md:justify-between">
              <td className="px-4 py-2 border md:table-cell">{index + 1}</td>
              <td className="px-4 py-2 border md:table-cell">
                <img src={teacher.image} alt={teacher.name} className="h-10 w-10 rounded-full object-cover" />
              </td>
              <td className="px-4 py-2 border md:table-cell">{teacher.name}</td>
              <td className="px-4 py-2 border md:table-cell">{teacher.class}</td>
              <td className="px-4 py-2 border md:table-cell">{teacher.subject}</td>
              <td className="px-4 py-2 border md:table-cell">
                <button className="text-red-500 hover:text-red-700">
                  <i className="fas fa-trash"></i> {/* Trash Icon */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignSyllabus;
