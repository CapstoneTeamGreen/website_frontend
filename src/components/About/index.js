import React from 'react'
import reactDom from 'react-dom'
import './About.css'
import Skills from './Skills'
import Certifications from './Certifications'
import cube from "../../../src/images/cube.png"
import arrows from "../../../src/images/arrows.png"

const About = ({ id, title, blurb, image }) => {
    let showCertView = false;

  const toggleSection = (e) => {
    e.preventDefault();
    showCertView = !showCertView;
    const btn = document.getElementById("toggleBtn");
    const image = document.getElementById("grid-image");

    if (showCertView){
      btn.innerText = "view technologies";
      image.setAttribute('src', arrows);

    } else {
      btn.innerText = "view certifications";
      image.setAttribute('src', cube);
    }
  }

  return (
    <div className="container" id={id}>
      <div className="grid">
        <div className="grid-header"><h2>{title}</h2></div>
        <div className="grid-blurb">{blurb}</div>
        <div className="grid-image">
          <img id="grid-image" src={image} alt="grid image "/>
        </div>
        <div className="grid-view-toggle">
          <button className="btn-toggle" id="toggleBtn" onClick={toggleSection}>
            {showCertView ? 'view technologies' : 'view certifications'}
          </button>
      </div>
      <div className="grid-skills" id="grid-skills">
        <Skills />
        <Certifications />
      </div>
    </div>
  </div>
  )
}

About.defaultProps = {
  id: "about",
  title: "Who Am I",
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
  image: cube
}

export default About