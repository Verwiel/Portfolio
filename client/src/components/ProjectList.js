import React, { useState } from 'react'
import { projectData } from '../data/projects'
import Project from './Project'
import ProjectDetails from './ProjectDetails'

const ProjectList = () => {
  const [projectOpen, setProjectOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState({})

  const projectMap = projectData.map(project => {
    const openProject = () => {
      setCurrentProject(project)
      setProjectOpen(true)
    }

    return (
        <Project key={project.id} 
          name={project.name} 
          thumbnail={project.thumbnail}
          openProject={openProject}
          className={project.id !== currentProject.id ? 'card' : 'card viewing-card'}
        />
    )
  })

  return (
    <main className='projects'>
      <h2>Projects</h2>
      <ul>
        {projectMap}
      </ul>
      {projectOpen &&
        <ProjectDetails
          name={currentProject.name}
          description={currentProject.description}
          languages={currentProject.languages}
          images={currentProject.images}
        />
      }
    </main>
  )
}

export default ProjectList