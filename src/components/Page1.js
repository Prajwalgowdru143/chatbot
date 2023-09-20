import React from 'react';

const Page1 = ({ onEnrollClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Enter into Student Info System
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onEnrollClick}
      >
        Enroll Now!
      </button>
    </div>
  );
};

export default Page1;