import React, { useState, useEffect } from 'react'
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

  // ============================= For projects ============================================
  const [projectsArr, setProjectsArr ] = useState([]);
  

  useEffect(() => {
      fetchProjects();
  }, [projectsArr.length])

  const fetchProjects = async () => {
      await fetch('http://localhost:8079/projects/')
        .then(response => response.json())
        .then(data => {
          setProjectsArr(data);
          //console.log(projectsArr);
          console.log("Projects Length: " + projectsArr.length);
    })
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
      {/* <Projects/> */}
      {projectsArr && <Projects projects={projectsArr} />}
      <Contact />
      <Footer/>
    </Router>
  );
}

export default App;