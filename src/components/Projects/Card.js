import React from 'react'
import {
    CardContainer,
    CardGrid,
    RepoIcon,
    CardTitle,
    CardDescription,
    CardLanguage
} from './CardElements'

const Card = () => {
  return (
    <CardContainer>
      <CardGrid>
        
        <RepoIcon />
        <CardTitle />
        <CardDescription />
        <CardLanguage />

      </CardGrid>
    </CardContainer>
  )
}

export default Card
