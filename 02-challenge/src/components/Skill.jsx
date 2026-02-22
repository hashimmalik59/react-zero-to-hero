import React from 'react'

const Skill = ({ skill, bgColor, level }) => {
    return (
        <>
            <span className="skill" style={{ backgroundColor: bgColor }}>{skill} {level}</span >
        </>
    )
}

export default Skill