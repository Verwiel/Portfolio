import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadshotDrawing from '../../assets/headshot-drawing.svg'
import socialLinks from '../../data/socialNav.json'

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
        <p className='body-1'>Find me on social media or shoot me an email if you’re interested in getting in touch with me!</p>
        <ul>
          {socialLinksMap}
        </ul>
        <a href='mailto: drew_verwiel@outlook.com'>
          <button className='btn-green' >hit me up</button>
        </a>
      </section>
      {/* Image of Phone, Envelope, Laptop*/}
      <img className='home-background' src={HeadshotDrawing} alt='' />
    </article>
  )
}

export default ContactSection
