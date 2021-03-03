import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import socialLinks from '../data/socialNav.json'
import ContactImage from '../assets/capitol-reef-image.svg'

const ContactSection = () => {

  const socialLinksMap = socialLinks.map((link, i) => (
    <li key={i} style={{display: i === 2 && 'none'}}>
      <a href={link.route} className='contact-icon' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={[`${link.type}`, `${link.icon}`]} />
      </a>
    </li>
  ))

  return (
    <article id='contact' className='home-contact'>
      <div className='text-column'>
        <h2>Contact</h2>
        <p className='body-1'>Find me on social media or send me an email if you're interested in learning more!</p>
        <ul>
          {socialLinksMap}
        </ul>
        <button className='btn-green'>Get in touch</button>
      </div>
      <img src={ContactImage} alt='Me at Capitol Reef National Park' />
    </article>
  )
}

export default ContactSection