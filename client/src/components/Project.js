import React from 'react'

const Project = ({ name, description, languages, images, thumbnail }) => {
  return (
    <li className='card'>
      <img src={thumbnail} alt={name} />
    </li>
  )
}

export default Project
