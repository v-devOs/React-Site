import { useEffect } from "react"
import { useState } from "react"

export const useScroll = () => {
  const [width, setWidth] = useState(100)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if( window.scrollY > 100){
        setWidth(0)
      }
      else if( window.screenY < 100){
        setWidth(100)
      }
    })
  
    
  }, [])
  
  return { width }
  
}
