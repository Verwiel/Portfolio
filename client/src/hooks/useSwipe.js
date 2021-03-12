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
    console.log("vert start:" + touchStartVertical)
    console.log("horiz start:" + touchStartHorizontal)
    setTouchStartHorizontal(e.targetTouches[0].clientX)
    setTouchStartVertical(e.targetTouches[0].clientY)
  }

  function handleTouchMove(e){
    console.log("vert move:" + touchEndVertical)
    console.log("horiz move:" + touchEndHorizontal)
    setTouchEndHorizontal(e.targetTouches[0].clientX)
    setTouchEndVertical(e.targetTouches[0].clientY)
  }

  function handleTouchEnd(swipe1Func, swipe2Func){
    console.log('hit swipe')
    // Swipe 1 is Left or Up
    if(touchStartVertical - touchEndVertical < -75 || touchStartHorizontal - touchEndHorizontal < -75){
      swipe1Func()
      console.log('swiped left / up')
    }
    // Swipe 2 is Right or Down
    if(touchStartVertical - touchEndVertical > 75 || touchStartHorizontal - touchEndHorizontal > 75){
      swipe2Func()
      console.log('swiped right / down')
    }
  }
  return [handleTouchStart, handleTouchMove, handleTouchEnd]
}
