import React, { useContext } from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { projectsData } from './Projects'; // Assuming you export the projectsData from Projects.js

const AllProjects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`py-2 px-4 md:px-5 ${isDarkMode ? 'bg-dark-bg text-gray-400' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto flex flex-col items-center justify-start overflow-x-hidden p-8">
        <div className="flex items-center justify-center mb-10">
          <h2 className={`text-4xl md:text-[40px] font-bold ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}>
            All Projects
          </h2>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-10">
            {projectsData.map((project) => (
              <div key={project.id} className="w-[300px] h-[360px] md:w-[300px] md:h-[360px] rounded-lg shadow-lg overflow-hidden 
              relative cursor-pointer group mb-8 bg-white"
              data-aos="fade-down"
              data-aos-delay={project.id * 150}>

                <div className="flex flex-col items-center justify-between w-full h-full p-6 bg-[#e8e8d4] hover:bg-[#cfcfa5]">
                  <h2 className="font-semibold text-xl text-center mb-4 text-gray-800">
                    {project.projectName}
                  </h2>
                  <img src={project.image} alt={project.projectName} className="w-full h-3/5 object-cover transition-opacity duration-700 delay-300 group-hover:opacity-0" />
                  <div className="absolute w-[95%] h-[45%] md:text-md left-0 top-0 flex justify-center overflow-hidden p-4 rounded-r-[20px] transition-transform duration-500 delay-200 translate-x-[-110%] translate-y-[40%] group-hover:translate-x-[-2%] bg-gray-800 text-white">
                    <p>{project.projectDesc}</p>
                  </div>
                  <div className="flex justify-between w-full mt-4">
                    <a href={project.demo} target="_blank" rel="noreferrer"
                       className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-800 text-gray-800 transition-all duration-200 hover:scale-110 hover:bg-gray-800 hover:text-white">
                      <FaPlay className="text-lg" />
                    </a>
                    <a href={project.code} target="_blank" rel="noreferrer"
                       className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-800 text-gray-800 transition-all duration-200 hover:scale-110 group-hover:translate-x-[-140px] hover:bg-gray-800 hover:text-white">
                      <FaCode className="text-lg" />
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-5 right-0 w-[140px] text-sm flex flex-col justify-center gap-2 rounded-l-lg transition-transform duration-500 delay-200 translate-x-full group-hover:translate-x-0 p-3 bg-gray-800 text-white">
                    {project.tags.map((tag, index) => (
                    <span key={index} className="font-medium break-words">{tag}</span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
