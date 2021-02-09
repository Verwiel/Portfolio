import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from '../assets/logo.png'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const activeNav = location.pathname !== '/' && location.pathname !== '/about'

  const changeHeaderBackground = () => {
    window.scrollY >= 1 ? setScrolled(true) : setScrolled(false)
  }

  window.addEventListener('scroll', changeHeaderBackground)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <header className={scrolled || activeNav ? 'global-header active-header' : 'global-header'}>
      <div className='global-header-content'>
        <Link to='/' className='global-header-content-logo'>
          <img src={Logo} alt='Drew Verwiel Logo' />
          {activeNav && <h1>Drew Verwiel</h1>}
        </Link>

        <Navbar />
      </div>
    </header>
  )
}

export default Header