import React from 'react'

const Pizza = (props) => {
    const stock = 0;

    return (
        <div className='pizza'>
            <img src={props.photo} alt={props.name} width={"100px"} />
            <div className='pizza-info'>
                <h1>{props.name}</h1>
                <p>{props.ingredients}</p>
                <span>{props.price + 3}</span>
                <h1 style={{ color: stock ? "#000" : "red" }}>{stock ? `Left: ${stock}` : "Out of Stock"}</h1>
            </div>
        </div>
    )
}

export default Pizza