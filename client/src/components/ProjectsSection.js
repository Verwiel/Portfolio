import React from 'react'
import { Link } from 'react-router-dom'
import ProjectsDrawing from '../assets/projects-drawing.svg'

const ProjectsSection = () => {
  return (
    <article id='projects' className='homepage-section'>
      <h2>Projects</h2>
      <section>
        <p>My <strong>professional experience</strong> consists mainly of writing in React, Node, MySQL, and Sass. My portfolio page contains work I’ve done for <a href='https://www.insideoutdev.com/' className='hyper-link'>InsideOut Development</a> and some of my side projects.</p>
      </section>
      <Link to='/portfolio'>
        <button className='btn-green'>check out my projects</button>
      </Link>
      <img className='home-background' src={ProjectsDrawing} />
    </article>
  )
}

export default ProjectsSection
