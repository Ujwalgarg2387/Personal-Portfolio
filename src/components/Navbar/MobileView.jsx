import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const MobileView = ({ isDarkMode, isSidebarOpen, toggleSidebar, activeItem, handleItemClick }) => {
  const sidebarRef = useRef(null);

  // Effect to set up outside click detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div
      ref={sidebarRef}
      className={`md:hidden fixed top-0 bottom-0 right-0 w-64 p-6 transition-transform duration-300 ease-in-out transform
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        ${isDarkMode ? 'bg-dark-bg text-white' : 'bg-gray-800 text-white'}
        `}
      style={{ borderRadius: '24px 0 0 24px' }}
    >
      <div className="flex justify-end">
        <button onClick={() => toggleSidebar(false)} className="text-white">
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="mt-6">
        <ul className="flex flex-col space-y-4 text-lg">
          <li className={`rounded-lg ${activeItem === '/' ? (isDarkMode ? 'shadow-yellow-glow underline' : 'shadow-white-glow underline') : ''} `}>
            <a href="#home" className="font-semibold transition duration-200" onClick={() => handleItemClick('/')}>
              Home
            </a>
          </li>
          <li className={`rounded-lg ${activeItem === '#about' ? (isDarkMode ? 'shadow-yellow-glow underline' : 'shadow-white-glow underline') : ''} `}>
            <a href="#about" className="font-semibold transition duration-200" onClick={() => handleItemClick('#about')}>
              About
            </a>
          </li>
          <li className={`rounded-lg ${activeItem === '#skills' ? (isDarkMode ? 'shadow-yellow-glow underline' : 'shadow-white-glow underline') : ''} `}>
            <a href="#skills" className="font-semibold transition duration-200" onClick={() => handleItemClick('#skills')}>
              Skills
            </a>
          </li>
          <li className={`rounded-lg ${activeItem === '#education' ? (isDarkMode ? 'shadow-yellow-glow underline' : 'shadow-white-glow underline') : ''} `}>
            <a href="#education" className="font-semibold transition duration-200" onClick={() => handleItemClick('#education')}>
              Education
            </a>
          </li>
          <li className={`rounded-lg ${activeItem === '#projects' ? (isDarkMode ? 'shadow-yellow-glow underline' : 'shadow-white-glow underline') : ''} `}>
            <a href="#projects" className="font-semibold transition duration-200" onClick={() => handleItemClick('#projects')}>
              Projects
            </a>
          </li>
          <li className={`rounded-lg ${activeItem === '#experience' ? (isDarkMode ? 'shadow-yellow-glow underline' : 'shadow-white-glow underline') : ''} `}>
            <a href="#experience" className="font-semibold transition duration-200" onClick={() => handleItemClick('#experience')}>
              Experience
            </a>
          </li>
          <li className={`rounded-lg ${activeItem === '#contact' ? (isDarkMode ? 'shadow-yellow-glow underline' : 'shadow-white-glow underline') : ''} `}>
            <a href="#contact" className="font-semibold transition duration-200" onClick={() => handleItemClick('#contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileView;
