import React, { useState, useContext } from 'react';
import { FaNodeJs, FaBars } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const Navbar = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/'); // State to track active item

  const toggleSidebar = (state) => {
    setIsSidebarOpen(state);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsSidebarOpen(false); // Close sidebar on item click
  };

  return (
    <div className={`relative ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isSidebarOpen ? 'opacity-0' : 'opacity-0 pointer-events-none'
        }`}
      />

      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 shadow-md
        transition-colors duration-500 ease-in-out ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-800'}`}>
        <a href="/" className={`text-2xl font-extrabold flex items-center transition duration-600 hover:text-orange-400
          ${isDarkMode ? 'text-white' : 'text-white'}`}>
          <FaNodeJs className="mr-2" /> Ujwal Garg
        </a>
        <div className="md:hidden" onClick={() => toggleSidebar(!isSidebarOpen)}>
          <FaBars size={24} className={`cursor-pointer ${isDarkMode ? 'text-white' : 'text-white'}`} />
        </div>

        <DesktopView 
          isDarkMode={isDarkMode} 
          activeItem={activeItem} 
          handleItemClick={handleItemClick} 
        />
        <MobileView
          isDarkMode={isDarkMode}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          activeItem={activeItem}
          handleItemClick={handleItemClick}
        />
      </header>
    </div>
  );
};

export default Navbar;
