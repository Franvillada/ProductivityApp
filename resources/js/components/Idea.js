import React from 'react'

const Idea = ({data}) => (
    <div>
        {data.map((ideas) => (
            <div key={ideas.id}>
                <p>{ideas.description}</p>
            </div>
        ))}
    </div>
)

export default Idea