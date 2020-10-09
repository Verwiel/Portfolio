import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from '../assets/logo.png'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const activeNav = location.pathname.length > 1

  const changeHeaderBackground = () => {
    window.scrollY >= 20 ? setScrolled(true) : setScrolled(false)
  }

  window.addEventListener('scroll', changeHeaderBackground)

  return (
    <header className={scrolled ? 'global-header active-header' : 'global-header'}>
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