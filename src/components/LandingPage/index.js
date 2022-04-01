import React from 'react'
import Particles from 'react-tsparticles'
import ParticleConfig from './ParticleConfig'
import {
    LandingContainer,
    LandingContent,
    LandingP,
    LandingSpan    
} from './LandingElements'


class LandingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: null
        }
    }

    componentDidMount() {
        // fetch('http://localhost:8079/projects/')
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response);
        //         this.setState({ projects: response });
        //     });

        
    }

    render() {

        return (

            <LandingContainer>

                {/* <Particles container={LandingContainer} params={ParticleConfig} /> */}

                <LandingContent>
                    <LandingP>Hello, my name is
                        <LandingSpan> Lorem</LandingSpan><br/>
                        I'm a
                        <LandingSpan> back-end </LandingSpan>
                        developer
                    </LandingP>
                </LandingContent>

            </LandingContainer>
        );
    }
}

export default LandingPage;
