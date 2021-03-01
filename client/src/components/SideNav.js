import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

const SideNav = () => {

  const samePageNavigation = [
    "#hero",
    "#about",
    "#projects",
    "#contact"
  ]
  
  const navMap = samePageNavigation.map((nav, i) => {
    return (
      <li key={i}>
        <NavHashLink to={nav} smooth className='side-link' activeClassName="side-link-active">&nbsp;
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
