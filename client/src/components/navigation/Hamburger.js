import React from 'react'

const Hamburger = ({ isNavOpen, setNavOpen }) => {
  return (
    <button onClick={() => setNavOpen(!isNavOpen)}>
      <div style={{transform: isNavOpen ? 'rotate(45deg)' : 'rotate(0)'}} />
      <div style={{opacity: isNavOpen ? '0' : '1', transform: isNavOpen ? 'translateX(20px)' : 'translateX(0)'}}/>
      <div style={{transform: isNavOpen ? 'rotate(-45deg)' : 'rotate(0)'}}/>
    </button>
  )
}

export default Hamburger
