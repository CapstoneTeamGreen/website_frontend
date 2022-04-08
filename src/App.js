import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { project1, project2, project3, project4, project5 } from './DefaultProjects';


function App() {

  // for Navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // ============================= For profile ============================================
  const [ profile, setProfile] = useState([]);
  const defaultProfile = {
    "id": 1,
    "authorName": "Dev",
    "developerType": "back-end"
  }

  useEffect(() => {
    fetchProfile();
  }, [profile.length])


  const fetchProfile = async () => {
    let selectedProfile = 0;
    await fetch('http://localhost:8079/profiles/')
      .then(response => response.json())
      .then(data => {
        setProfile(data[selectedProfile]);})
      .catch(error => {
        console.log(error + '\nCould not establish connection. Reading default profile object')
      })
  }


  // ============================= For projects ============================================
  const [projectsArr, setProjectsArr ] = useState([]);
  const defaultProjects = [project1, project2, project3, project4, project5];

  useEffect(() => {
      fetchProjects();
  }, [projectsArr.length])

  const fetchProjects = async () => {
      await fetch('http://localhost:8079/projects/')
        .then(response => response.json())
        .then(data => {
          setProjectsArr(data);
          console.log("Projects Length: " + projectsArr.length);})
        .catch(error => {
          console.log(error + '\nCould not establish connection. Reading default project object')
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
      
      {/* The Profile display*/}
      <LandingPage profile={profile.length === 1 ? profile : defaultProfile}/>
      
      <About toggleViews={toggleViews} altSkills={altSkills}/>
      {/* <Projects/> */}
      <Projects projects={projectsArr.length < 0 ? projectsArr : defaultProjects} />
      <Contact />
      <Footer/>
    </Router>
  );
}

export default App;