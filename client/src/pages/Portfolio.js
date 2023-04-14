import React from 'react'
import SideBack from '../components/navigation/SideBack'
import ProjectsList from '../components/projects/ProjectsList'
import Technologies from '../components/projects/Technologies'
import ProjectsDrawing from '../assets/projects-drawing.svg'

const Portfolio = () => {
  return (
    <main className='portfolio'>
      <SideBack route='/#projects' />
      <header className='portfolio-header'>
        <article>
          <h1>Projects</h1>
        </article>
        <img src={ProjectsDrawing} alt='' />
      </header>

      <article className='portfolio-content'>
        <section>
          <h2 className='h3'>Professional</h2>
          <ProjectsList isPersonal={false} />
          <h2 className='h3'>Personal</h2>
          <ProjectsList isPersonal={true} />

          {/* <h2>Projects list coming soon!</h2>
          <p>Until then you can check out my projects at <a href='https://github.com/Verwiel' className='hyper-link'>Github</a> or visit my current employers website: <a href='https://insideoutdev.com/' className='hyper-link'>InsideOut Development</a> </p> */}
        </section>
        <section>
          <h3>Languages & tech I use</h3>
          <Technologies languages={["React", "Typescript", "Node", "Express", "MySQL", "Sass", "Python", "Flask", "GraphQL", "Apollo", "Prisma", "MongoDB", "HTML 5", "Javascript", "CSS 3"]} /> 
        </section>
      </article>
    </main>
  )
}

export default Portfolio
