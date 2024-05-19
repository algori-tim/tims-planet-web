import Contact from '../Contact/Contact'
import './NavBar.css'
import { useEffect } from 'react'

const NavBar = () => {
  // const [openContactInfo, setOpenContactInfo] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      var navbar = document.getElementById('nav-bar') as HTMLElement
      if (window.scrollY > 150) {
        navbar.style.opacity = '1'
        // navbar.style.height = '1'
      } else {
        navbar.style.opacity = '0'
      }
    })
  })

  const handleOpenContact = () => {
    const dialogOverlay = document.getElementById('dialog-overlay') as HTMLElement
    dialogOverlay.style.display = 'flex'
    const dialog = document.getElementById('contact-dialog') as HTMLDialogElement
    dialog.showModal()
  }
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

  const openMenu = (open: boolean) => {
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement
    mobileMenu.style.display = open ? 'flex' : 'none'
  }

  useEffect(() => {
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement
    mobileMenu.addEventListener('click', () => {
      openMenu(false)
    })
  })

  return (
    <>
      <Contact />
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
          <button className='nav-button nav-text' onClick={handleOpenContact}>
            contact
          </button>
        </div>
        <div className='hamburger' onClick={() => openMenu(true)}>
          <img src='menu.svg' alt='nav menu' />
        </div>
        <div className='mobile-menu'>
          <button className='nav-button nav-text' onClick={handleClickHome}>
            home
          </button>
          <button className='nav-button nav-text' onClick={() => scrollTo('hello-world')}>
            about me
          </button>
          <button className='nav-button nav-text' onClick={() => scrollTo('projects')}>
            projects
          </button>
          <button className='nav-button nav-text' onClick={handleOpenContact}>
            contact
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar
