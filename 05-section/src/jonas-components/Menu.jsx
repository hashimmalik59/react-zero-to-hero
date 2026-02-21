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

    const pizza = pizzaData;
    // const pizza = []; // 0

    const numOfPizzas = pizza.length;

    return <>
        <main className='menu'>
            <h1>Our Menu</h1>
            {numOfPizzas > 0 &&
                <small>Authentic Italian cuisine. 6 creative dishes to choose from, All from our stone oven, all organic, all delicious.</small>
            }

            {numOfPizzas > 0 ?
                <div className='main-menu'>
                    {pizzaData.map(item => (
                        <Pizza
                            pizzaObj={item}
                            key={item.name}
                        />
                    ))}
                </div>
                : <p className='message'>We're fixing this, please comeback later.</p>
            }

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
        </main >
    </>
}

export default Menu