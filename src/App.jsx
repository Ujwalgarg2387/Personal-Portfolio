import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton';
import DarkModeToggle from './components/DarkModeToggle';
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
        duration: 600, 
        once: false,     
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div style={{ paddingTop: '80px' }}>
            <Navbar/>
            <Title/>
            <About/>
            <Skills/>
            <Education/>
            <Projects/>
            <Experience/>
            <Contact/>
            <Footer/>
            <ScrollToTopButton />
            <DarkModeToggle />
          </div>
        </>
      )}
    </>
  )
}

export default App
