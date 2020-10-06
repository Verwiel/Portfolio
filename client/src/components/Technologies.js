import React from 'react'
import { technologiesData } from '../data/technologies'

const Technologies = () => {
	// each will be an image with a hover title & alt
	const technologiesMap = technologiesData.map(tech => (
		<img style={{width: '100px'}} src={tech.image} alt={tech.name} title={tech.name} key={tech.name} />
	))

	return (
		<div>
			<h2>Technologies</h2>
			{technologiesMap}
		</div>
	)
}

export default Technologies
