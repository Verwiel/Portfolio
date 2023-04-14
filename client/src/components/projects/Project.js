import React from 'react'

const Project = ({ name, thumbnail }) => {
  return (
    <li style={{backgroundImage: `url(${thumbnail})`}}>
      <p>{name}</p>
    </li>
  )
}

export default Project
