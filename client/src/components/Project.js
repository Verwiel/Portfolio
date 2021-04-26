import React from 'react'

const Project = ({ name, thumbnail, className, openProject }) => {
  return (
    <>
      <li className={className} onClick={openProject}>
        <a href="#projects"><img src={thumbnail} alt={name} />
          <p>{name}</p>
        </a>
      </li>
    </>
  )
}

export default Project
