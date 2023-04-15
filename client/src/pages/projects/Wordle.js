import React from 'react'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'
import Technologies from '../../components/projects/Technologies'

const Wordle = () => {
  return (
    <main className='project-details'>
      <SideBack route='/portfolio' />
      <ProjectHeader title='Wordle Clone' description='' />
      <Technologies languages={["React", "Node", "Express", "MySQL", "Sass"]} /> 
      <article>
        <div>
          <a style={{margin: '0 10px'}} className='hyper-link' href="https://github.com/Verwiel/wordle" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a style={{margin: '0 10px'}} className='hyper-link' href="https://wordle-clone-vbvg.onrender.com/" target="_blank" rel="noopener noreferrer">Deployed App</a>
        </div>

        <p>A clone of NYT Wordle, with some added features like the ability to play unlimited games in a day and try 6 letter words. This was a super fulfilling project with how much logic was involved, not to mention I love games and have never made one before!</p>
        <p>There is the ability to create an account, however, Since it won't be maintained forever, I figured it would be irresponsible to store any sensitive data so only a username is used to sign up. By omitting the email address there isn't a way to verify a password reset so I removed the ability.</p>
        <p>Usernames must be unique. If you choose to play without a username all analytics will be stored locally so you will only be able to access it from the browser you are currently using.</p>
        <div>
          <p>The key takeaways I learned from building the Wordle Clone are:</p>
          <ul>
            <li>Storing, reading, updating, and deleting information from local storage.</li>
            <li>A lot of logic and conditional styling based on a user's input.</li>
            <li>Deploying a Postgres database.</li>
          </ul>
        </div>
      </article>
    </main>
  )
}

export default Wordle
