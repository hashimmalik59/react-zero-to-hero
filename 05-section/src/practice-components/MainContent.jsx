import React from 'react'
import UserCard from "./UserCard";

const MainContent = () => {
    return (
        <div>
            {/* {pizzaData} */}
            <h1>This is my Content</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing efacere consequuntur doloremque, eius sit.</p>
            <UserCard name="Hashim Malik" role="Frontend" bio="Good desgin sense and logical sense also." />
            <UserCard name="Sara Ali" role="UI" bio="A good creative and pixel-perfect designer." />
            <UserCard name="Hashim Ahmad" role="Backend" bio="Good logic and problem solving sense." />
        </div>
    )
}

export default MainContent