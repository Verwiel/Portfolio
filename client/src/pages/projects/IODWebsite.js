import React from 'react'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'

const IODWebsite = () => {
  return (
    <article className='project-details'>
      <SideBack route='/portfolio' />
      <ProjectHeader title='InsideOut Development - Website' description='' />
    </article>
  )
}

export default IODWebsite
