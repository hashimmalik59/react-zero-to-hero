import React from 'react'

const Ticket = ({ age, basePrice }) => {
    let finalPrice = 100;
    let discount = age < 18 ? basePrice / 2 : 0
    if (age >= 18) basePrice = finalPrice;
    else {
        // basePrice = basePrice / 2;
        basePrice /= 2;
    }

    return (
        <div>
            <p>Customer age: {age}</p>
            <p>Customer base price: {basePrice}$</p>
            <p>Ticket Price: {finalPrice}$</p>
            <p style={{ color: age < 18 ? "green" : "blue" }}>
                {age < 18 ? `Discount: ${discount = basePrice / 2}$`
                    : "No discount!"}
            </p>
        </div>
    )
}

export default Ticket