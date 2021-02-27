import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import socialLinks from '../data/socialNav.json'

const Contact = () => {
  const socialLinksMap = socialLinks.map((link, i) => (
    <li key={i} style={{display: i === 2 && 'none'}}>
      <span>
        <a href={link.route} className='contact-icon' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={[`${link.type}`, `${link.icon}`]} />
        </a>
        <p>{link.message}</p>
      </span>
    </li>
  ))

  return (
    <main className='contact'>
      <article>
        <h1>Contact Me</h1>
        <p>Open to opportunities</p>

        <ul>
          {socialLinksMap}
        </ul>
        <a>
          <button className='btn-green'>Hit me up</button>
        </a>
      </article>

      <img src='' alt='' />
    </main>
  )
}

export default Contact