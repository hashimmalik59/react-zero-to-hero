import React from 'react'

const Pizza = ({ pizzaObj }) => {

    return (
        <>
            <div className='pizza'>
                <img src={pizzaObj.photoName} alt={pizzaObj.name} width={"100px"} />
                <div className='pizza-info'>
                    <h1>{pizzaObj.name}</h1>
                    <p>{pizzaObj.ingredients}</p>
                    <span>{pizzaObj.price + 3}</span>
                    <span>{pizzaObj.soldOut}</span>
                </div>
            </div>
        </>
    )
}

export default Pizza