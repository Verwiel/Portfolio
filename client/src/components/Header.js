import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from '../assets/logo.svg'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  const changeHeaderBackground = () => {
    window.scrollY >= 50 ? setScrolled(true) : setScrolled(false)
  }

  window.addEventListener('scroll', changeHeaderBackground)

  return (
    <header className={scrolled ? 'global-header scrolled-header' : 'global-header'}>
      <div className='global-header-content'>
        <Link to='/' className='global-header-content-logo'>
          <img src={Logo} alt='Drew Verwiel Logo' />
          <h1>Drew Verwiel</h1>
        </Link>

        <Navbar />
      </div>
    </header>
  )
}

export default Header