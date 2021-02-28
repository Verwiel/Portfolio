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
  }, [location])

  return (
    <header className={scrolled ? 'global-header active-header' : 'global-header'}>
      <div className='global-header-content'>
        <Link to='/' className='global-header-content-logo'>
          <img src={Logo} alt='Drew Verwiel Logo' />
          {(showName || scrolled) && 
            <h1 className='fade-in'>Drew Verwiel</h1>
          }
        </Link>

        <Navbar />
      </div>
    </header>
  )
}

export default Header