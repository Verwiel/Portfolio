import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectData } from '../data/projects'
import Project from './Project'
import test from '../assets/Projects/test.jpg'

const ProjectsV2 = () => {
  // const [projectOpen, setProjectOpen] = useState(false)
  // const [currentProject, setCurrentProject] = useState({})

  const projectMap = projectData.map((project, i) => {
    // const openProject = () => {
    //   setCurrentProject(project)
    //   setProjectOpen(true)
    // }

    return (
      <Link to='#' 
        key={project.id} 
        className={i === 0 ? 'projects-card-featured' : 'projects-card-item'}
      >
        <Project 
          name={project.name} 
          thumbnail={project.thumbnail}
        />
      </Link>
    )
  })

  return (
    <ul className='projects-wrap'>
      {projectMap}
    </ul>
  )
}

export default ProjectsV2
