import React from 'react'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'
import Technologies from '../../components/projects/Technologies'

const OSRS = () => {
  return (
    <main className='project-details'>
      <SideBack route='/portfolio' />
      <ProjectHeader title='Old-school Runescape Tracker' description='' />
      <Technologies languages={["React", "Typescript", "MySQL", "Sass", "Python", "Flask"]} />
      <article>
        <div>
          <a style={{margin: '0 10px'}} className='hyper-link' href="https://github.com/Verwiel/OSRS-Tracker" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a style={{margin: '0 10px'}} className='hyper-link' href="https://osrs-tracker-nine.vercel.app/" target="_blank" rel="noopener noreferrer">Deployed App</a>
        </div>
        <p>It's funny, but I feel like this one needs a bit of a disclaimer before looking at it too seriously. Runescape was one of my favorite games as a kid, and Old-school Runscape (referred to from here on out as OSRS) is Runescape graphically frozen in 2007. To stick with the old-school vibes, I decided to design the app based on the OSRS website.</p>
        <p>The backend for this project is a Python Flask app that has a cron job to check daily for quest updates and runs a BS4 web scraper to get all relevant data for those quests.</p>
        <p>The Frontend is React/Typescript where you can enter a username to check a users high scores and levels from the official Runescape API and mark down which quests you've completed. The completed quests are stored in local storage to avoid the need for a database.</p>
        <p>This project has its front end and back end deployed separately since I wanted to become more accustomed to other deployment options. They are deployed on Vercel and Render respectively.</p>
        <div>
          <p>The key takeaways I learned from building the OSRS Tracker are:</p>
          <ul>
            <li>Working with Python and Flask.</li>
            <li>Deploying a Flask App.</li>
            <li>Building a web scraper.</li>
            <li>Deploying front ends and backends separately and deploying on Render in general.</li>
            <li>Continuing to learn about Local Storage and API calls.</li>
          </ul>
        </div>
      </article>
    </main>
  )
}

export default OSRS
