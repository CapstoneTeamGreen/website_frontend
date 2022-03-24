import React from 'react'
import {
    CardContainer,
    RepoIcon,
    CardTitle,
    CardDescription,
    CardLanguage,
} from './CardElements'

const Card = () => {
  return (
    
    <CardContainer>
      
      <RepoIcon>icon</RepoIcon>
      <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
      <CardDescription>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</CardDescription>
      <CardLanguage>language</CardLanguage>

    </CardContainer>
    
  )
}

export default Card
