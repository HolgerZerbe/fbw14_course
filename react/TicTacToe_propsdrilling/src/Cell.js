import React, { Component } from 'react'

export default class Cell extends Component {

setXOrO = (index) => {
    this.props.functionFromBoard(index)
    }

    render() {
        return (
            <div className="cell" style = {{backgroundColor: this.props.color[this.props.index]}} onClick={()=>{this.setXOrO(this.props.containIndex)}}>
                {this.props.contain}    
            </div>
        )
    }
}

