import React from 'react'

const NavMenu = ({ isNavOpen, internalLinksMap, socialLinksMap }) => {
  return (
    <nav style={
      {
        transform: isNavOpen ? 'translateY(0%)' : 'translateY(calc(-100% - 75px))', 
        boxShadow: isNavOpen ? '0 10px 30px -10px #020c1bb3' : 'none'
      }
    }
    >
      <ul className='navbar-item-wrap'>
        {internalLinksMap}
      </ul>
      <ul className='navbar-icon-wrap'>
        {socialLinksMap}
      </ul>
    </nav>
  )
}

export default NavMenu
