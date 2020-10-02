import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProjectDetails = ({ name, description, languages, images }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageMap = images.map((image, i) => {
    return (
      <p key={i} className={i === activeIndex ? 'carousel-slides-active' : 'carousel-slides-inactive'}>{image}</p>
    )
  })

  const nextImage = () => {
    if(activeIndex < images.length - 1){
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }
  }

  const previousImage = () => {
    if(activeIndex > 0){
      setActiveIndex(activeIndex - 1)
    } else {
      setActiveIndex(images.length - 1)
    }
  }
  
  return (
    <div className='carousel'>
      <div className='carousel-slides'>
        <button onClick={previousImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {imageMap}
        <button onClick={nextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <article className='carousel-info'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{languages}</p>
      </article>
    </div>
  )
}

export default ProjectDetails
