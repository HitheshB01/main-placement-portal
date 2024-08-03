// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src="logo.svg" alt="Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold ml-2">PAGES</h1>
      </div>
      <div className="flex space-x-4">
        <button className="bg-gray-300 px-4 py-2 rounded">Candidate Sign-up</button>
        <button className="bg-gray-300 px-4 py-2 rounded">Recruiter Sign-up</button>
      </div>
    </div>
  );
};

export default Header;
