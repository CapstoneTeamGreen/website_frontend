import React from 'react'
// import ParticleBackground from './ParticleBackground'
import Particles from 'react-tsparticles'
import ParticleConfig from './config/ParticleConfig'
import {
    LandingContainer,
    LandingBg,
    LandingContent,
    LandingP,
    LandingSpan    
} from './LandingElements'

const LandingPage = () => {
  return (
      <LandingContainer>
           
        <LandingBg>
            <Particles params={ParticleConfig} />
        </LandingBg>

        <LandingContent>
            <LandingP>Hello, my name is
            <LandingSpan> Lorem</LandingSpan><br></br>
            I'm a 
            <LandingSpan> back-end </LandingSpan>
            developer
            </LandingP>
        </LandingContent>

      </LandingContainer>
    )
}

export default LandingPage
