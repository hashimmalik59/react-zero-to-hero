import React from 'react'

// components
import Pizza from './components/Pizza'
import Greeting from './components/Greeting'
import StatusMessage from './components/StatusMessage'
import Invoice from './components/Invoice'
import Menu from './components/Menu'

const App = () => {
    return (
        <div>
            <Pizza />
            <Greeting />
            <StatusMessage />
            <Invoice />
            <Menu />
        </div>
    )
}

export default App