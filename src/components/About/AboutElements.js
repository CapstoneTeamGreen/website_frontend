import styled from 'styled-components';

export const AboutContainer = styled.div`
    text-align: center;
    background-color: #0A192F;
    color: #CCD6F6;
    padding: 8px 24px;
    height: 80vh;
`

export const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: 1.4fr 0.6fr 0.7fr 0.9fr 1.3fr 1fr 1fr;
    gap: 10px 5px;
    grid-auto-flow: column;
    grid-template-areas:
    ". . grid-header . ."
    ". grid-blurb grid-blurb grid-blurb ."
    ". grid-blurb grid-blurb grid-blurb ."
    ". grid-image grid-view-toggle grid-view-toggle ."
    ". grid-image grid-skills grid-skills ."
    ". grid-image grid-skills grid-skills ."
    ". grid-image grid-skills grid-skills .";
`

export const AboutHeader = styled.div`
    max-height: 100px;
    grid-area: grid-header;
    font-size: calc(10px + 2vmin);
`

export const AboutBlurb = styled.div`
    grid-area: grid-blurb;
    margin: 10px 10px 10px 10px;
    font-size: calc(10px + 1vmin);
`

export const AboutImageLocation = styled.div`
    grid-area: grid-image;
`

export const AboutImage = styled.div`
    width: 250px;
    height: auto;
    display: block;
    margin: 40px auto 0px auto;
`

export const AboutToggleText = styled.div`
    grid-area: grid-view-toggle; 
    color: #64FFDA;
    text-decoration: underline;
    display: flex;
    margin-left: 15px;
    vertical-align: bottom;
`

export const SkillsSection = styled.div`
    grid-area: grid-skills;
`

export const TechnologiesGrid = styled.div`
    display: grid;
    margin-left: 10px;
    gap: 7px;
    grid-auto-flow: column;
    grid-template-areas:
    "tech-0 tech-1 tech-2"
    "tech-3 tech-4 tech-5"
    "tech-6 tech-7 tech-8";
`