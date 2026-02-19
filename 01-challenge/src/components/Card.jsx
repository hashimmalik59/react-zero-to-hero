import React from 'react'

const Card = ({ photo, name, bio }) => {
    return (
        <div className='card'>
            <img src={photo} alt={name} />
            <div className='card-text'>
                <h1>{name}</h1>
                <p>{bio}</p>
                <div className='card-skill'>
                    <Skill skill="HTML" color="red" />
                    <Skill skill="CSS" color="green" />
                    <Skill skill="JavaScript" color="blue" />
                    <Skill skill="Firebase" color="yellow" />
                    <Skill skill="TailwindCSS" color="orange" />
                    <Skill skill="TypeScript" color="brown" />
                    <Skill skill="ReactJS" color="pink" />
                </div>
            </div>
        </div>
    )
}

const Skill = ({ skill, color }) => {
    return (
        <span style={{ backgroundColor: color }}>{skill}</span>
    )
}

export default Card