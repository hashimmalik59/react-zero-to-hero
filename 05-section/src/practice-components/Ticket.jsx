import React from 'react'

const Ticket = ({ age, basePrice }) => {
    let finalPrice = 100;
    let discount = age < 18 ? basePrice / 2 : 0;

    return (
        <div>
            <p>Customer age: {age}</p>
            <p>Customer base price: {basePrice}$</p>
            <p style={{ color: age < 18 ? "green" : "blue" }}>Discount: {discount}$</p>
            <p>Final Price: {finalPrice}$</p>
        </div>
    )
}

export default Ticket