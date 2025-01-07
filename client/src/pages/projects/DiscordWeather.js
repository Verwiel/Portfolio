import React from 'react'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'
import Technologies from '../../components/projects/Technologies'

const DiscordWeather = () => {
    return (
        <main className='project-details'>
            <SideBack route='/portfolio' />
            <ProjectHeader title='Discord Weatherbot' description='' />
            <Technologies languages={["Node"]} /> 
            <article>
                <div>
                <a style={{margin: '0 10px'}} className='hyper-link' href="https://github.com/Verwiel/discord_weather_bot" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>

                <p>The main reason for building this app was to expand my knowledge of Node.js in a direction that I can use for everyday life. The bot responds to two commands: astro and forecast.</p>
                <p>Astro will give the astronomical forecast (moon phases and sunrise/sunset) for the location entered while forecast gives the high and low temperatures for the next 3 days.</p>
                <p>I spend a lot of time on Discord so learning how to build bots for server commands me and my friends could use for grabbing data or checking statuses on various high scores was a lot of fun!</p>
            </article>
        </main>
    )
}

export default DiscordWeather
