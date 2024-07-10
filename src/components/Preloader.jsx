import React from 'react';

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-700 animate-spin absolute"></div>
      <p className="mt-32 text-gray-600">Loading...</p>
    </div>
  );
};

export default Preloader;