import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import useWindowDimensions from '../hooks/useWindowDimensions'
import useOutsideClick from '../hooks/useOutsideClick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import internalLinks from '../data/internalNav.json'
import socialLinks from '../data/socialNav.json'

const Navbar = () => {
  const navHamburger = useRef()
  const [isNavOpen, setNavOpen] = useState(false)
  useOutsideClick(navHamburger, () => setNavOpen(false))
  const { width } = useWindowDimensions()

  const internalLinksMap = internalLinks.map(link => (
    <li key={link.name}>
      {link.name !== 'Contact' ?
      <NavLink 
        to={link.route} 
        className='navbar-item' 
        activeClassName='navbar-item-active'
        onClick={() => setNavOpen(false)}
      >
        {link.name}
      
      </NavLink>
      :
      <NavHashLink 
        to={link.route} 
        className='navbar-item' 
        activeClassName='navbar-item-active' 
        onClick={() => setNavOpen(false)}
      >
        {link.name}
      </NavHashLink>
      }
    </li>
  ))

  const socialLinksMap = socialLinks.map((link, i) => (
    <li key={i}>
      <a 
      href={link.route} 
      className='navbar-icon' 
      target={i < 2 ? '_blank' : ''} 
      rel={i < 2 ? 'noopener noreferrer' : ''} 
      onClick={() => setNavOpen(false)}>
        <FontAwesomeIcon icon={[`${link.type}`, `${link.icon}`]} />
      </a>
    </li>
  ))

  return (
    <nav className='navbar'>
      {width >= 768 ?
        <>
          <ul className='navbar-item-wrap'>
            {internalLinksMap}
          </ul>
          <ul className='navbar-icon-wrap'>
            {socialLinksMap}
          </ul>
        </>
      : !isNavOpen &&
        <FontAwesomeIcon icon={faBars} className='open-icon' onClick={() => setNavOpen(true)} />
      } 

      {(isNavOpen && width < 768) && 
        <nav className='navbar-hamburger' ref={navHamburger}>
          <ul className='navbar-item-wrap'>
            {internalLinksMap}
          </ul>
          <ul className='navbar-icon-wrap'>
            {socialLinksMap}
          </ul>
          <FontAwesomeIcon icon={faChevronUp} className='close-icon' onClick={() => setNavOpen(false)} />
        </nav>
      }
    </nav>
  )
}

export default Navbar