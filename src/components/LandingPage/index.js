import React from 'react'
import Particles from 'react-tsparticles'
import ParticleConfig from './ParticleConfig'
import {
    LandingContainer,
    LandingContent,
    LandingP,
    LandingSpan    
} from './LandingElements'

const LandingPage = ({ profile }) => {

  return (
    
      <LandingContainer>
          <Particles container={LandingContainer} params={ParticleConfig} />

          <LandingContent>
                <LandingP>Hello, my name is
                  <LandingSpan> {profile.authorName}</LandingSpan><br/>
                  I'm a
                  <LandingSpan> {profile.developerType} </LandingSpan>
                  developer
              </LandingP>
          </LandingContent>

      </LandingContainer>
      );
    
}

export default LandingPage;
