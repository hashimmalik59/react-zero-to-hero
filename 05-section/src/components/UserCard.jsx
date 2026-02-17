import React from 'react'

const UserCard = ({ name, role, bio }) => {
    return (
        <div>
            <h2>{name}</h2>
            <span>{role} Developer</span>
            <p>{bio}</p>
        </div>
    )
}

export default UserCard