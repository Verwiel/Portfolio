import React from 'react'
import { Link } from 'react-router-dom'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'
import Technologies from '../../components/projects/Technologies'

const IODEmployee = () => {
  return (
    <main className='project-details'>
      <SideBack route='/portfolio' />
      <ProjectHeader title='InsideOut Development - Employee Portal' description='' />
      <Technologies languages={["React", "Typescript", "Node", "Express", "MySQL", "Sass"]} /> 
      <article>
        <small>Due to this being a private codebase, I am unable to share a link to the code repository.</small>
        <br />
        <small>I will be uploading images and code snippets in the future to help give a better understanding of the app.</small>

        <p>InsideOut Developments Employee was architected and built by me and the Intern I was training at the time. It's a hub used to track employee satisfaction, give other employees recognition, and request time off.</p>
        <p>Starting with the employee satisfaction surveys, every week a cron job runs and creates a record for each employee to fill out. The survey consists of a basic rating scale and a comments section. You receive an email every Friday if you have yet to fill out your survey. </p>
        <p>The admin portion allows managers to view their direct reports' comments and rating for any given week, send a reminder email, and view a trend chart of how their report has been doing. </p>
        <p>For employee recognition, an employee can select from a list of all employees they want to send recognition to, type out a message, and select which of the company's values it relates to.</p>
        <div>
          <p>The key takeaways I learned from building the InsideOut Development Employee portal are:</p>
          <ul>
            <li>Using Chart.js to display various analytics.</li>
            <li>Creating weekly records based on criteria from a database table.</li>
            <li>Many of the takeaways from the <Link className='hyper-link' to='/portfolio/iod-communities'>Communities</Link>, such as CI/CD and Authentication, also applied to this project.</li>
          </ul>
        </div>
      </article>
    </main>
  )
}

export default IODEmployee
