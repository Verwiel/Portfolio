import React from 'react'
import { Link } from 'react-router-dom'
import { projectData } from '../data/projects'
import Project from './Project'

const ProjectsList = () => {

  const projectMap = projectData.map((project, i) => (
    <Link to='#' 
      key={project.id} 
      className={i === 0 ? 'projects-card-featured' : 'projects-card-item'}
    >
      <Project 
        name={project.name} 
        thumbnail={project.thumbnail}
      />
    </Link>
  ))

  return (
    <ul className='projects-wrap'>
      {projectMap}
    </ul>
  )
}

export default ProjectsList
