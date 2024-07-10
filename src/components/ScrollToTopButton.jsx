import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-800 outline outline-1 outline-white text-white shadow-lg transition duration-300"
        >
          <IoIosArrowUp size={30} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
