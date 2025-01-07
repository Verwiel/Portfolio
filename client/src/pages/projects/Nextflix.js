import React from 'react'
import ProjectHeader from '../../components/projects/ProjectHeader'
import SideBack from '../../components/navigation/SideBack'
import Technologies from '../../components/projects/Technologies'

const Nextflix = () => {
    return (
        <main className='project-details'>
            <SideBack route='/portfolio' />
            <ProjectHeader title='Nextflix' description='' />
            <Technologies languages={["Next", "GraphQL"]} /> 
            <article>
                <div>
                <a style={{margin: '0 10px'}} className='hyper-link' href="https://github.com/Verwiel/Nextflix" target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* <a style={{margin: '0 10px'}} className='hyper-link' href="https://wordle-clone-vbvg.onrender.com/" target="_blank" rel="noopener noreferrer">Deployed App</a> */}
                </div>

                <p>A clone of Netflix built with Next 14, GraphQL, Hasura, the YouTube API for videos, and Magic Link for authentication and authorization. The main purpose of this app is to search for videos and create and account if you want to save or like videos. </p>
                <div>
                <p>The key takeaways I learned from building the Nextflix are:</p>
                <ul>
                    <li>Using Next with GraphQL and Hasura</li>
                    <li>Another authentication flow via Magic Link</li>
                    <li>Continued familiarity with Next</li>
                </ul>
                </div>
            </article>
        </main>
    )
}

export default Nextflix