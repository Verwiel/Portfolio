import React from 'react'
import { projectData } from '../data/projects'
import Project from './Project'

const ProjectList = () => {
  const projectMap = projectData.map((project, i) => (
    <Project key={i} 
      name={project.name} 
      description={project.description} 
      languages={project.languages} 
      images={project.images}
      thumbnail={project.thumbnail}
    />
  ))

  return (
    <main className='projects'>
      <h2>Projects</h2>
      <ul>
        {projectMap}
      </ul>
    </main>
  )
}

export default ProjectList