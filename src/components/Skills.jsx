import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si'; // Import the Tailwind CSS icon
import { RiLightbulbFlashFill } from "react-icons/ri";
import { ThemeContext } from '../context/ThemeContext';
import cplus from '../assets/c++.svg';

const skillsData = [
  'Python',
  'C++',
  'SQL',
  'OS',
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Tailwindcss'
];

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const imageShadowStyle = {
    boxShadow: isDarkMode
      ? 'rgba(245, 101, 57, 0.3) 0px 0px 30px'
      : '6px 6px 19px #a7a6a6,-6px -6px 19px #b5b4b4'
  };

  const getIcon = (skill) => {
    switch (skill) {
      case 'Python':
        return <FaPython className="text-8xl md:text-8xl text-blue-600 cursor-pointer" />;
      case 'C++':
        return <img src={cplus} alt="C++" className="cursor-pointer w-24 h-24"/>;
      case 'SQL':
        return <FaDatabase className="text-8xl md:text-8xl text-yellow-400 cursor-pointer" />;
      case 'OS':
        return <FaLaptopCode className="text-8xl md:text-8xl text-green-500 cursor-pointer" />;
      case 'HTML':
        return <FaHtml5 className="text-8xl md:text-8xl text-orange-500 cursor-pointer" />;
      case 'CSS':
        return <FaCss3Alt className="text-8xl md:text-8xl text-blue-600 cursor-pointer" />;
      case 'Javascript':
        return <FaJsSquare className="text-8xl md:text-8xl text-yellow-400 cursor-pointer" />;
      case 'React':
        return <FaReact className="text-8xl md:text-8xl text-cyan-500 cursor-pointer" />;
      case 'Tailwindcss':
        return <SiTailwindcss className="text-8xl md:text-8xl text-blue-600 cursor-pointer" />;
      default:
        return null;
    }
  };

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-dark-bg text-gray-400' : 'bg-gray-100'}`} id='skills'>
      <div className="flex items-center justify-center mb-20">
        <RiLightbulbFlashFill className={`text-4xl ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`} />
        <h2 className={`text-4xl md:text-[40px] ml-4 font-bold ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}>
          Skills and Abilities
        </h2>
      </div>
      <div className="container mx-auto px-4" data-aos="fade-down">
        <Marquee speed={100} pauseOnHover gradient={false} className="flex items-center justify-around">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center mx-8 p-6 transition duration-300 transform hover:scale-110">
              <div className="flex flex-col items-center justify-center rounded-lg p-4 w-44 h-44"
                style={{ ...imageShadowStyle }}>
                {getIcon(skill)}
                <span className={`mt-4 text-[20px] font-semibold ${isDarkMode ? "text-gray-400": "text-gray-600"}`}
                  style={{ fontFamily: 'Big Shoulders Text, sans-serif', fontWeight: 800, fontStyle: 'normal' }}>
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
