import React from 'react'

const Bulb = (props) => {
    const status = props.status;

    return (
        <div style={{
            backgroundColor: status === "on" ? "yellow" : "grey"
        }}> {status === "on" ? "Light is on" : "Light is off"}</div >
    )
}

export default Bulb