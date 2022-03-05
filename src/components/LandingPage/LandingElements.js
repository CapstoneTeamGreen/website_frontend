import styled from 'styled-components'

export const LandingContainer = styled.div`
    background: #0A192F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const LandingContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: calc(15px + 2vmin);
    font-weight: normal;
`

export const LandingP = styled.p`
    color: #CCD6F6;
`

export const LandingSpan = styled.span`
    color: #64FFDA;
`