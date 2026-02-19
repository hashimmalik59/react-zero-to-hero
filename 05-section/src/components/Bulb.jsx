import React from 'react'

const Bulb = () => {
    const status = "on";

    return (
        <div style={{
            backgroundColor: status === "on" ? "yellow" : "grey"
        }}> {status === "on" ? "Light is on" : "Light is off"}</div >
    )
}

export default Bulb