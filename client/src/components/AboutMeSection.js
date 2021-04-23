import React from 'react'
import { Link } from 'react-router-dom'
import AboutMeDrawing from '../assets/about-me-drawing.svg'

const AboutMeSection = () => {
  return (
    <article id='about' className='homepage-section'>
      <h2>About Me</h2>
      <section>
        <p className='body-1'>I'm a Wisconsin born, Utah based Developer.</p>
        <p className='body-1'>I am currently working for InsideOut Development as a Application Developer. My days consist mostly of building and helping design our main website and communities</p>
        <Link to='/about'>
          <button className='btn-green'>Want to learn more?</button>
        </Link>
      </section>
      <img className='home-background' src={AboutMeDrawing} />
    </article>
  )
}

export default AboutMeSection