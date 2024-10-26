import React, { useState } from 'react';
import { GrAttachment } from "react-icons/gr";

const ResourceAllocation = () => {
  const [resources, setResources] = useState([
    { id: 1, name: 'Genie Communicative English Resource Book 9', class: 'IX', subject: 'English' },
    { id: 2, name: 'Laboratory Manual Science with Virtual Lab 9', class: 'IX', subject: 'Science' },
    { id: 3, name: 'Essential Certificate History and Civics Coursebook 9', class: 'IX', subject: 'History' },
    { id: 4, name: 'Essential Certificate Geography Coursebook 9', class: 'IX', subject: 'Geography' },
    { id: 5, name: 'Pearson IIT Foundation Mathematics', class: 'IX', subject: 'Mathematics' },
    { id: 6, name: 'Living In Harmony Class 9', class: 'IX', subject: 'Live & Livelihood' }
  ]);

  // Handle adding new resources and other logic here
  const handleAddResource = () => {
    // Logic to add a resource goes here
  };

  const handleDeleteResource = (id) => {
    setResources(resources.filter(resource => resource.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Resource Allocation</h1>

      {/* Add Resource Section */}
      <div className="bg-white p-6  rounded-md mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Write the name of Resource"
            className="border p-3 rounded-md w-[190px] md:w-[190px]"
          />
          <select className="border p-3 rounded-md w-full md:w-1/4">
            <option value="">Class</option>
            <option value="IX">IX</option>
            {/* More class options */}
          </select>
          <select className="border p-3 rounded-md w-full md:w-1/4">
            <option value="">Subject</option>
            <option value="English">English</option>
            {/* More subject options */}
          </select>
          <button className="bg-red-500 text-white p-3 rounded-md md:w-1/4" onClick={handleAddResource}>
            Add Resource
          </button>
        </div>
        {/* Add Attachment */}
        <div className="mt-4">
          <button className="text-red-500 flex items-center gap-2">
            <GrAttachment/> Add Attachment
          </button>
        </div>
      </div>

      {/* List of Resources Section */}
      <h2 className="text-xl font-bold mb-4">List of Resources</h2>
      <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
        <input
          type="text"
          placeholder="Search by Resource Name"
          className="border p-3 rounded-md w-full md:w-1/2"
        />
        <select className="border p-3 rounded-md w-full md:w-1/4">
          <option value="">Sort by Class</option>
          {/* Sort options */}
        </select>
      </div>

      {/* Resources Table */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left border">Sl.</th>
            <th className="p-3 text-left border">Resources Name</th>
            <th className="p-3 text-left border">Class</th>
            <th className="p-3 text-left border">Subject</th>
            <th className="p-3 text-left border">Attachment</th>
            <th className="p-3 text-left border">Action</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource, index) => (
            <tr key={resource.id} className="border-t">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{resource.name}</td>
              <td className="p-3">{resource.class}</td>
              <td className="p-3">{resource.subject}</td>
              <td className="p-3">
                <i className="fas fa-paperclip text-red-500"></i>
              </td>
              <td className="p-3">
                <button onClick={() => handleDeleteResource(resource.id)} className="text-red-500">
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourceAllocation;
