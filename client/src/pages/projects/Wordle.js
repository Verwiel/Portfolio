import React from 'react'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'

const Wordle = () => {
  return (
    <article className='project-details'>
      <SideBack route='/portfolio' />
      <ProjectHeader title='Wordle' description='' />
    </article>
  )
}

export default Wordle
