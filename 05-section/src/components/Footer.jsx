import React from 'react'

const Footer = () => {

    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <footer style={{ color: isOpen ? "green" : "red" }}>
            {isOpen ? "Welcome we're open" : "Sorry, we're closed!"}
        </footer>
    )
}

export default Footer