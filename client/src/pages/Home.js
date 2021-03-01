import React, { useRef } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useSwipe } from '../hooks/useSwipe'
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
  const [handleTouchStart, handleTouchMove, handleTouchEnd] = useSwipe() 

  function navigate(location, ref){
    history.push(location)
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
  }

  function scrollNavigation(e){
    if (e.deltaY < 0){
      // If scrolled up
      switch(location.hash){
        case '#about':
          navigate('/#hero', homeRef)
          break;
        case '#projects':
          navigate('/#about', aboutRef)
          break;
        case '#contact':
          navigate('/#projects', projectsRef)
          break;
        default:
          break;
      }
    } else if (e.deltaY > 0){
      // if scrolled down
      switch(location.hash){
        case '':
          navigate('/#about', aboutRef)
          break;
        case '#hero':
          navigate('/#about', aboutRef)
          break;
        case '#about':
          navigate('/#projects', projectsRef)
          break;
        case '#projects':
          navigate('/#contact', contactRef)
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

      <div 
        ref={aboutRef} 
        onTouchStart={(e) => handleTouchStart(e)} 
        onTouchMove={(e) => handleTouchMove(e)} 
        onTouchEnd={() => handleTouchEnd(navigate('/#hero', homeRef), navigate('/#projects', projectsRef))}
      >
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
