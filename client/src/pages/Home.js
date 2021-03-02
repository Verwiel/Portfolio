import React, { useRef, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useSwipe } from '../hooks/useSwipe'
import SideNav from '../components/SideNav'
import AboutMeSection from '../components/AboutMeSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

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

  function navigate(location, ref){
    history.push(location)
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
    disableWheel()
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

  // Set time out to avoid scrolling all the way to the bottom onWheel
  function disableWheel() {
    // temporarily disable action
    setWheelEnabled(false)

    // set a timer to enable again it 1 second from now
    setTimeout(function() {
      setWheelEnabled(true);
    }, 500);
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


  return (
    <main className='home' onWheel={(e) => scrollNavigation(e)} >
      <SideNav location={location} />
      <header 
        id='hero' 
        className='home-hero full-page' 
        ref={homeRef}
        onTouchStart={(e) => handleTouchStart(e)} 
        onTouchMove={(e) => handleTouchMove(e)} 
        onTouchEnd={() => handleTouchEnd(heroNavigate, aboutNavigate)}
      >
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
        onTouchEnd={() => handleTouchEnd(heroNavigate, projectsNavigate)}
      >
        <AboutMeSection  />
      </div>

      <div 
        ref={projectsRef}
        onTouchStart={(e) => handleTouchStart(e)} 
        onTouchMove={(e) => handleTouchMove(e)} 
        onTouchEnd={() => handleTouchEnd(aboutNavigate, contactNavigate)}
      >
        <ProjectsSection  />
      </div>

      <div 
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
