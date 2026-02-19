import React from 'react'

import Pizza from "./Pizza"

const Menu = () => {
    return <main className='menu'>
        <h1>Our Menu</h1>
        <Pizza
            photo="/pizzas/focaccia.jpg"
            name="Pizza Focaccia"
            ingredients="Bread with italian olive oil and rosemary"
            price={10}
        />
        <Pizza
            photo="pizzas/margherita.jpg"
            name="Pizza Margerita"
            ingredients="Tomato and mozarella"
            price={10}
        />
        <Pizza
            photo="pizzas/spinaci.jpg"
            name="Pizza Spinachi"
            ingredients="Tomato, mozarella, spinach, and ricotta cheese"
            price={12}
        />
        <Pizza
            photo="pizzas/funghi.jpg"
            name="Pizza Funghi"
            ingredients="Tomato, mozarella, mushrooms, and onion"
            price={12}
        />
        <Pizza
            photo="pizzas/salamino.jpg"
            name="Pizza Salamino"
            ingredients="Tomato, mozarella, and pepperoni"
            price={15}
        />
        <Pizza
            photo="pizzas/prosciutto.jpg"
            name="Pizza Prosciutto"
            ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
            price={18}
        />
    </main>
}

export default Menu