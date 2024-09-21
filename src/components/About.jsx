import React, { useContext } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { ThemeContext } from '../context/ThemeContext';
import profileImage from '../assets/pic.jpg';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const imageShadowStyle = {
    boxShadow: isDarkMode
      ? 'rgba(245, 101, 57, 0.3) 0px 0px 30px'
      : '5px -5px 19px #595959,-5px 5px 19px #737373',
    transition: 'box-shadow 0.3s ease-in-out'
  };

  return (
    <section className={`py-20 px-4 md:px-40 ${isDarkMode ? 'bg-dark-bg text-gray-400' : 'bg-white text-gray-800'}`} id='about'>
      <div className="flex items-center justify-center mb-20">
        <FaUserAlt className={`text-3xl ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}
        />
        <h2 
          className={`text-4xl md:text-[40px] font-bold ml-4 ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}
        >
          Who I Am
        </h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 md:pr-8" data-aos="fade-down">
          <div className="text-center md:text-left">
            <h3 className={`text-2xl md:text-3xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-orange-600'}`}>
              My name's Ujwal Garg
            </h3>
            <p className="about-text text-xl md:text-[22px] mb-8">
              I'm a Computer Science graduate and a passionate developer building web applications. With a strong foundation in frontend 
              technologies, I strive to build seamless and efficient applications. I am constantly learning and evolving, driven by my curiosity and dedication to improving my skills and knowledge.
              Working for myself to improve my overall development.
            </p>
          </div>
          <div className="mt-8 mb-8 flex justify-center md:justify-start space-x-4">
            <a href="https://drive.google.com/file/d/1U7RbtEnvIt4Eqzbziga_PGVzNxdYXiQF/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className={`text-md px-8 py-3 rounded-full flex items-center 
              transition duration-300 ease-in-out transform hover:scale-110 border
              ${isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-white hover:text-blue-900 border-white' 
                : 'bg-white text-blue-900 hover:bg-blue-900 hover:text-white border-blue-900'}`}>
              Resume <SlArrowRight />
            </a>
            <a href="#contact">
              <button className={`text-md px-12 py-3 rounded-full flex items-center 
                transition duration-300 ease-in-out transform hover:scale-110 border
                ${isDarkMode
                  ? 'hover:bg-dark-bg bg-customOrange text-black hover:text-white border-2 border-customOrange hover:border-white'
                  : 'bg-blue-900 text-white hover:bg-white hover:text-blue-900 border-blue-900'}`}>
                Contact
              </button>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 md:h-[64vh]" data-aos="fade-down" data-aos-delay="100">
          <img src={profileImage} alt="Profile" 
            className={`rounded-full md:rounded-lg w-64 h-64 md:w-80 md:h-fit object-cover 
            ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'}`} 
            style={imageShadowStyle} />
        </div>
      </div>
    </section>
  );
};

export default About;