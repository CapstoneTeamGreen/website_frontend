import React from 'react'
import {
    CardContainer,
    RepoIcon,
    CardTitle,
    CardDescription,
    CardLanguage,
} from './CardElements'

const Card = (project) => {
  return (
    
    <CardContainer>
      
      <RepoIcon>icon</RepoIcon>
      <CardTitle>{project.children[0].projectName}</CardTitle>
      <CardDescription>{project.children[0].description}</CardDescription>
      <CardLanguage>{project.children[0].projectLink}</CardLanguage>

    </CardContainer>
    
  )
}

export default Card
