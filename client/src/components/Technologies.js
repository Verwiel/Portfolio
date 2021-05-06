import React from 'react'
import { technologiesData } from '../data/technologies'

const Technologies = () => {
	const technologiesMap = technologiesData.map(tech => (
		<img style={{height: '50px'}} src={tech.image} alt={tech.name} title={tech.name} key={tech.name} />
	))

	return (
		<div>
			<h2>Languages & tech I use</h2>
			{technologiesMap}
		</div>
	)
}

export default Technologies
