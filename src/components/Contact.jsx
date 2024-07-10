// Contact.jsx
import React, { useState, useContext } from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../context/ThemeContext';
import sideimg from '../assets/contact_sideimg.svg';

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/meojjnjb", {
      method: "POST",
      body: new FormData(form),
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          toast.success("Message sent successfully!");
          form.reset();
          setIsSubmitted(true);
        } else {
          toast.error("Failed to send the message. Please try again later.");
        }
      })
      .catch(error => {
        toast.error("Failed to send the message. Please try again later.");
      });
  };

  return (
    <section className={`flex flex-col py-8 ${isDarkMode ? 'bg-dark-bg text-white' : 'bg-gray-100 text-gray-800'}`} id="contact">
      <ToastContainer />
      <div className="flex items-center justify-center mb-10">
        <BsFillPhoneFill
          className={`text-3xl ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}
        />
        <h2
          className={`text-4xl md:text-[40px] font-bold ml-4 ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}
        >
          Contact
        </h2>
      </div>
      <div className="contacts-form flex flex-col md:flex-row md:justify-center md:items-start md:gap-8">
        <form className="w-full p-5 md:w-2/5 mb-8 md:mb-0"
          action="https://formspree.io/f/meojjnjb"
          method="POST"
          onSubmit={handleSubmit}>
          <div className="mb-4" data-aos="fade-down" data-aos-delay="100">
            <label
              htmlFor="name"
              className={`block text-sm font-semibold ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className={`
                form-input mt-1 mb-8 block w-full px-3 py-2 border rounded-2xl shadow-sm
                focus:outline-none transition duration-300 ease-in-out
                ${isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white hover:border-orange-400 focus:border-orange-400 focus:ring focus:ring-orange-400 focus:ring-opacity-50'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50'
                }
              `}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4" data-aos="fade-down" data-aos-delay="200">
            <label
              htmlFor="email"
              className={`block text-sm font-semibold ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={`
                form-input mt-1 mb-8 block w-full px-3 py-2 border rounded-2xl shadow-sm
                focus:outline-none transition duration-300 ease-in-out
                ${isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white hover:border-orange-400 focus:border-orange-400 focus:ring focus:ring-orange-400 focus:ring-opacity-50' 
                  : 'bg-white border-gray-300 text-gray-700 hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50'
                }
              `}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4" data-aos="fade-down" data-aos-delay="300">
            <label
              htmlFor="message"
              className={`block text-sm font-semibold ${isDarkMode ? 'text-customOrange' : 'text-customBlue'}`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`
                form-input mt-1 mb-8 block w-full px-3 py-2 border rounded-2xl shadow-sm
                focus:outline-none transition duration-300 ease-in-out
                ${isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-white hover:border-orange-400 focus:border-orange-400 focus:ring focus:ring-orange-400 focus:ring-opacity-50' 
                  : 'bg-white border-gray-300 text-gray-700 hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50'
                }
              `}
              rows="4"
              placeholder="Type your message..."
              required
            />
          </div>
          <div className="mb-4" data-aos="fade-down" data-aos-delay="300">
            <button
              type="submit"
              className={`
                py-2 px-3 border border-transparent text-sm font-semibold rounded-2xl
                transition duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2
                ${isDarkMode
                  ? 'text-gray-900 bg-orange-400 hover:bg-orange-500 hover:shadow-orange-glow focus:ring-orange-400 focus:ring-offset-gray-800'
                  : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-600 focus:ring-offset-white'
                }
              `}
            >
              Send
            </button>
          </div>
        </form>
        <div className="contacts-details p-5 ml-8 md:ml-8 md:mt-2" data-aos="fade-down" data-aos-delay="100">
          <div className="personal-details mb-8 flex items-center">
            <FiMail className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            <p className="ml-3 font-semibold text-lg">
              ujwalgarg2387@gmail.com
            </p>
          </div>
          <div className="personal-details mb-8 flex items-center">
            <FiPhone className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            <p className="ml-3 font-semibold text-lg">
              +91 8171384868
            </p>
          </div>
          <div className="personal-details flex items-center">
            <FiMapPin className={`text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            <p className="ml-3 font-semibold text-lg">
              Roorkee, Uttarakhand, India
            </p>
          </div>
        </div>
        <div className="hidden md:block" data-aos="fade-down" data-aos-delay="600">
          <img
            src={sideimg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
