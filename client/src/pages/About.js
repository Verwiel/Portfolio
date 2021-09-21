import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../hooks/useWindowDimensions'
import SideBack from '../components/SideBack'
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
        <img src={AboutMeDrawing} alt='About Me' />
      </header>

      <article className='about-content'>
        <section>
          <h2>What I'm doing</h2>
          <p className='body-1'>I’m currently working at InsideOut Development as an Application Developer writing in React, Node/Express, MySQL, and Sass. Being on such a small team has enabled me to have a hand in Authorization and Authentication systems, Registration and Payment processes, Salesforce Integrations, Analytics, and more (check out 
          my <Link to='/portfolio' className='hyper-link'>projects</Link>).</p>
        </section>

        <section>
          <h2>How I got where I am</h2>
          <p className='body-1'>Getting where I am has been a pretty crazy journey. I attended the University of Wisconsin - Stout where I graduated with a business degree. That summer I took a road trip out west and spent the better part of two months travelling around to all the National Parks and Cities I could, living out of a popup camper in the bed of my dads pickup truck. After returning to Wisconsin; I moved from Oshkosh up to Greenbay for a job opportunity at Shopko's headquarters. 2018 hit and Shopko fell on financial hardship and had to retract their offer. I spent the next month applying to various jobs that I was unsure I would even be a good fit for. After some soul searching my girlfriend and I decided to make a change. We packed her Nissan Sentra to the brim and drove out to Salt Lake City, where we spent a couple weeks using a couchsurfing app while we looked for a place we could afford and jobs.</p>
          <p className='body-1'>I started working up at Park City as a Lift operator and activities attendant where I got to snowboard everyday and enjoy my new life out in the mountains. Working winters at the mountain and summers at a restaurant downtown was fun, but not fulfilling. I started to look back into getting into a career. While applying for some logistics and data analyst jobs I thought back on what I enjoyed about what I did at college and where I could work that aligned with my Interests. I loved working in Excel and Access, the logic courses I took, and my freetime in college involved a lot of tech and art. The answer seemed simple, why not get a job where I can solve problems every day in creative and artistic ways: software development. I started dabbling in all the free courses I could find online and making basic hello world apps, to make sure this was a route I wanted to go. I was hooked. I wanted to return to school asap so I applied and got into the University of Utah, only problem was that I had used up all the loans I could during my first run at college. Unable to afford a university I found an alternative at a nearby coding bootcamp, Helio Training. After finishing the bootcamp with their certificates of completion and proficiency, I started a grueling job hunt where I eventually landed a job where I am now: InsideOut Development. </p>
        </section>

        <section>
          <h2>What Now?</h2>
          <p className='body-1'>I think moving to Utah and pursuing a career in software development was one of the best choices I have ever made. I love the problems I get to solve on an almost daily basis and have time to continue exploring more technologies (currently Typescript). Now that I feel I have a good foundation in coding I’ve been trying to get more into the artistic aspects of development as well, I've always enjoyed drawing but bringing it to the computer was a hurdle (I think I’m getting there though, all of the graphics on this website is me taking a stab at using Inkscape!). I hope to continue my career advancement as a Software Developer or Front End Engineer at a company that shares similar viewpoints as me and has an awesome product. Until then the possibilities of what to learn next are endless.</p>
        </section>

        <section>
          <h2>Who I am</h2>
          <p className='body-1'>I have a very laid back/chill personality and a strong work ethic. When i’m not coding I love camping, video games, snowboarding, art, and brewing beer (thanks Utah for your 3.2% beer). I’ve also recently started getting into bouldering/rock climbing and teaching myself guitar. Checkout the interactive hobbies image I made below!</p>
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
