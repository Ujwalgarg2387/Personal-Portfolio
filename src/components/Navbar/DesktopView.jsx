import React from 'react';

const DesktopView = ({ isDarkMode, activeItem, handleItemClick }) => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex flex-col md:flex-row md:space-x-8 text-lg">
        <li className={`transition duration-200 transform hover:scale-125 ${activeItem === '/' ? 'underline' : ''}`}>
          <a href="#home" className={`font-semibold transition duration-200 
            ${activeItem === '/' && isDarkMode ? 'text-blue-700' : ''}
            ${isDarkMode ? 'text-white hover:text-blue-700' : 'text-white'}`} 
            onClick={() => handleItemClick('/')}>
            Home
          </a>
        </li>
        <li className={`transition duration-200 transform hover:scale-125 ${activeItem === '#about' ? 'underline' : ''}`}>
          <a href="#about" className={`font-semibold transition duration-200 
            ${activeItem === '#about' && isDarkMode ? 'text-blue-700' : ''} 
            ${isDarkMode ? 'text-white hover:text-blue-700' : 'text-white'}`} 
            onClick={() => handleItemClick('#about')}>
            About
          </a>
        </li>
        <li className={`transition duration-200 transform hover:scale-125 ${activeItem === '#skills' ? 'underline' : ''}`}>
          <a href="#skills" className={`font-semibold transition duration-200 
            ${activeItem === '#skills' && isDarkMode ? 'text-blue-700' : ''} 
            ${isDarkMode ? 'text-white hover:text-blue-700' : 'text-white'}`} 
            onClick={() => handleItemClick('#skills')}>
            Skills
          </a>
        </li>
        <li className={`transition duration-200 transform hover:scale-125 ${activeItem === '#projects' ? 'underline' : ''}`}>
          <a href="#projects" className={`font-semibold transition duration-200 
            ${activeItem === '#projects' && isDarkMode ? 'text-blue-700' : ''} 
            ${isDarkMode ? 'text-white hover:text-blue-700' : 'text-white'}`} 
            onClick={() => handleItemClick('#projects')}>
            Projects
          </a>
        </li>
        <li className={`transition duration-200 transform hover:scale-125 ${activeItem === '#experience' ? 'underline' : ''}`}>
          <a href="#experience" className={`font-semibold transition duration-200 
            ${activeItem === '#experience' && isDarkMode ? 'text-blue-700' : ''} 
            ${isDarkMode ? 'text-white hover:text-blue-700' : 'text-white'}`} 
            onClick={() => handleItemClick('#experience')}>
            Experience
          </a>
        </li>
        <li className={`transition duration-200 transform hover:scale-125 ${activeItem === '#contact' ? 'underline' : ''}`}>
          <a href="#contact" className={`font-semibold transition duration-200 
            ${activeItem === '#contact' && isDarkMode ? 'text-blue-700' : ''} 
            ${isDarkMode ? 'text-white hover:text-blue-700' : 'text-white'}`} 
            onClick={() => handleItemClick('#contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopView;
