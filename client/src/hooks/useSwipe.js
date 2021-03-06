import { useState } from 'react'

// on container use 
  // onTouchStart={(e) => handleTouchStart(e)}
  // onTouchMove={(e) => handleTouchMove(e)}
  // onTouchEnd={() => handleTouchEnd(swipe1Func, swipe2Func)}

export const useSwipe = () => {
  const [touchStartVertical, setTouchStartVertical] = useState(0)
  const [touchEndVertical, setTouchEndVertical] = useState(0)
  const [touchStartHorizontal, setTouchStartHorizontal] = useState(0)
  const [touchEndHorizontal, setTouchEndHorizontal] = useState(0)

  function handleTouchStart(e){
    setTouchStartHorizontal(e.targetTouches[0].clientX)
    setTouchStartVertical(e.targetTouches[0].clientY)
  }

  function handleTouchMove(e){
    setTouchEndHorizontal(e.targetTouches[0].clientX)
    setTouchEndVertical(e.targetTouches[0].clientY)
  }

  function handleTouchEnd(swipe1Func, swipe2Func){
    // Swipe 1 is Left or Up
    if(touchStartVertical - touchEndVertical < -75 || touchStartHorizontal - touchEndHorizontal < -75){
      swipe1Func()
    }
    // Swipe 2 is Right or Down
    if(touchStartVertical - touchEndVertical > 75 || touchStartHorizontal - touchEndHorizontal > 75){
      swipe2Func()
    }
  }
  return [handleTouchStart, handleTouchMove, handleTouchEnd]
}
