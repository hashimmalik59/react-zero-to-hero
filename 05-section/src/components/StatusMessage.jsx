import React from 'react'

const StatusMessage = () => {
    const status = "success";
    const isSucces = status === "success";

    return (
        <h1 style={{ color: isSucces ? "green" : "red" }}>
            Status: {status}
        </h1>
    )
}

export default StatusMessage