import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import useWindowDimensions from '../hooks/useWindowDimensions'
import useOutsideClick from '../hooks/useOutsideClick'
import Hamburger from './Hamburger'
import NavMenu from '../components/NavMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        onClick={() => setNavOpen(false)}
      >
        <FontAwesomeIcon icon={[`${link.type}`, `${link.icon}`]} />
      </a>
    </li>
  ))

  return (
    <>
      {width >= 768 ?
        <nav className='navbar'>
          <ul className='navbar-item-wrap'>
            {internalLinksMap}
          </ul>
          <ul className='navbar-icon-wrap'>
            {socialLinksMap}
          </ul>
        </nav>
      :
        <div className='hamburger navbar' ref={navHamburger}>
          <Hamburger setNavOpen={setNavOpen} isNavOpen={isNavOpen}/>
          <NavMenu isNavOpen={isNavOpen} socialLinksMap={socialLinksMap} internalLinksMap={internalLinksMap} />
        </div>
      } 
    </>
  )
}

export default Navbar