import React from 'react'

const Project = ({data}) => (
    <div className="content-container">
        {data.map((project) => (
            <div key={project.id}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
        ))}
    </div>
)

export default Project