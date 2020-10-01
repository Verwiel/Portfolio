import React from 'react'

const Project = ({ name, thumbnail, openProject }) => {
  return (
    <>
      <li className='card' onClick={openProject}>
        <img src={thumbnail} alt={name} />
      </li>
    </>
  )
}

export default Project
