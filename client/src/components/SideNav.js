import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

const SideNav = () => {
  return (
    <nav className='side-bar'>
      <ul>
        <li>
          <NavHashLink to="/" className='side-link' activeClassName="side-link-active">&nbsp;
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#about" className='side-link' activeClassName="side-link-active">&nbsp; 
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#projects" className='side-link' activeClassName="side-link-active">&nbsp;
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#contact" className='side-link' activeClassName="side-link-active">&nbsp;
          </NavHashLink>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav
