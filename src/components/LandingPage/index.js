import React from 'react'
import Particles from 'react-tsparticles'
import ParticleConfig from './ParticleConfig'
import {
    LandingContainer,
    LandingContent,
    LandingP,
    LandingSpan    
} from './LandingElements'

const LandingPage = () => {
    return (
        <LandingContainer>
           
            {/* <Particles container={LandingContainer} params={ParticleConfig} /> */}
            
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
