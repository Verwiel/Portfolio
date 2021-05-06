import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from '../assets/logo_drawing.svg'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const showName = location.pathname !== '/' && location.pathname !== '/about'

  const changeHeaderBackground = () => {
    window.scrollY >= 1 ? setScrolled(true) : setScrolled(false)
  }

  window.addEventListener('scroll', changeHeaderBackground)

  useEffect(() => {
    !location.hash && window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header className={scrolled ? 'global-header active-header' : 'global-header'}>
      <div className='global-header-content'>
        <Link 
          to='/' 
          className='global-header-content-logo' 
          onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
        >
          <img src={Logo} alt='Drew Verwiel Logo' />
          {(showName || scrolled) && 
            <h4 className='fade-in'>Drew Verwiel</h4>
          }
        </Link>

        <Navbar />
      </div>
    </header>
  )
}

export default Header