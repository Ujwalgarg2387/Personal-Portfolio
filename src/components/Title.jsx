import React, { useContext } from 'react';
import { FaLinkedin, FaGithub, FaCode, FaArrowDown } from 'react-icons/fa';
import backgroundImage from '../assets/backimg.jpg';  // Adjust path as per your project structure
import { ReactTyped } from 'react-typed';
import { ThemeContext } from '../context/ThemeContext';

const Title = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`py-40 px-4 md:px-40 relative ${isDarkMode ? 'bg-dark-bg text-white' : 'bg-gray-100 text-gray-800'}`} id='home'>
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: `blur(8px)`
        }}
      />
      
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative">
        {/* Section with Text and Links */}
        <div className="w-full md:w-1/2 md:ml-20 md:pl-8 mb-8 md:mt-0">
          <div className="text-center md:text-left">
          <h2 className={`
            text-4xl font-bold mb-4 
            ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}
            ${isDarkMode 
              ? '[text-shadow:_3px_3px_0_#0056b3,_-1px_-1px_0_#0056b3,_1px_-1px_0_#0056b3,_-1px_1px_0_#0056b3,_1px_1px_0_#0056b3]'
              : '[text-shadow:_3px_3px_0_#ffa502,_-1px_-1px_0_#ffa502,_1px_-1px_0_#ffa502,_-1px_1px_0_#ffa502,_1px_1px_0_#ffa502]'
            }
            ${isDarkMode
              ? '[webkit-text-stroke:_2px_#ffa502] [text-stroke:_2px_#ffa502]'
              : '[webkit-text-stroke:_2px_#0056b3] [text-stroke:_2px_#0056b3]'
            }
            transition-all duration-300 ease-in-out
          `}>
            Hey there,
          </h2>
          <h2 className="text-4xl font-bold mb-4 relative text-white">
            <span className={`
              relative z-10
              ${isDarkMode 
                ? '[text-shadow:_0_0_5px_#FFA500,_0_0_10px_#FFA500,_0_0_15px_#FFA500,_0_0_20px_#FF8C00,_0_0_5px_#FF8C00]'
                : '[text-shadow:_0_0_5px_#4169E1,_0_0_10px_#4169E1,_0_0_15px_#4169E1,_0_0_20px_#07cbf7,_0_0_5px_#07cbf7]'
              }
              transition-all duration-300 ease-in-out
            `}>
              I am Ujwal Garg
            </span>
          </h2>
          <p className="text-2xl font-bold mb-4 text-gray-100 md:text-blue-800"
            data-aos="fade-down" data-aos-delay="100">
            I am into{' '}
            <span className="typing-text">
              <ReactTyped
                strings={[
                  '<span class="inline-block text-[#ff0000] font-bold [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]">Coding and DSA</span>',
                  '<span class="inline-block text-[#ff0000] font-bold [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]">Frontend Development</span>',
                  '<span class="inline-block text-[#ff0000] font-bold [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]">Web Development</span>',
                ]}
                typeSpeed={50}
                backSpeed={25}
                backDelay={500}
                loop
                contentType="html"
              />
            </span>
          </p>
            <div className="mt-8 flex justify-center md:justify-start" data-aos="fade-down" data-aos-delay="200">
              <a href="#about">
                <button className={`text-md px-6 py-3 rounded-full flex items-center 
                    transition duration-300 ease-in-out transform hover:scale-110
                    ${isDarkMode 
                      ? 'bg-orange-400 outline outline-1 outline-white text-gray-900 hover:bg-orange-500 shadow-orange-glow' 
                      : 'bg-customBlue outline outline-1 outline-white text-white hover:bg-blue-900 shadow-blue-glow'}`}>
                  Know me <FaArrowDown className="ml-2" />
                </button>
              </a>
            </div>
            <div className="flex justify-center md:justify-start space-x-8 mt-4 md:mt-8" data-aos="fade-down" data-aos-delay="300">
              <SocialLink icon={FaLinkedin} url="http://linkedin.com/in/ujwal-garg-449974198/" label="LinkedIn" isDarkMode={isDarkMode} />
              <SocialLink icon={FaGithub} url="https://github.com/UjwalGarg2387" label="GitHub" isDarkMode={isDarkMode} />
              <SocialLink icon={FaCode} url="https://leetcode.com/u/user8118cO/" label="LeetCode" isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-20 text-blue-900'>
        <div className="w-full max-w-full flex items-center">
          <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-white' : 'bg-blue-900'}`}></div>
          <div className={`w-3 h-3 ml-2 mr-4 rounded-full ${isDarkMode ? 'bg-white' : 'bg-blue-900'}`}></div>
          <div className={`h-1 flex-grow ml-2 bg-current rounded-full ${isDarkMode ? 'bg-white' : 'bg-blue-900'}`}></div>
        </div>
      </div>
      
    </section>
  );
};

const SocialLink = ({ icon: Icon, url, label, isDarkMode }) => {
  return (
    <a
      href={url}
      className={`flex items-center justify-center w-12 h-12 rounded-full
            transition duration-300 ease-in-out transform hover:scale-110
            focus:outline-none focus:ring focus:border-white mt-4 md:mt-0 border
            ${isDarkMode 
              ? 'bg-dark-bg text-white border-white hover:text-dark-bg hover:bg-white hover:outline hover:outline-1 hover:outline-dark-bg' 
              : 'bg-white text-blue-800 border-blue-800 hover:bg-blue-900 hover:text-white hover:outline hover:outline-1 hover:outline-white'}
            `}
      rel="noopener noreferrer"
    >
      <Icon className="text-2xl" />
      <span className="sr-only">{label}</span>
    </a>
  );
};

export default Title;
