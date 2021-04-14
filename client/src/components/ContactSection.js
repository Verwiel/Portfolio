import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadshotDrawing from '../assets/headshot-drawing.svg'
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
    <article id='contact' className='homepage-section'>
      <h2>Contact</h2>
      <section>
        <p className='body-1'>Find me on social media or send me an email if you're interested in learning more!</p>
        <ul>
          {socialLinksMap}
        </ul>
        <button className='btn-green'>Hit me up</button>
      </section>
      <img className='home-background' src={HeadshotDrawing} />
    </article>
  )
}

export default ContactSection