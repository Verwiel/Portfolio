import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <header className='about-header'>
        <div className='about-header-content'>
          <h1>Hi,</h1>
          <h1>I'm Drew Verwiel.</h1>
          <p>I am a Salt Lake City based Full Stack Web Developer.</p>
        </div>
      </header>

      <div className='about-content'>
        <section>
          <h2>What I'm doing</h2>
          <p>My name is Drew Verwiel and I am a Salt Lake City based Full Stack Web Developer.</p>
          <p>I currently work for InsideOut Development as an Application Developer. I spend most of my workday doing front-end development in React but my responsibilities also include: Writing back-end code with Node and Express, working with our MySQL database, and working through IT support tickets that come in.</p>
        </section>

        <section>
          <h2>How I got where I am</h2>
          <p>I was born and raised in Oshkosh, Wisconsin. After attaining a Bachelors degree in Business from the University of Wisconsin Stout my girlfriend and I packed up her Nissan Sentra and moved out to Salt Lake City, Utah. While working at Park City / Canyons Mountain Resorts I decided I wanted to get into a more fulfilling career (not that snowboarding every day wasn’t awesome). I explored my options for a degree in Computer Science, unable to afford going back to college, I decided to attend Helio Trainings Full Stack Web Development Bootcamp in hopes of getting my foot in the door somewhere and continuing to grow my knowledge.</p>
        </section>

        <section>
          <h2>Where I'm looking to go next</h2>
          <p>I love what I do and the endless possibilities of what to learn next and what direction to take my career. No matter where I end up, I know that this is the industry I want to be in. I am still planning on going back to school for Computer Science. I am more than happy to stay in web development for the time being but long term I want to expand my knowledge more into the world of Software Engineering.</p>
          <p>In the immediate future I am looking to start my journey towards software engineering as well as open myself up to freelance opportunities.</p>
        </section>

        <section>
          <h2>Get to know me</h2>
          <p>Hobbies / Interests</p>
          <ul>
            <li>Adventure</li>
            <li>Action Sports</li>
            <li>Brewing</li>
            <li>Gaming</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About