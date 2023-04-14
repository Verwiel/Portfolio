import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ProjectCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageMap = images.map((image, i) => {
    return (
      <div key={i} className={i === activeIndex ? 'carousel-slides-active' : 'carousel-slides-inactive'}>
        <img  src={image} alt={image} />
      </div>
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

export default ProjectCarousel
