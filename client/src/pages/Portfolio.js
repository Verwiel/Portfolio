import React from 'react'
import SideBack from '../components/SideBack'
// import ProjectList from '../components/ProjectsList'
import Technologies from '../components/Technologies'
import ProjectsDrawing from '../assets/projects-drawing.svg'

const Portfolio = () => {
  return (
    <main className='portfolio'>
      <SideBack route='/#projects' />
      <header className='portfolio-header'>
        <article>
          <h1>Projects</h1>
        </article>
        <img src={ProjectsDrawing} alt='Portfolio' />
      </header>

      <article className='portfolio-content'>
        <section>
          {/* <ProjectList /> */}
          <h2>Projects list coming soon!</h2>
          <p>Until then you can check out my projects at <a href='https://github.com/Verwiel' className='hyper-link'>Github</a> or visit my current employers website: <a href='https://insideoutdev.com/' className='hyper-link'>InsideOut Development</a> </p>
        </section>
        <section>
          <Technologies /> 
        </section>
      </article>
    </main>
  )
}

export default Portfolio
