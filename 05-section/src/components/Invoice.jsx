import React from 'react'

const Invoice = () => {

    const price = 1000;
    const taxRate = 10;
    const discount = 50;

    return (
        <div>Total Bill: {(price + (price * taxRate)) - discount}</div>
    )
}

export default Invoice