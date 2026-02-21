import React from 'react'

const Footer = () => {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    if (!isOpen) return <p style={{ color: "red" }}>Sorry we're close right now comeback at {openHour}:00</p>

    return (
        <footer>
            {/* <p className='bg' style={{
                color: isOpen ?
                    "green" : "red"
            }}>{new Date().toLocaleTimeString()} | {isOpen ? "Welcome we're open" : "Sorry, we're closed!"}</p> */}

            {/* {isOpen ? <strong style={{ color: "green" }}>We're Open until {closeHour}:00, order online from here.</strong> : <strong style={{ color: "red" }}>Sorry we're closed!, Our time is {openHour}:00 to {closeHour}:00</strong>} */}
            <Order
                openHour={openHour}
                closeHour={closeHour}
            />
        </footer>
    )
}

const Order = ({ openHour, closeHour }) => {
    console.log();
    return (
        <div className='order'>
            <button>Order Now</button>
            <p style={{ color: "green" }}>We're open! from {openHour}:00 to {closeHour}:00.</p>
        </div>
    )
}

export default Footer