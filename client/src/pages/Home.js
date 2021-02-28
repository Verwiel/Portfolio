import React from 'react'
import AboutMeSection from '../components/AboutMeSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <main className='home'>
      <header className='home-hero'>
        <div className='home-hero-content'>
          <h1>Drew Verwiel</h1>
          <p>Full Stack Developer</p>
        </div>
      </header>

      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default Home