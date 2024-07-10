import React, {useContext} from 'react';
// import { Link } from 'react-router-dom';
import { FaPlay, FaCode, FaLaptopCode } from 'react-icons/fa';
// import { HiArrowRight } from "react-icons/hi";
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import { ThemeContext } from '../context/ThemeContext';

const projectsData = [
  {
    id:1,
    projectName: "Chat Application",
    projectDesc: "This project aims to build a functional chat application with modern UI/UX design that enables users to search and communicate with others in real-time.",
    tags: ["React", "TailWindCSS", "Firebase"],
    code: "https://github.com/Ujwalgarg2387/Reactjs-firebase-Chatapp",
    demo: "https://react-firebase-chatapp.netlify.app/",
    image: image1,
  },
  {
    id:2,
    projectName: "Agriculture Crop Prediction",
    projectDesc: "This is a ML based predictive model developed that suggest suitable crop to grow in the given climatic & soil conditions such as Rainfall, pH, N, P, Humidity, Temperature, etc.",
    tags: ["ML", "Python", "Reactjs"],
    code: "https://github.com/Ujwalgarg2387/Agriculture-Crop-Predictor",
    demo: "https://github.com/Ujwalgarg2387/Agriculture-Crop-Predictor",
    image: image2,
  },
  {
    id:3,
    projectName: "Google Keep Notes",
    projectDesc: "A simple web application that provides users with functionality to create, store, delete short notes/messages",
    tags: ["HTML", "CSS", "JS"],
    code: "https://github.com/Ujwalgarg2387/Google-Keep-Notes",
    demo: "https://ujwalgarg2387.github.io/Google-Keep-Notes/",
    image: image3,
  },
];

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`py-10 px-4 md:px-20 ${isDarkMode ? 'bg-dark-bg text-gray-400' : 'bg-gray-100 text-gray-800'}`} id='projects'>
    <div className='container mx-auto flex flex-col items-center justify-start overflow-x-hidden p-8'>
      <div className="flex items-center justify-center mb-20">
        <FaLaptopCode className={`text-4xl ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`} />
        <h2 className={`text-4xl md:text-[40px] font-bold ml-4 ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}>
          Key Projects
        </h2>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center gap-10">
          {projectsData.slice(0, 3).map((project) => (
            <div key={project.id} className="w-[300px] h-[360px] md:w-[350px] md:h-[410px] rounded-lg shadow-lg overflow-hidden relative cursor-pointer group mb-8 bg-white" 
            data-aos="fade-down"
            data-aos-delay={project.id * 200}>

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
        {/* {projectsData.length > 3 && (
          <div className="w-full flex justify-end mt-8 pr-8">
          <Link to="/projects">
          <button className="w-[150px] h-12 flex items-center justify-between rounded-full text-lg font-medium px-6 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
          View All
          <HiArrowRight className="text-xl p-1 rounded-full bg-blue-600" />
          </button>
          </Link>
          </div>
          )} */}
      </div>
    </div>
    </section>
  );
};

export default Projects;