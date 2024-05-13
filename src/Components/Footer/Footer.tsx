import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-top'>
          <h2>Tim Johnson</h2>
          <h2>social</h2>
        </div>
        <div className='footer-bottom'>
          <p>Web devloper, technology enthusiast, problem solver, and champion for creative expression.</p>
          <div className='social-logos'>
            <a className='social-logo' href='https://www.linkedin.com/in/timabbottjohnson'>
              <img src='linkedin.svg' alt='linkedin icon' />
            </a>
            <a className='social-logo' href='https://github.com/algori-tim'>
              <img src='github-mark.svg' alt='github icon' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
