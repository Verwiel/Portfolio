import React from 'react'
import { Link } from 'react-router-dom'
import { projectData } from '../../data/projects'
import Project from './Project'

const ProjectsList = ({ isPersonal }) => {

  const projectMap = projectData.filter(project => project.isPersonal === isPersonal).map(project => (
    <Link to={`/portfolio/${project.link}`}
      key={project.id} 
      className='projects-card-item'
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
