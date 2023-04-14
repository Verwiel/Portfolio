import React from 'react'
import { technologiesData } from '../../data/technologies'

const Technologies = ({ languages }) => {
	const technologiesMap = technologiesData.filter(tech => languages.indexOf(tech.name) >= 0).map(tech => (
		<img style={{height: '50px', margin: '10px'}} src={tech.image} alt={tech.name} title={tech.name} key={tech.name} />
	))

	return (
		<div>
			{technologiesMap}
		</div>
	)
}

export default Technologies
