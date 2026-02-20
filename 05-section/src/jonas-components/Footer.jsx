import React from 'react'

const Footer = () => {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <footer>
            <small className='bg' style={{
                color: isOpen ?
                    "green" : "red"
            }}>{new Date().toLocaleTimeString()} | {isOpen ? "Welcome we're open" : "Sorry, we're closed!"}</small>
            <button>Order Now</button>
        </footer>
    )
}

export default Footer