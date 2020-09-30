import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='global-header'>
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