import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import internalLinks from '../JSON/internalNav.json'
import socialLinks from '../JSON/socialNav.json'

const Navbar = () => {
  const internalLinksMap = internalLinks.map(link => (
    <li key={link.name}>
      <NavLink to={link.route} className='navbar-item' activeClassName='navbar-item-active'>{link.name}</NavLink>
    </li>
  ))

  const socialLinksMap = socialLinks.map((link, i) => (
    <li key={i}>
      <a href={link.route} className='navbar-icon' target={i < 2 ? '_blank' : ''} rel={i < 2 ? 'noopener noreferrer' : ''}>
        <FontAwesomeIcon icon={[`${link.type}`, `${link.icon}`]} />
      </a>
    </li>
  ))
  
  return (
    <div className='navbar'>
      <ul className='navbar-item-wrap'>
        {internalLinksMap}
      </ul>
      <ul className='navbar-icon-wrap'>
        {socialLinksMap}
      </ul>
    </div>
  )
}

export default Navbar