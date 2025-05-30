import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Remove = ({ id, hide }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://daily-api-tan.vercel.app/item/${id}`);
      hide();
    } catch (error) {
      console.error('Error while deleting:', error);
      alert('Failed to delete the item.');
    }
  };

  const handleCancel = () => {
    hide();
  };

  return (
    <div
      onClick={handleCancel}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 transform transition-all duration-300 scale-100 hover:scale-[1.02]"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Are you sure?
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Do you really want to delete this item? This action cannot be undone.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to={`/edite/${id}`}
            onClick={handleCancel}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all duration-200"
          >
            Edite,
          </Link>
          <button
            onClick={handleDelete}
            className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all duration-200"
          >
            Yes, Delete
          </button>
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition-all duration-200"
          >
            No, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Remove;
