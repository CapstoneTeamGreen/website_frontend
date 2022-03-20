import React from 'react'
import {
    CardContainer
} from './CardElements'

const Card = ({ number }) => {
  return (
    <CardContainer>
      { number }
    </CardContainer>
  )
}

export default Card
