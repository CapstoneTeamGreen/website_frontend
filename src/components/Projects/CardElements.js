import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 350px;
    height: 350px;

    background: #233554;
    color: #64FFDA;

    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardGrid = styled.div`
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 10% 20% 60% 10%; 
    gap: 0px 0px; 
    grid-template-areas: 
        "link-icon run-icon"
        "title"
        "description"
        "language"; 
`

export const RepoIcon = styled.p`
    font-size: 10;
    color: #8892B0;
    grid-area: link-icon;
`

export const CardTitle = styled.h1`
    font-size: 22;
    color: #64FFDA;
    grid-area: title;
`

export const CardDescription = styled.p`
    font-size: 18;
    color: #8892B0;
    grid-area: description;
`

export const CardLanguage = styled.h2`
    font-size: 20;
    color: #64FFDA;
    grid-area: language;
`