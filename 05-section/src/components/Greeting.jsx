import React from 'react'

const Greeting = () => {
    const isLoggedIn = true;
    return (
        <div>
            {isLoggedIn ? <h1>Welcome back</h1> : <h1>Login Please</h1>
            }
        </div >
    )
}

export default Greeting