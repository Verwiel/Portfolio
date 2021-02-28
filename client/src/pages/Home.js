import React from 'react'
import SideNav from '../components/SideNav'
import AboutMeSection from '../components/AboutMeSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <main className='home'>
      <SideNav />
      <header className='home-hero full-page'>
        <div className='home-hero-content'>
          <p>Hey, my name is</p>
          <h1>D<span>rew </span>V<span>erwiel</span></h1>
          <h3>I'm a Full Stack Developer based out of Salt Lake City, Utah</h3>
        </div>
      </header>

      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default Home