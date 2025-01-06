import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../hooks/useWindowDimensions'
import SideBack from '../components/navigation/SideBack'
import HobbiesImage from '../assets/HobbiesImage'
import AboutMeDrawing from '../assets/about-me-drawing.svg'


const About = () => {
  const [activeHobby, setActiveHobby] = useState('')
  const { width } = useWindowDimensions()

  const handleClick = (e) => {
    let hobby = e.target.id
    setActiveHobby(hobby)
  }

  return (
    <main className='about'>
      <SideBack route='/#about' />
      <header className='about-header'>
        <article>
          <h1>About Me</h1>
        </article>
        <img src={AboutMeDrawing} alt='' />
      </header>

      <article className='about-content'>
        <section>
          <h2>What I'm doing</h2>
          <p className='body-1'>I’m currently looking for an opportunity to continue my work as a software developer. My skillset includes all the basic web development languages (HTML, CSS, JavaScript), various JavaScript frameworks (React, Next, Node), MySQL, HubSpot, Git, DigitalOcean (Ubuntu) servers, and more! </p>
          <p className='body-1'>My last job was at InsideOut Development as a Full-stack developer writing in React, Node/Express, MySQL, and Sass. If you want to see a snippet of the work I did there or check out some of my side projects, head over to the <Link to='/portfolio' className='hyper-link'>projects</Link> section.</p>
        </section>

        <section>
          <h2>How I got where I am</h2>
          <p className='body-1'>Getting where I am has been a pretty crazy journey. I attended the University of Wisconsin - Stout where I graduated with a business degree, travelled the country living out of a camper in the bed of my pickup truck, and ended up moving out to Utah. While in Utah, I started to look back into getting a career. While applying for jobs I thought back on what I enjoyed about my time at college and where I could work that aligned with my interests. I loved my analytic and logic courses, so I knew I wanted to go in that direction. I started dabbling in all the free coding courses I could find online and making basic hello world apps, to make sure this was a route I wanted to go. I was hooked. I wanted to return to school asap so I applied and got into the University of Utah, the only problem was that I had used up all the loans I could during my first run at college. Unable to afford a university I found an alternative at a nearby coding bootcamp, Helio Training. After finishing the bootcamp with their certificates of completion and proficiency, I landed a job at InsideOut Development. Five years later, I’m living out in North Carolina exploring all I can of the east and hoping to keep growing in my career.</p>
        </section>

        <section>
          <h2>What Now?</h2>
          <p className='body-1'>Pursuing a career in software development was one of the best choices I have ever made. I love the problems I get to solve on an almost daily basis and have time to continue exploring more technologies. Now that I feel I have a good foundation in coding I’ve been trying to get more into the artistic aspects of development as well, I've always enjoyed drawing but bringing it to the computer was a hurdle (I think I’m getting there though, all of the graphics on this website is me taking a stab at digital art!). I hope to continue my career advancement as a Software Developer or Front End Engineer at a company that shares similar viewpoints as me and has an awesome product. Until then the possibilities of what to learn next are endless.</p>
        </section>

        <section>
          <h2>Who I am</h2>
          <p className='body-1'>I love adventure and getting out to experience new things. If you asked my friends about me you’d hear that I am quick to laugh, laid back, and have a strong work ethic. I spend a lot of time coding projects I find on Udemy or ZTM as well as attending classes at the community colleges to continue to expand my knowledge on my other hobbies. Checkout the interactive hobbies image I made below!</p>
        </section>
      </article>
      
      <section className='hobbies'>
        <HobbiesImage activeHobby={activeHobby} handleClick={handleClick} />
        {activeHobby.length > 0 ?
          <div>
            <h4 style={{margin: '10px 0 0 0'}}>{activeHobby}</h4>
          </div>
          :
          <div>
            <h4 style={{margin: '10px 0 0 0'}}>{width > 600 ? 'Click on' : 'Tap'} something!</h4>
          </div>
        }
      </section>
    </main>
  )
}

export default About
