import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsSection = () => {
  return (
    <article id='projects' className='homepage-section'>
      <h2>Projects</h2>
      <section>
        <p>
          My <strong>professional experience</strong> includes working on the main website as well as various gated 'communities' for <a href='#' className='hyper-link'>InsideOut Development</a> as an <strong>Application Developer.</strong> 
        </p>
        <p>The technologies used are <strong>React, Sass, Node (Express), and MySQL</strong></p>
        <p>For more details and to check out my side projects click the link below!</p>
      </section>
      <Link to='/portfolio'>
        <button className='btn-green'>See more projects</button>
      </Link>
      {/* Image of */}
      {/* <img className='home-background' src={HeadshotDrawing} /> */}
    </article>
  )
}

export default ProjectsSection