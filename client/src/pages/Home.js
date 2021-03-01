import React, { useRef } from 'react'
import useLockBodyScroll from '../hooks/useLockBodyScroll'
import { useLocation, useHistory } from 'react-router-dom'
import SideNav from '../components/SideNav'
import AboutMeSection from '../components/AboutMeSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

const Home = () => { 
  const location = useLocation()
  const history = useHistory()
  const homeRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()
  useLockBodyScroll()

  function scrollNavigation(e){
    if (e.deltaY < 0){
      // If scrolled up
      switch(location.hash){
        case '#about':
          history.push('/#hero')
          window.scrollTo({ behavior: 'smooth', top: homeRef.current.offsetTop })
          break;
        case '#projects':
          history.push('/#about')
          window.scrollTo({ behavior: 'smooth', top: aboutRef.current.offsetTop })
          break;
        case '#contact':
          history.push('/#projects')
          window.scrollTo({ behavior: 'smooth', top: projectsRef.current.offsetTop })
          break;
        default:
          break;
      }
    } else if (e.deltaY > 0){
      // if scrolled down
      switch(location.hash){
        case '':
          history.push('/#about')
          window.scrollTo({ behavior: 'smooth', top: aboutRef.current.offsetTop })
          break;
        case '#hero':
          history.push('/#about')
          window.scrollTo({ behavior: 'smooth', top: aboutRef.current.offsetTop })
          break;
        case '#about':
          history.push('/#projects')
          window.scrollTo({ behavior: 'smooth', top: projectsRef.current.offsetTop })
          break;
        case '#projects':
          history.push('/#contact')
          window.scrollTo({ behavior: 'smooth', top: contactRef.current.offsetTop })
          break;
        default:
          break;
      }
    }
  }


  return (
    <main className='home' onWheel={(e) => scrollNavigation(e)}>
      <SideNav />
      <header id='hero' className='home-hero full-page' ref={homeRef}>
        <div className='home-hero-content'>
          <p>Hey, my name is</p>
          <h1>D<span>rew </span>V<span>erwiel</span></h1>
          <h3>I'm a Full Stack Developer based out of Salt Lake City, Utah</h3>
        </div>
      </header>

      <div ref={aboutRef}>
        <AboutMeSection  />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection  />
      </div>
      <div ref={contactRef}>
        <ContactSection  />
      </div>
    </main>
  )
}

export default Home
