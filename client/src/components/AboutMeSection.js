import React from 'react'
import { Link } from 'react-router-dom'

const AboutMeSection = () => {
  return (
    <article id='about' className='home-about'>
      <div className='text-column'>
        <h2>About Me</h2>
        <section>
          <p className='body-1'>Hey, my name is Drew Verwiel and I'm a fullstack Developer based out of Salt Lake City, Utah.</p>
          <p className='body-1'>I am currently working for InsideOut Development as a Application Developer. My days consist mostly of building and helping our main website and communities in MySQL, Express, React, and Node.</p>
          <p className='body-1'>I'm originally from Oshkosh, Wisconsin. Some of my hobbies include: Snowboarding/Skateboarding, Camping, Hiking, and Brewing.</p>
          <Link to='/about'>
            <button className='btn-green'>Want to learn more?</button>
          </Link>
        </section>
      </div>
      <img src='' alt='placeholder' />
    </article>
  )
}

export default AboutMeSection