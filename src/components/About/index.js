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
  CertificationsGridLayout,
  SkillsSection,
  TechnologiesGridLayout,
  AboutImg,
  ButtonToggle
} from './AboutElements'

const About = ({ toggleViews, altSkills, title, blurb }) => {

  return (
    <AboutContainer id="about">

      <AboutGrid>
        <AboutHeader><h2>{title}</h2></AboutHeader>

        <AboutBlurb>{blurb}</AboutBlurb>

        <AboutImageLocation>
          <AboutImage>
            <AboutImg src={ altSkills ? arrows : cube } alt="grid image" />
          </AboutImage>
        </AboutImageLocation>

        <AboutToggleText>
          <ButtonToggle onClick={toggleViews}>
            {altSkills ? 'view technologies' : 'view certifications'}
          </ButtonToggle>
        </AboutToggleText>

        <SkillsSection>

          {altSkills ? 
          <CertificationsGridLayout><Certifications/></CertificationsGridLayout> : 
          <TechnologiesGridLayout><Technologies/></TechnologiesGridLayout>}

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