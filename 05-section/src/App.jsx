import React from 'react'

// const pizzaData = [
//     {
//         name: "Focaccia",
//         ingredients: "Bread with italian olive oil and rosemary",
//         price: 6,
//         photoName: "pizzas/focaccia.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Margherita",
//         ingredients: "Tomato and mozarella",
//         price: 10,
//         photoName: "pizzas/margherita.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Spinaci",
//         ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//         price: 12,
//         photoName: "pizzas/spinaci.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Funghi",
//         ingredients: "Tomato, mozarella, mushrooms, and onion",
//         price: 12,
//         photoName: "pizzas/funghi.jpg",
//         soldOut: false,
//     },
//     {
//         name: "Pizza Salamino",
//         ingredients: "Tomato, mozarella, and pepperoni",
//         price: 15,
//         photoName: "pizzas/salamino.jpg",
//         soldOut: true,
//     },
//     {
//         name: "Pizza Prosciutto",
//         ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//         price: 18,
//         photoName: "pizzas/prosciutto.jpg",
//         soldOut: false,
//     },
// ];

// components
// import Greeting from './components/Greeting'
// import StatusMessage from './components/StatusMessage'
// import Invoice from './components/Invoice'
// import Menu1 from './components/Menu1'
// import Bulb from './practice-components/Bulb'

// CSS
import "./App.css"

import Header from "./jonas-components/Header"
import Menu from "./jonas-components/Menu"
import Footer from './jonas-components/Footer'
import Ticket from './practice-components/Ticket'

function App() {
    return (
        <div className='container'>
            {/* <Pizza />
            <Greeting />
            <StatusMessage />
            <Invoice />
            <Menu1 /> */}
            {/* <Bulb status="on" /> */}
            <Ticket age={18} basePrice={100} />
            <Header />
            <Menu />
            <Footer />
        </div >
    )
}

export default App