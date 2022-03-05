import React from 'react'
import './About.css'
import cube from "../../../src/images/cube.png"

const About = ({ title, blurb, image }) => {
  const technologies = ["C++", "mySQL", "Laravel", "Java", "HTML", "JavaScript", "ReactJS", "C#", "PHP"];
  const certifications = ["Microsoft Certified Solutions Developer", "CompTIA Security+", "Google Certified Professional Cloud Architect"];
  let skillsSelected = true;

  const toggled = () => {
    skillsSelected = !skillsSelected;
    console.log("check!");
  }

  return (
    <div className="container">
      <div className="grid">
        <div className="grid-header">{title}</div>
        <div className="grid-blurb">{blurb}</div>
        <div className="grid-image">
          <img src={image} alt="grid image"/>
        </div>
        <div className="grid-view-toggle">
          <button className="btn-toggle" onClick={toggled}>
          {skillsSelected ? 'show certifications' : 'show technologies'}</button>
      </div>
    </div>
  </div>
  )
}

About.defaultProps = {
  title: "Who Am I",
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
  image: cube
}

export default About
