import React from 'react'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'
import Technologies from '../../components/projects/Technologies'

const BeverageFinder = () => {
    return (
        <main className='project-details'>
            <SideBack route='/portfolio' />
            <ProjectHeader title='Beverage Finder' description='' />
            <Technologies languages={["Next"]} /> 
            <article>
                <div>
                <a style={{margin: '0 10px'}} className='hyper-link' href="https://github.com/Verwiel/Beverage-Finder" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a style={{margin: '0 10px'}} className='hyper-link' href="https://beverage-finder-seven.vercel.app/" target="_blank" rel="noopener noreferrer">Deployed App</a>
                </div>

                <p>This was my first project built with Next. The purpose of the app is to allow the browser to use your location to find nearby coffee shops. The app was built with Next, Airtable as a database, Foursquare API to find the coffee shops, Geolocation API to find the coordinates needed for Foursquare, and Unsplash for better looking images than those provided by Foursquare.</p>
                <p>Due to free API limitations the search functionality is currently slow, just give it a minute and it’ll populate the list! When you click on one of the coffee shops it will give you the option to Upvote it, this was added to learn full CRUD functionality with next.</p>
                <div>
                <p>Key Takeaways from building this app are:</p>
                <ul>
                    <li>How to code with Next vs React.</li>
                    <li>The advantages of Next over vanilla React.</li>
                    <li>Full CRUD functionality within Next.</li>
                    <li>How to use the geolocation feature with other APIs.</li>
                    <li>Styling with Tailwind CSS.</li>
                    <li>How to use Airtable as an easy database.</li>
                </ul>
                </div>
            </article>
        </main>
    )
}

export default BeverageFinder
