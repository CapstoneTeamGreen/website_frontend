import React from 'react'
import Carousel from 'react-elastic-carousel'
import { ProjectContainer } from './ProjectElements'
import Card from './Card'

const Projects = () => {

  const breakPoints = [
    { width: 500, itemsToShow: 1},
    { width: 768, itemsToShow: 2},
    { width: 1200, itemsToShow: 3}
  ];

  return (
    <ProjectContainer id="projects">
      <Carousel breakPoints={breakPoints}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </ProjectContainer>
  )
}

export default Projects
