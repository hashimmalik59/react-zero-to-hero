import React from 'react'

// CSS
import "./App.css"

// Components
import Card from './components/Card'

const App = () => {
    return (
        <div>
            <Card
                photo="/flag.jpeg"
                name="Hashim Malik"
                bio="A good guy with a decent sense of humor but looks very skinny and also a beginner frontend developer with technology of ReactJS"
            />
        </div>
    )
}

export default App