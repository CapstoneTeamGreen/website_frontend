import React from 'react'
import './LandingPage.css'
import ParticleBackground from './ParticleBackground'

const LandingPage = () => {
  return (
    <div className='container'>
      <ParticleBackground />
      <header className='container-header'>
        <p className='hello-message'>
            &#123; Hello, my name is Lorem.<br></br>
            I'm a back-end developer &#125;
        </p>
      </header>
    </div>
  )
}

export default LandingPage
