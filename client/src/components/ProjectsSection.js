import React from 'react'

const ProjectsSection = () => {
  const testData = [
    {
      "name": "Test Project 1",
      "company": "InsideOut Development",
      "title": "- Application Developer",
      "description": "This is a placeholder project to test card Layout. It will be a short description of why I made the project and its use case.",
      "technologies": [
        "React",
        "Node",
        "Express",
        "MySQL"
      ],
      "createdAt": "2020-01-01",
      "isPrivate": true,
      "repoLink": "#1",
      "image": "XYZ"
    },
    {
      "name": "Test Project 2",
      "company": "Personal Project",
      "title": "",
      "description": "This is a placeholder project to test card Layout. It will be a short description of why I made the project and its use case.",
      "technologies": [
        "React",
        "Node",
        "Express",
        "MySQL",
        "Longer Techs",
        "JavaScript",
        "TypeScript",
        "GraphQL"
      ],
      "createdAt": "2020-01-01",
      "repoLink": "#1",
      "image": "XYZ"
    },
    {
      "name": "Test Project 3",
      "company": "InsideOut Development",
      "title": "- Application Developer",
      "description": "This is a placeholder project to test card Layout. It will be a short description of why I made the project and its use case. This one is to see how even longer text effects.",
      "technologies": [
        "React",
        "Node",
        "Express",
        "MySQL"
      ],
      "createdAt": "2020-01-01",
      "repoLink": "#1",
      "image": "XYZ"
    },
  ]

  const projectMap = testData.map((project, i) => {
    const techMap = project.technologies.map(tech => (
      <li key={tech}>
        {tech}
      </li>
    ))
    return (
      <li key={i} className='home-project-container'>
        <section className='home-project-container-text'>
          <h5>{project.name}</h5>
          <span>
            <strong>{project.company} </strong>{project.title}
          </span>

          <p>{project.description}</p>
          {!project.isPrivate &&
            <a href={project.repoLink}>Check it out on Github</a>
          }
        </section>

        {/* Apply project.image as background-image */}
        <section className='home-project-container-graphic'>
          <ul className='home-project-container-graphic-tech'>
            {techMap}
          </ul>

        </section>
      </li>
    )
  })


  return (
    <article id='projects' className='home-projects'>
      <h2>Projects</h2>
      <section>
        <ul className='home-projects-map'>
          {projectMap}
        </ul>
      </section>
      <button className='btn-green'>See more projects</button>
    </article>
  )
}

export default ProjectsSection