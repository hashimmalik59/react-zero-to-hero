import React from 'react'

const IsDrive = ({ name, age }) => {
    return (
        <div>
            {age >= 18 && (
                <pb style={{ color: "green" }}>
                    <strong>{name}</strong> can drive, due to his age is <strong>{age}</strong>
                </pb>
            )
            }
        </div>
    )
}

export default IsDrive