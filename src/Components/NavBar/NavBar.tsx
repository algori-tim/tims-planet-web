import './NavBar.css'
import { useEffect } from 'react'

const NavBar = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      var navbar = document.getElementById('nav-bar') as HTMLElement
      if (window.scrollY > 150) {
        navbar.style.opacity = '1'
      } else {
        navbar.style.opacity = '0'
      }
    })
  })

  const handleClickHome = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const scrollTo = (el: string) => {
    const element = document.getElementById(el) as HTMLElement
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  return (
    <>
      <nav id='nav-bar' className='nav-bar'>
        <div className='nav-left'>
          <img id='tim-pic' src='tim.jpg' />
          <p className='nav-text'>Tim Johnson</p>
        </div>
        <div className='nav-right'>
          <button className='nav-button nav-text' onClick={handleClickHome}>
            home
          </button>
          <button className='nav-button nav-text' onClick={() => scrollTo('hello-world')}>
            about me
          </button>
          <button className='nav-button nav-text' onClick={() => scrollTo('projects')}>
            projects
          </button>
          <button className='nav-button nav-text'>contact</button>
        </div>
      </nav>
    </>
  )
}

export default NavBar
