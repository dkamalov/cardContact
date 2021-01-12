import React, { Component } from "react"
import PropTypes from 'prop-types'


class Card extends Component {
    render() {
        return <h1>
            <center>
                    Name: { this.props.name } Mobile: {this.props.mobile } 
                    Work: { this.props.work } Email: { this.props.email }     
            </center>
        </h1>
    } 
}

Card.propTypes = {
    name: PropTypes.string.isRequired, mobile: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired, email: PropTypes.string.isRequired,
}

export default Card;