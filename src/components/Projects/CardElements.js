import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction:column;

    width: 450px;
    height: 450px;

    background: #233554;
    color: #64FFDA;
    border-radius: 10px;

    margin-left:10px;
    margin-right:10px;
    margin-bottom: 30px;

    text-align: center;

    box-shadow: 15px 15px 2px 1px #8892B0;
    transition: all 500ms cubic-bezier(0.0, 0.0, 0.58, 1.0);

    &:hover {
        transition: all 300ms cubic-bezier(0.0, 0.0, 0.58, 1.0);
        box-shadow: 15px 15px 2px 1px #64FFDA;
    }
`

export const RepoIcon = styled.p`
    font-size: 30px;
    color: #8892B0;
 
`

export const CardTitle = styled.h1`
    font-size: 32px;
    color: #CCD6F6;
    padding-left: 10px;
    padding-right: 10px;

`

export const CardDescription = styled.p`
    font-size: 22px;
    color: #8892B0;
    padding-left: 10px;
    padding-right: 10px;
  
`

export const CardLink = styled.h2`
    font-size: 26px;
    color: #8892B0;
    text-decoration: none;
    margin-top: auto;

`