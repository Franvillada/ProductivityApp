import React from 'react'

const Idea = ({data}) => (
    <div className="idea-container">
        <form className={ (data.length == 0) ? "none nueva-idea" : "nueva-idea"}>
            <input type="text"></input>
            <button type="submit" className="nuevo-proyecto">AGREGAR</button>
        </form>
        
        {data.map((ideas) => (
            <div key={ideas.id} className="idea">
                <p>{ideas.description}</p>
                <p>A PROYECTO</p>
            </div>
        ))}
    </div>
)

export default Idea