import { useEffect } from 'react'
import './ScrollIcon.css'

const ScrollIcon = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      var navbar = document.getElementById('scrollWrapper') as HTMLElement
      if (window.scrollY > 150) {
        navbar.style.opacity = '0'
        // navbar.style.height = '1'
      } else {
        navbar.style.opacity = '1'
      }
    })
  })

  return (
    <div id='scrollWrapper'>
      <div className='container'>
        <div className='chevron'></div>
        <div className='chevron'></div>
        <div className='chevron'></div>
        <span className='text'>Scroll down</span>
      </div>
    </div>
  )
}

export default ScrollIcon
