import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

const SideNav = ({ location }) => {
  const samePageNavigation = [
    "#hero",
    "#about",
    "#projects",
    "#contact"
  ]
  
  const navMap = samePageNavigation.map((nav, i) => {
    return (
      <li key={i}>
        <NavHashLink 
          to={nav}
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          className={location.hash.length < 1 && i === 0 ? 'side-link-active' : 'side-link'} 
          activeClassName='side-link-active'
        >
          &nbsp;
        </NavHashLink>
      </li>
    )
  })

  return (
    <nav className='side-bar'>
      <ul>
        {navMap}
      </ul>
    </nav>
  )
}

export default SideNav
