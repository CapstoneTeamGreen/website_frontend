import React from 'react'
import reactDom from 'react-dom'
import './About.css'
import Skills from './Skills'
import Certifications from './Certifications'
import cube from "../../../src/images/cube.png"
import arrows from "../../../src/images/arrows.png"

import ReactDOMServer from 'react-dom/server';

const About = ({ id, title, blurb, image }) => {
    let showCertView = false;

    const certsEl = {Certifications};
    const techEl = {Skills};

  const toggleSection = (e) => {
    e.preventDefault();
    showCertView = !showCertView;
    const btn = document.getElementById("toggleBtn");
    const image = document.getElementById("grid-image");
    const showcase = document.getElementById("grid-skills");

    if (showcase.hasChildNodes()){
      showcase.removeChild(showcase.children[0]);
    }
    // showcase.removeChild(showcase.firstElementChild);

    if (showCertView){
      btn.innerText = "view technologies";
      image.setAttribute('src', arrows);
      // showcase.innerHTML[0].children[0] = <Certifications />;
      // show certifications jsx
      // showcase.innerText = "Certifications here";
      // showcase.ATTRIBUTE_NODE = <Certifications/>
      // showcase.innerHTML = {Certifications};
      // reactDom.render(certsEl, showcase); 
      // reactDom.render(Certifications, showcase);
      // const element = <Certifications />;
      // ReactDOMServer.renderToStaticMarkup(element);

      showcase.innerHTML(ReactDOMServer.renderToStaticMarkup(element))

    } else {
      btn.innerText = "view certifications";
      image.setAttribute('src', cube);
      // showcase.innerHTML[0].children[0] = <Skills />;
      // show skills jsx
      // showcase.innerText = "Technologies here";
      // showcase.ATTRIBUTE_NODE = {Skills};
      // showcase.innerHTML = "<div>{Skills}</div>";
      // showcase.appendChild(ReactDOM.render(Skills));
      // reactDom.render(techEl, ".grid-skills");
      // showcase.setAttribute();
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


// implement div switching
// add ID for navbar