import React from 'react'

const Pizza = ({ photo, name, ingredients, price }) => {

    return (
        <div className='pizza'>
            <img src={photo} alt={name} width={"100px"} />
            <div className='pizza-info'>
                <h1>{name}</h1>
                <p>{ingredients}</p>
                <span>{price + 3}</span>
            </div>
        </div>
    )
}

export default Pizza