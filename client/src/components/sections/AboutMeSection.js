import React from 'react'
import { Link } from 'react-router-dom'
import AboutMeDrawing from '../../assets/about-me-drawing.svg'

const AboutMeSection = () => {
  return (
    <article id='about' className='homepage-section'>
      <h2>About Me</h2>
      <section>
        <p className='body-1'>I’m a driven software developer looking for new opportunites to continue to grow in my career.</p>
        <p className='body-1'>If you're interested in reading about who I am and how I got where I am, check out my About Me page.</p>
        <Link to='/about'>
          <button className='btn-green'>learn more?</button>
        </Link>
      </section>
      <img className='home-background' src={AboutMeDrawing} alt='' />
    </article>
  )
}

export default AboutMeSection
