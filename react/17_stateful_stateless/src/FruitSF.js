import React, { Component } from 'react'

class FruitSF extends Component {

    state = {
        color: "darkred",
        fontColor: "whitesmoke"
    }
    
    constructor(props) {
        super(props);
        this.state.useful = true;
    }

    changeColor = () => {
        const colors = ["darkred", "darkblue", "darkgreen", "goldenrod", "black"];
        this.setState({color : colors[Math.floor(Math.random()* colors.length)]})
    }

    render() {
        return (
            <div style = {{backgroundColor:this.state.color, color: this.state.fontColor}}>
                ich bin eine {this.props.type}
                <button onClick={this.changeColor}>Change Background-Color</button>
            </div>
        )
    }
}

export default FruitSF