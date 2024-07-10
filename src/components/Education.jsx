import React, {useContext} from "react";
import { FaGraduationCap } from "react-icons/fa"; // Import graduation cap icon from react-icons/fa
import { ThemeContext } from "../context/ThemeContext";

const Education = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const imageShadowStyle = {
    boxShadow: isDarkMode
      ? ''
      : '6px 6px 19px #a7a6a6,-6px -6px 19px #b5b4b4'
  };

  const collegeUrl =
    "https://images.indianexpress.com/2023/07/Chandigarh-University.jpg";
  const schoolUrl =
    "data:image/jpeg;base64,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";

  return (
    <section className={`py-20 px-4 md:px-40 ${isDarkMode ? 'bg-dark-bg text-gray-400' : 'bg-white text-gray-800'}`} id="education">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-center">
          <FaGraduationCap className={`text-4xl ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`} />
          <h2
            className={`text-4xl md:text-[40px] font-bold ml-4 ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}
          >
            Education
          </h2>
        </div>

        {/* Education Entry 1: Bachelor's of Engineering */}
        <div className={`subcontainer rounded-lg shadow-md overflow-hidden mb-8 md:flex
        transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 
        ${isDarkMode 
          ? 'bg-gray-700 border border-gray-600 hover:border-orange-400'
          : `bg-white hover:bg-[#cfcfa5] bg-[#e8e8d4]`
        }`} 
        data-aos="fade-down" data-aos-offset="100"
        style={imageShadowStyle} >
          {/* Image Section (Left for Desktop, Top for Mobile) */}
          <div className="md:w-[350px] md:flex-shrink-0">
            <img
              src={collegeUrl} // Replace with actual image URL
              alt="Chandigarh University"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 md:w-2/3 md:pl-6">
            <h2 className={`text-2xl font-bold mb-2
              ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
              Bachelor's of Engineering in Computer Science
            </h2>
            <h3 className={`text-lg font-semibold mb-2
              ${isDarkMode ? 'text-customOrange' : 'text-gray-700'}`}>
              Chandigarh University | Punjab
            </h3>
            <p className={`text-base md:text-lg
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              2019-2023 | Completed
            </p>
          </div>
        </div>

        {/* Education Entry 2: 10th and 12th Standard */}
        <div className={`subcontainer rounded-lg shadow-md overflow-hidden mb-8 md:flex
        transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 
        ${isDarkMode 
          ? 'bg-gray-700 border border-gray-600 hover:border-orange-400'
          : `bg-white hover:bg-[#cfcfa5] bg-[#e8e8d4]`
        }`}
        data-aos="fade-down" data-aos-offset="100"
        style={imageShadowStyle} >
          {/* Image Section (Left for Desktop, Top for Mobile) */}
          <div className="md:w-[350px] md:flex-shrink-0">
            <img
              src={schoolUrl} // Replace with actual image URL
              alt="Army Public School No.1 Roorkee"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 md:w-2/3 md:pl-6">
            <h2 className={`text-2xl font-bold mb-2
              ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
              10th and 12th Standard
            </h2>
            <h3 className={`text-lg font-semibold mb-2
              ${isDarkMode ? 'text-customOrange' : 'text-gray-700'}`}>
              Army Public School No.1 Roorkee | Uttarakhand
            </h3>
            <p className={`text-base md:text-lg
              ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              2016-2019 | Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
