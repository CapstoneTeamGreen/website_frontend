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
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: calc(10px + 1vmin);
`

export const AboutImageLocation = styled.div`
    grid-area: grid-image;
`

export const AboutImage = styled.div`
    width: 250px;
    height: auto;
    display: block;
    margin: 50px auto 0px auto;
`

export const AboutImg = styled.img`
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

export const ButtonToggle = styled.button`
    color:#64FFDA;
    border: 0px;
    font-size: 18px;
    min-width: 100px;
    min-height: 25px;
    text-decoration: underline;
    letter-spacing: .3mm;
    background-color: transparent;
    font-family: 'Outfit';
`

export const TechnologiesGridLayout = styled.div`
    display: grid;
    margin-left: 10px;
    gap: 7px;
    grid-auto-flow: column;
    grid-template-areas:
    "tech-0 tech-1 tech-2"
    "tech-3 tech-4 tech-5"
    "tech-6 tech-7 tech-8";
`

export const TechnologiesGrid = styled.div`
    margin: 10px;
    padding: 5px;
    font-size: 28px;
    height: 40px;
    width: 120px;
    justify-content: center;
    transition: all 120ms cubic-bezier(.17, .67, .8, .45);
`

export const CertificationsGridLayout = styled.div`
    font-size: 23px;
    text-align: left;
    margin: 2px;
`

export const CertificationsGridUL = styled.ul`
    margin: 0px;
    padding: 2px;
`

export const CertificationsGridLI = styled.li`
    padding: 8px;
    margin: 1px;
    padding-left: 15px;
    margin-right: 15px;
    display: grid;
    list-style-type: none;
    transition: all 1200ms cubic-bezier(0.77, 1, 0.175, 1);
    border-left: 5px solid #0A192F;
`