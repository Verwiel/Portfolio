import React from 'react'

const Project = ({ name, thumbnail, className, openProject }) => {
  return (
    <>
      <li className={className} onClick={openProject}>
        <img src={thumbnail} alt={name} />
        <p><a href="#projects">{name}</a></p>
      </li>
    </>
  )
}

export default Project
