import React from 'react'
// import ProjectCarousel from '../../components/projects/ProjectCarousel'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'
import Technologies from '../../components/projects/Technologies'

// import test1 from '../../assets/projects/AccountRegister.PNG'
// import test2 from '../../assets/projects/AnalyticsBar.PNG'
// import test3 from '../../assets/projects/Events.PNG'
// import test4 from '../../assets/projects/PulseSurvey.PNG'

const IODCommunities = () => {
  // const images = [test1, test2, test3, test4]
  return (
    <main className='project-details'>
      <SideBack route='/portfolio' />
      <ProjectHeader title='InsideOut Development - Communities' description='' />
      <Technologies languages={["React", "Node", "Express", "MySQL", "Sass"]} /> 
      <article>
        <small>Due to this being a private codebase, I am unable to share a link to the code repository.</small>
        <br />
        <small>I will be uploading images and code snippets in the future to help give a better understanding of the app.</small>

        <p>I was hired as an Intern (2019) at InsideOut Development to work on recreating and updating their products into a new React codebase. It is still under my list of ongoing projects with InsideOut as a Full-stack Developer (2023) and is updated to reflect new products as they come out.</p>
        <p>InsideOut communities are really a collection of smaller projects in one place. These projects consisted of InsideOut Coaching, InsideOut Breakthroughs, GROW Coaching, and InsideOut Coaching - Digital Foundations.</p>
        <p>Aside from working in the codebase I also set up CI/CD with GitHub actions for our development and production servers.</p>
        <div>
          <p>Tasks that had an impact on all products were:</p>
          <ul>
            <li>Building an Account Registration system (Login, Register, and Forgot Password).</li>
            <li>Authorization checks via Salesforce for the email the user used to register to grant them the correct access rights.</li>
            <li>Building out Resource Libraries for each of the products.</li>
            <li>Creating a Participant Management system where admins can grant users access, change their info, deactivate their account, or add tags to their account for grouping and searching purposes.</li>
          </ul>
        </div>

        <p>InsideOut Coaching and GROW Coaching had the most logic of all the products with the Inclusion of their “Snapshot Surveys”. A Snapshot Survey is a survey the user can take every 3 or 6 months. Once the user takes their self-assessment, they request feedback from their peers through a customizable email sender. After the user receives feedback from 3 or more of their peers (for anonymity) they can view their completed Snapshot Report. The completed report consists of comparing the self-assessment rating to the average of the feedback ratings and a list of comments that their peers left.</p>

        <p>InsideOut Coaching - Digital Foundations is a short learning journey where there are 5 modules that unlock over time. The admin running the course sets up a session where they can select the start date and days, they want the next modules to unlock. Once a session is created the admin can then invite participants from their company into the session. An email reminder is sent on the sessions selected days.</p>

        <div>
          <p>The key takeaways I learned from building the InsideOut Development Communities are:</p>
          <ul>
            <li>Authentication/Authorization Processes (such as password encryption).</li>
            <li>Working with MySQL and Sequelize.</li>
            <li>Setting up CI/CD with GitHub Actions.</li>
            <li>Table joins and database management.</li>
            <li>Sending emails through AWS.</li>
            <li>Lots of JavaScript to map and aggregate survey data.</li>
          </ul>
        </div>
      </article>
      {/* <ProjectCarousel images={images} /> */}
    </main>
  )
}

export default IODCommunities
