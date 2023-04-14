import React from 'react'
import ProjectCarousel from '../../components/projects/ProjectCarousel'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'

import test1 from '../../assets/projects/AccountRegister.PNG'
import test2 from '../../assets/projects/AnalyticsBar.PNG'
import test3 from '../../assets/projects/Events.PNG'
import test4 from '../../assets/projects/PulseSurvey.PNG'

const IODCommunities = () => {
  const images = [test1, test2, test3, test4]
  return (
    <article className='project-details'>
      <SideBack route='/portfolio' />
      <ProjectHeader title='InsideOut Development - Communities' description='' />
      <ProjectCarousel images={images} />
    </article>
  )
}

export default IODCommunities
