import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
        <Router>
          <div style={{ paddingTop: '80px' }}>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Title />
                    <About />
                    <Skills />
                    <Education />
                    <Projects />
                    <Experience />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route path="/all-projects" element={<AllProjects />} />
            </Routes>
            <ScrollToTopButton />
            <DarkModeToggle />
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
