import React from 'react'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'

const OSRS = () => {
  return (
    <article className='project-details'>
      <SideBack route='/portfolio' />
      <ProjectHeader title='Old-school Runescape Tracker' description='' />
    </article>
  )
}

export default OSRS
