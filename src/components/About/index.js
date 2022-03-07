import React from 'react'
import './About.css'
import Skills from './Skills'
import cube from "../../../src/images/cube.png"
import arrows from "../../../src/images/arrows.png"

const About = ({ title, blurb, image }) => {
    let showAltView = true;

  const toggleSection = (e) => {
    e.preventDefault();
    showAltView = !showAltView;
    const btn = document.getElementById("toggleBtn");
    const image = document.getElementById("grid-image");
    if (btn.innerText === "view certifications"){
      btn.innerText = "view technologies";
      image.setAttribute('src', arrows);
    }
    else {
      btn.innerText = "view certifications";
      image.setAttribute('src', cube);
    }
  }

  return (
    <div className="container">
      <div className="grid">
        <div className="grid-header"><h2>{title}</h2></div>
        <div className="grid-blurb">{blurb}</div>
        <div className="grid-image">
          <img id="grid-image" src={image} alt="grid image "/>
        </div>
        <div className="grid-view-toggle">
          <button className="btn-toggle" id="toggleBtn" onClick={toggleSection}>
            {showAltView ? 'view certifications' : 'view technologies'}
          </button>
      </div>
      <div className="grid-skills">
        <Skills showAltView = {showAltView} />
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
