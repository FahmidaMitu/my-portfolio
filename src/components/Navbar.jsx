import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-blue-400">Fahmida Sultana</a>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none text-gray-300 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-3">
          <a href="#home" onClick={handleLinkClick} className="block hover:text-blue-400 transition">Home</a>
          <a href="#about" onClick={handleLinkClick} className="block hover:text-blue-400 transition">About</a>
          <a href="#skills" onClick={handleLinkClick} className="block hover:text-blue-400 transition">Skills</a>
          <a href="#projects" onClick={handleLinkClick} className="block hover:text-blue-400 transitionf">Projects</a>
          <a href="#contact" onClick={handleLinkClick} className="block hover:text-blue-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;