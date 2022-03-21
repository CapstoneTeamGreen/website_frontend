import React from 'react'
import './About.css'
import Technologies from './Technologies'
import Certifications from './Certifications'
import cube from "../../../src/images/cube.png"
import arrows from "../../../src/images/arrows.png"

import {
  AboutBlurb,
  AboutContainer,
  AboutGrid,
  AboutHeader,
  AboutImage,
  AboutImageLocation,
  AboutToggleText,
  CertificationsGrid,
  SkillsSection,
  TechnologiesGrid,
  AboutImg
} from './AboutElements'

const About = ({ toggleViews, altSkills, title, blurb }) => {

  return (
    <AboutContainer id="about">

      <AboutGrid>
        <AboutHeader><h2>{title}</h2></AboutHeader>

        <AboutBlurb>{blurb}</AboutBlurb>

        <AboutImageLocation>
          <AboutImage>
            {/* <img src={ altSkills ? arrows : cube } alt="grid image"/> */}

            <AboutImg src={ altSkills ? arrows : cube } alt="grid image" />

            </AboutImage>
        </AboutImageLocation>

        <AboutToggleText>
          <button className="btn-toggle" id="toggleBtn" onClick={toggleViews}>
            {altSkills ? 'view technologies' : 'view certifications'}
          </button>
        </AboutToggleText>

        <SkillsSection>

          {altSkills ? <CertificationsGrid><Certifications/></CertificationsGrid> : 
          <TechnologiesGrid><Technologies/></TechnologiesGrid>}

        </SkillsSection>

    </AboutGrid>
  </AboutContainer>
  )
}

About.defaultProps = {
  title: "Who Am I",
  blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac felis donec et odio pellentesque diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.",
}

export default About