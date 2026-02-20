import React from 'react'

const Footer = () => {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    if (!isOpen) return <small style={{ color: "red" }}>Sorry we're close right now comeback at {openHour}:00</small>

    return (
        <footer>
            <button>Order Now</button>
            {/* <small className='bg' style={{
                color: isOpen ?
                    "green" : "red"
            }}>{new Date().toLocaleTimeString()} | {isOpen ? "Welcome we're open" : "Sorry, we're closed!"}</small> */}

            {/* {isOpen ? <strong style={{ color: "green" }}>We're Open until {closeHour}:00, order online from here.</strong> : <strong style={{ color: "red" }}>Sorry we're closed!, Our time is {openHour}:00 to {closeHour}:00</strong>} */}

            <small style={{ color: "green" }}>We're open! Come and visit us or order online</small>
        </footer>
    )
}

export default Footer