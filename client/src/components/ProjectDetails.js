import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProjectDetails = ({ name, description, languages, images }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageMap = images.map((image, i) => {
    return (
      <img key={i} className={i === activeIndex ? 'carousel-slides-active' : 'carousel-slides-inactive'} src={image} alt={image} />
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
      <article className='carousel-info'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{languages}</p>
      </article>
      {images.length > 0 &&
        <div className='carousel-slides'>
          {images.length > 1 &&
            <button onClick={previousImage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          }
          {imageMap}
          {images.length > 1 &&
            <button onClick={nextImage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          }
        </div>
      }
    </div>
  )
}

export default ProjectDetails
