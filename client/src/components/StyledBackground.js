import React from 'react'
// import Ocean from '../assets/Ocean.js'
import Moon from '../assets/Moon'
import Boat from '../assets/Boat'

const StyledBackground = () => {
  return (
    <div className='styled-background'>
      {/* <Ocean className='styled-background' /> */}
      <Moon className='styled-background-moon' />
      <Boat className='styled-background-boat'/>
    </div>
  )
}

export default StyledBackground
