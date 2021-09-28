import React from 'react'
import { technologiesData } from '../data/technologies'

const Technologies = () => {
	const technologiesMap = technologiesData.map(tech => (
		<img style={{height: '50px'}} src={tech.image} alt={tech.name} title={tech.name} key={tech.name} />
	))

	return (
		<div>
			<h3>Languages & tech I use</h3>
			{technologiesMap}
		</div>
	)
}

export default Technologies
