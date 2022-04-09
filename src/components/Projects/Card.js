import React from 'react'
import {
    CardContainer,
    RepoIcon,
    CardTitle,
    CardDescription,
    CardLink,
} from './CardElements'
import { FaCode } from 'react-icons/fa';

const Card = (project) => {
  return (
    
    <CardContainer>
      
      <RepoIcon><FaCode/></RepoIcon>
      <CardTitle>{project.children[0].projectName}</CardTitle>
      <CardDescription>{project.children[0].description}</CardDescription>
      <CardLink>{project.children[0].projectLink}</CardLink>

    </CardContainer>
    
  )
}

export default Card
