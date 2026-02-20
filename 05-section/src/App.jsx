import React from 'react'

// Practice Components
// import Greeting from './components/Greeting'
// import StatusMessage from './components/StatusMessage'
// import Invoice from './components/Invoice'
// import Menu1 from './components/Menu1'
// import Bulb from './practice-components/Bulb'
// import Ticket from './practice-components/Ticket'
// import IsDrive from './practice-components/IsDrive'

// CSS
import "./App.css"
// Jonas Components
import Header from "./jonas-components/Header"
import Menu from "./jonas-components/Menu"
import Footer from './jonas-components/Footer'

function App() {
    return (
        <div className='container'>
            {/* <Pizza />
            <Greeting />
            <StatusMessage />
            <Invoice />
            <Menu1 /> */}
            {/* <Bulb status="on" /> */}
            {/* <Ticket age={17} basePrice={100} /> */}
            {/* <IsDrive name="Hashim" age={19} /> */}
            <Header />
            <Menu />
            <Footer />
        </div >
    )
}

export default App