import styled from "styled-components";

export const ContactContainer = styled.div`
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

export const ContactContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactHeader = styled.header`
    font-size: calc(24px + 2vmin);
    font-weight: bold;
    color: #CCD6F6;

`

export const ContactP = styled.p`
    font-size: calc(10px + 1vmin);
    color: #8892B0;
    text-align: center;
    margin: 2rem;
    padding: 0px 70px 0px 70px;

`

export const ButtonWrapper = styled.nav`
    display: flex;
    align-items: center;
`

export const ContactButton = styled.button`
    border-radius: 5px;
    background: #0A192F;
    white-space: nowrap;
    padding: 16px 30px;
    color: #64FFDA;

    font-family: 'Outfit';
    font-size: 18px;
    font-weight: 300;

    outline: 2px solid #64FFDA;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #CCD6F6;
        color: #0A192F;
        outline: 2px solid #CCD6F6;
    }
`