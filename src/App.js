import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    // You can only return a single parent element (i.e. only the div)
    <Router>
      <Navbar toggle={toggle} />
      <LandingPage />
      <About />
      {/* <Projects /> */}
      <Contact />
    </Router>
  );
}

export default App;