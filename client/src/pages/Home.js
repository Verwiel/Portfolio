import React, { useRef, useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useSwipe } from '../hooks/useSwipe'
import SideNav from '../components/navigation/SideNav'
import AboutMeSection from '../components/sections/AboutMeSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ContactSection from '../components/sections/ContactSection'
import HeadshotDrawing from '../assets/headshot-drawing.svg'

const Home = () => { 
  const [wheelEnabled, setWheelEnabled] = useState(true)
  const location = useLocation()
  const history = useHistory()
  const homeRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()
  useLockBodyScroll()
  const [handleTouchStart, handleTouchMove, handleTouchEnd] = useSwipe() 
  let timer = 1000

  function navigate(destination, ref){
    history.push(destination)
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
    // Set time out to avoid scrolling all the way to the bottom onWheel,
    // timer check is to avoid memory leaks
    if(timer > 0){
      setWheelEnabled(false)
      setTimeout(function() {
        setWheelEnabled(true)
      }, timer)
    }
  }

  function heroNavigate(){
    navigate('/#hero', homeRef)
  }
  function aboutNavigate(){
    navigate('/#about', aboutRef)
  }
  function projectsNavigate(){
    navigate('/#projects', projectsRef)
  }
  function contactNavigate(){
    navigate('/#contact', contactRef)
  }

  function scrollNavigation(e){
    if ((e.deltaY < 0 && wheelEnabled)){
      // If scrolled up
      switch(location.hash){
        case '#about':
          heroNavigate()
          break;
        case '#projects':
          aboutNavigate()
          break;
        case '#contact':
          projectsNavigate()
          break;
        default:
          break;
      }
    } else if ((e.deltaY > 0 && wheelEnabled)){
      // if scrolled down
      switch(location.hash){
        case '':
          aboutNavigate()
          break;
        case '#hero':
          aboutNavigate()
          break;
        case '#about':
          projectsNavigate()
          break;
        case '#projects':
          contactNavigate()
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    switch(location.hash){
      case '':
        heroNavigate()
        break;
      case '#hero':
        heroNavigate()
        break;
      case '#about':
        aboutNavigate()
        break;
      case '#projects':
        projectsNavigate()
        break;
      case '#contact':
        contactNavigate()
        break;
      default:
        break;
    }
    return () => {
      timer = 0
    } 
  }, [])

  return (
    <main className='home' onWheel={(e) => scrollNavigation(e)} >
      <SideNav location={location} />
      <header 
        id='hero' 
        className='home-hero' 
        ref={homeRef}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)} 
        onTouchEnd={() => handleTouchEnd(heroNavigate, aboutNavigate)}
      >
        <article className='home-hero-content homepage-section' >
          <h1>D<span>rew </span>V<span>erwiel</span></h1>
          <h2>Full Stack Developer</h2>
        </article>
        <img className='home-background' src={HeadshotDrawing} alt='' />
      </header>

      <div 
        className='home-about'
        ref={aboutRef} 
        onTouchStart={(e) => handleTouchStart(e)} 
        onTouchMove={(e) => handleTouchMove(e)} 
        onTouchEnd={() => handleTouchEnd(heroNavigate, projectsNavigate)}
      >
        <AboutMeSection  />
      </div>

      <div
        className='home-projects'
        ref={projectsRef}
        onTouchStart={(e) => handleTouchStart(e)} 
        onTouchMove={(e) => handleTouchMove(e)} 
        onTouchEnd={() => handleTouchEnd(aboutNavigate, contactNavigate)}
      >
        <ProjectsSection  />
      </div>

      <div
        className='home-contact'
        ref={contactRef}
        onTouchStart={(e) => handleTouchStart(e)} 
        onTouchMove={(e) => handleTouchMove(e)} 
        onTouchEnd={() => handleTouchEnd(projectsNavigate, contactNavigate)}
      >
        <ContactSection  />
      </div>
    </main>
  )
}

export default Home
