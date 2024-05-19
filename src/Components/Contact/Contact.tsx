import './Contact.css'
import SectionHeader from '../SectionHeader/SectionHeader'

const Contact = () => {
  const handleCloseModal = () => {
    const dialogOverlay = document.getElementById('dialog-overlay') as HTMLElement
    dialogOverlay.style.display = 'none'
    const dialog = document.getElementById('contact-dialog') as HTMLDialogElement
    dialog.close()
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tim@timsplanet.com')
    alert('tim@timsplanet.com copied to clipoard!')
  }

  return (
    <div id='dialog-overlay' className='dialog-overlay'>
      <dialog id='contact-dialog'>
        <SectionHeader content='Want to Connect?' id='want-to-connect' />
        <p>If you'd like to connect, feel free to shoot me an email or send me a message on LinkedIn.</p>
        <ul>
          <li>
            <img src='mail.svg' alt='mail icon' />
            <div>tim@timsplanet.com</div>
            <button className='copy-button' onClick={handleCopyEmail}>
              <img src='copy.svg' alt='copy email icon' />
            </button>
          </li>
          <li>
            <img src='linkedin.svg' alt='' />
            <a href='https://www.linkedin.com/in/timabbottjohnson' target='_blank' rel='noopener noreferrer'>
              /timabbottjohnson
            </a>
          </li>
        </ul>
        <div className='dialog-button-wrapper'>
          <button id='close-contact' onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </dialog>
    </div>
  )
}

export default Contact
