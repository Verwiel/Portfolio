import React from 'react'
import SideBack from '../components/SideBack'
import ProjectList from '../components/ProjectsList'
import Technologies from '../components/Technologies'
import ProjectsDrawing from '../assets/projects-drawing.svg'

const Portfolio = () => {
  return (
    <main className='portfolio'>
      <SideBack route='/#projects' />
      <header className='portfolio-header'>
        <article>
          <h1>Portfolio</h1>
        </article>
        <img src={ProjectsDrawing} alt='Portfolio' />
      </header>

      <article className='portfolio-content'>
        <section>
          <ProjectList />
        </section>
        <section>
          <Technologies /> 
        </section>
      </article>
    </main>
  )
}

export default Portfolio
