import React from 'react'
import './LandingPage.css'
import ParticleBackground from './ParticleBackground'

const LandingPage = () => {
  return (
    <div className='container'>
      <ParticleBackground />
      <header className='container-header'>
        <p className='hello-message'>
            Hello, my name is <span className='keyword'>Lorem</span><br></br>
            I'm a <span className='keyword'>back-end</span> developer
        </p>
      </header>
    </div>
  )
}

export default LandingPage
