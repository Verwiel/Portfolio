import React from 'react'
import { Link } from 'react-router-dom'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'
import Technologies from '../../components/projects/Technologies'

const IODWebsite = () => {
  return (
    <main className='project-details'>
      <SideBack route='/portfolio' />
      <ProjectHeader title='InsideOut Development - Website' description='' />
      <Technologies languages={["React", "Node", "Express", "MySQL", "Sass"]} /> 
      <article>
        <small>Due to this being a private codebase, I am unable to share a link to the code repository.</small>
        <br />
        <small>I will be uploading images and code snippets in the future to help give a better understanding of the app.</small>

        <p>After I was hired as a full-time employee, one of my first tasks was to rebuild the InsideOut Website into a React Codebase.</p>
        <p>Throughout my time at InsideOut Development, we have worked with various marketing companies who had different visions for the website. This led to a lot of experience working with outsourced marketing and design teams to update the website and bring their visions to life.</p>

        <div>
          <p>Throughout the different versions, aside from all the styling and architecture, I have built the following:</p>
          
          <ul>
            <li>Contact forms that hooked up to Pardot, later converted to hook up to HubSpot.</li>
            <li>A cron job that pulls all our events from Salesforce and updates our database with the most. up-to-date information. Lists of these events can be seen for <a className='hyper-link' href="https://insideoutdev.com/events" target="_blank" rel="noopener noreferrer">GROW</a> and <a className='hyper-link' href="https://insideoutdev.com/ioc/events" target="_blank" rel="noopener noreferrer">InsideOut Coaching</a></li>
            <li>The Event Registration Modules. These collect various information to send through Zapier and into Salesforce. Payment is processed via Stripe.</li>
            <li>Implemented various CRMs to handle our <a className='hyper-link' href="https://insideoutdev.com/resources" target="_blank" rel="noopener noreferrer">Resources</a> and <a className='hyper-link' href="https://insideoutdev.com/blog" target="_blank" rel="noopener noreferrer">Blogs</a> (StoryBlok and Strapi respectively).</li>
            <li>Various interactive Vector Graphics. These are not in the current design, but an example can be found at the bottom of my <Link className='hyper-link' to='/about'>About Me</Link> page!</li>
            <li>Forms that our Client Coordinators can send out that link back to our Salesforce accounts to eliminate manual data entry.</li>
            <li>Animations and Carousels (the former is not in the current design)</li>
          </ul>
        </div>

        <div>
          <p>The key takeaways I learned from building and rebuilding the InsideOut Development website are: </p>
          <ul>
            <li>Mobile First Styling</li>
            <li>Responsive Styling</li>
            <li>Animations</li>
            <li>Working with different image formats</li>
            <li>Hooking forms up to Zapier, Salesforce, Pardot, and HubSpot</li>
            <li>Pulling data from Salesforce</li>
            <li>Writing Cron jobs</li>
          </ul>
        </div>
      </article>
    </main>
  )
}

export default IODWebsite
