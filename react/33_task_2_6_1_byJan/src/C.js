import React, { Component } from 'react'
import D from './D.js';


export default class C extends Component {

    lastReceivedRandomNumber = 0;
    randomNumberOfC = 0;
    product = 0;

    shouldComponentUpdate(nextProps, nextState ) {
            this.lastReceivedRandomNumber = nextProps.randomNumber;
            this.randomNumberOfC = Math.floor(Math.random()*10);
            this.product = this.randomNumberOfC * this.lastReceivedRandomNumber
        return true;
}



    render() {
        return (
            <div>
                C = {this.lastReceivedRandomNumber} x {this.randomNumberOfC} = {this.product}
               <D randomProduct={this.product} greaterThan100 = {this.props.greaterThan100}/>
            </div>
        )
    }
}
