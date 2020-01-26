import React, { Component } from 'react'

class Minicell extends Component {

    render() {
        return (
            <div className="minicell">
                {this.props.contain}     
            </div>
        )
    }
}

export default Minicell;
