import React from 'react'
import { Link } from 'react-router-dom'
import AboutMeDrawing from '../assets/about-me-drawing.svg'

const AboutMeSection = () => {
  return (
    <article id='about' className='homepage-section'>
      <h2>About Me</h2>
      <section>
        <p className='body-1'>I’m a Wisconsin born, Utah based developer currently working at InsideOut Development LLC.</p>
        <p className='body-1'>If you're interested in reading about who I am and how I got where I am, check out my About Me page.</p>
        <Link to='/about'>
          <button className='btn-green'>learn more?</button>
        </Link>
      </section>
      <img className='home-background' src={AboutMeDrawing} />
    </article>
  )
}

export default AboutMeSection
