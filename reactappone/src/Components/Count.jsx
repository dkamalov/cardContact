import React, { Component } from 'react'

class Count extends Component {

    constructor(props){
        super(props);
        this.state = {number : props.number};
    }

    Increment = () => {

        this.setState({number : this.state.number + 1})
    }

    Decrement = () => {

        this.setState({number : this.state.number - 1})
        
    }
 
    render () {

        return (

            <div>
                <button onClick = {() => this.Increment()}> Increment </button>

                <h2>{this.state.number}</h2>
                
                <button onClick = {() => this.Decrement()}> Decrement </button>
            </div>

        ) ;

    }

}

export default Count;