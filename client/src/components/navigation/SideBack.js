import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const SideBack = ({ route }) => {
  return (
    <nav className='side-bar'>
      <Link to={route} className='side-bar-back'>
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </Link>
    </nav>
  )
}

export default SideBack
