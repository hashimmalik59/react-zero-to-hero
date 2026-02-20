import React from 'react'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

import Pizza from "./Pizza"

const Menu = () => {
    return <main className='menu'>
        <h1>Our Menu</h1>

        <div>
            {pizzaData.map(item => (
                <Pizza
                    photo={item.photoName}
                    name={item.name}
                    ingredients={item.ingredients}
                    price={item.price}
                />
            ))}
        </div>

        {/* <Pizza
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
        /> */}
    </main>
}

export default Menu