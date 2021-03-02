import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import socialLinks from '../data/socialNav.json'

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
        <p>Find me on social media or send me an email if you're interested in learning more!</p>
        <ul>
          {socialLinksMap}
        </ul>
        <button className='btn-green'>Get in touch</button>
      </div>
      <img src='' alt='placeholder' />
    </article>
  )
}

export default ContactSection