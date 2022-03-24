import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import reactDom from 'react-dom';


function App() {

  // for Navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // for Skills section
  const [altSkills, toggleSkills] = useState(false);
  const toggleViews = () => {
    toggleSkills(!altSkills);
  }

  return (
    <Router>
      <Navbar toggle={toggle} />
      <LandingPage />
      <About toggleViews={toggleViews} altSkills={altSkills}/>
      <Projects />
      <Contact />
      <Footer/>
    </Router>
  );
}

export default App;