import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isChecked = theme === 'dark';

  return (
    <div className="fixed bottom-16 right-8">
      <input
        id="switch"
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={isChecked}
        onChange={toggleTheme}
      />
      <label
        htmlFor="switch"
        className="relative flex items-center cursor-pointer bg-gray-700 rounded-full p-2 outline outline-1 outline-white transition-all duration-300 ease-in-out w-[54px] h-7"
      >
        <div
          className={`absolute flex items-center justify-center left-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 ease-in-out transform ${isChecked ? 'translate-x-6' : ''}`}
        >
          {isChecked ? (
            <FaMoon className="text-sky-900" />
          ) : (
            <FaSun className="text-yellow-500" />
          )}
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
