import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from '../assets/logo.svg'

const Header = () => {
  const location = useLocation()
  const activeNav = location.pathname.length > 1

  return (
    <header className={activeNav ? 'global-header active-header' : 'global-header'}>
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