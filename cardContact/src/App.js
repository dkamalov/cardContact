import React, { Component } from 'react'
import './App.css'
import Card from './Components/Card.jsx'
import Count from './Components/Count.jsx'


class App extends Component {
    
    render() {
        return (
            <div>
                <Card name= "Jill Valentine "  mobile = " 646-510-5360 " work = " 917-555-5532 " email = " jvalentine@gmail.com"/>

                <Card name= "Chris Redfield " mobile = " 347-925-6234 " work = " 917-123-4567 " mail = " credfield@gmail.com"/>

                <Card name= "Mario Mario " mobile = " 718-689-2512 " work = " 917-890-1234 " email = " mmario@gmail.com"/>

                <Card name= "Luigi Mario "  mobile = " 718-621-6953 " work = " 917-567-8901 " email = " lmario@gmail.com"/>

                <Card name= "Pac Man " mobile = " 646-510-5569 " work = " 917-234-5678 " email = " pman@gmail.com"/>

                <Count number = {0} />

            </div>
        )
    }
}

export default App