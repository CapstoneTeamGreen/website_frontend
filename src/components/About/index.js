import React from 'react'
import './About.css'
import Skills from './Skills'
import cube from "../../../src/images/cube.png"

const About = ({ title, blurb, image }) => {
    let skillsSelected = true;

  const sectionToggled = () => {
    skillsSelected = !skillsSelected;
  }

  return (
    <div className="container">
      <div className="grid">
        <div className="grid-header"><h2>{title}</h2></div>
        <div className="grid-blurb">{blurb}</div>
        <div className="grid-image">
          <img src={image} alt="grid image"/>
        </div>
        <div className="grid-view-toggle">
          <button className="btn-toggle" onClick={sectionToggled}>
          {skillsSelected ? 'view certifications' : 'view technologies'}</button>
      </div>
      <div className="grid-skills">
        <Skills sectionToggled />
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
