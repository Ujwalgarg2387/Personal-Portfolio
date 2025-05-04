import React, { useContext } from 'react';
import leftimg from '../assets/exp.jpg';
import { FaBriefcase } from "react-icons/fa6";
import { BsBriefcase } from "react-icons/bs";
import { ThemeContext } from '../context/ThemeContext';

const Experience = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const imageShadowStyle = {
    boxShadow: isDarkMode
      ? ''
      : '6px 6px 19px #a7a6a6,-6px -6px 19px #b5b4b4'
  };

  const experiences = [
    {
      date: 'March 2025 - Present',
      title: 'Backend Developer',
      description: 'CliQ India Pvt. Ltd.',
      bgColor: 'hover:bg-blue-100',
      delay: '200'
    },
    {
      date: 'April 2024 - July 2024',
      title: 'Software Developer Intern',
      description: 'Debug Solutions Pvt. Ltd. | Internship',
      bgColor: 'hover:bg-yellow-100',
      delay: '200'
    },
    {
      date: 'Dec 2022- Jan 2023',
      title: 'Data Science and ML Intern',
      description: 'The Sparks Foundation | Internship',
      bgColor: 'hover:bg-green-100',
      delay: '200'
    },
    
  ];

  return (
    <section className={`py-10 md:py-20 px-4 md:px-40 ${isDarkMode ? 'bg-dark-bg text-gray-400' : 'bg-white text-gray-800'}`} id='experience'>
      {/* Heading */}
      <div className="flex items-center justify-center mb-8">
        <FaBriefcase className={`text-3xl ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`} />
        <h2 className={`text-4xl md:text-[40px] font-bold ml-4 ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}>
          Experience
        </h2>
      </div>

      {/* Main Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 px-4 md:px-8">
        {/* Image Section (Left for Desktop, Hidden for Mobile) */}
        <div className="md:w-1/3 md:flex-shrink-0 hidden md:block">
          <img
            src={leftimg} // Replace with actual image URL
            alt="Company Image"
            className="w-full h-auto rounded-lg shadow-lg"
            style={imageShadowStyle}
          />
        </div>

        {/* Experience Entries Section */}
        <div className="md:w-2/3">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md
              transition-colors duration-300 p-4 md:p-6 mb-4 md:mb-6 flex flex-col md:flex-row items-center
              ${isDarkMode 
                ? 'bg-gray-700 border border-gray-600 hover:border-orange-400'
                : `bg-white ${experience.bgColor}`
              }`}
              data-aos="fade-down"
              data-aos-delay={experience.delay}
              style={imageShadowStyle}
            >
              <div className={`rounded-full border p-2 mb-4 md:mb-0 md:mr-4
                ${isDarkMode ? 'border-white' : 'border-black'}`}>
                <BsBriefcase size={24} className={`${isDarkMode ? 'text-white' : 'text-black'}`}/>
              </div>
              <div className="flex flex-col md:flex-row md:flex-1 md:items-center text-center md:text-left">
                <div className="md:mr-4">
                  <h4 className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>{experience.date}</h4>
                  
                  <h3 className={`text-xl md:text-2xl font-bold mb-1
                    ${isDarkMode ? 'text-customOrange' : 'text-blue-900'}`}>{experience.title}</h3>
                  
                  <p className={`text-lg mt-2 md:mt-0 md:flex-1
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{experience.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
