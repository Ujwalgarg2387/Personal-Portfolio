import React, {useContext} from 'react';
import { TfiArrowCircleRight } from "react-icons/tfi";
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <footer className={`pt-10 px-4 md:px-36 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'}`}>
            <div className="container mx-auto flex flex-col md:flex-row justify-center gap-12 md:gap-[350px]">
                <div className="left-side mb-8 md:mb-0 md:w-1/2">
                    <h2 className="text-2xl font-bold text-customOrange shadow-orange-glow">Ujwal's Portfolio</h2>
                    <p className="text-lg mt-4 max-w-md">
                        Thank you for visiting my personal portfolio website. Connect with me over socials.
                    </p>
                    <p className="text-lg mt-4">
                        Keep Rising 🚀.
                    </p>
                </div>
                <div className="right-side md:w-1/2">
                    <h2 className="text-2xl font-semi-bold mb-4">Quick Links</h2>
                    <ul className="links space-y-3">
                        {['Home', 'About', 'Skills', 'Education', 'Projects'].map((link, index) => (
                            <li key={index} className="text-md flex items-center cursor-pointer transition-colors duration-300 hover:text-yellow-400">
                                <TfiArrowCircleRight size={18} />
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className="ml-2 text-white hover:text-yellow-400 transition-colors duration-300"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mt-10 mb-0 flex items-center justify-center'>
                <p className='text-md text-white'>
                    Designed With ❤️ By <span className="text-customOrange">Ujwal Garg</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
