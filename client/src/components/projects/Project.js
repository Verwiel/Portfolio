import React from 'react'

const Project = ({ name, thumbnail }) => {
  return (
    <li>
      <img src={thumbnail} alt="" />
      <p>{name}</p>
    </li>
  )
}

export default Project
