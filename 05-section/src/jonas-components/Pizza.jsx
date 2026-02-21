import React from 'react'

const Pizza = ({ pizzaObj }) => {

    return (
        <>
            <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
                <img src={pizzaObj.photoName} alt={pizzaObj.name} width={"100px"} />
                <div className='pizza-info'>
                    <h1>{pizzaObj.name}</h1>
                    <p>{pizzaObj.ingredients}</p>
                    <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
                </div>
            </div >
        </>
    )
}

export default Pizza