import React, { Component } from 'react';


export default class D extends Component {

    lastReceivedRandomProduct = -1;
    randomNumberOfD = 0;
    product = 0;

    shouldComponentUpdate(nextProps, nextState ) {
        if((nextProps.randomProduct !== this.lastReceivedRandomProduct) || this.lastReceivedRandomProduct === -1) {
            this.lastReceivedRandomProduct = nextProps.randomProduct;
            this.randomNumberOfD = Math.floor(Math.random()*10);
            this.product = this.randomNumberOfD * this.lastReceivedRandomProduct
            return true;
        }
        return false;
        }
      
    componentDidUpdate(){ 
    if (this.product>100) {
        this.props.greaterThan100(true)
    } else {
        this.props.greaterThan100(false)
    }
    }   
    
    render() {
        return (
            <div>
               D = {this.lastReceivedRandomProduct} x {this.randomNumberOfD} = {this.product}
            </div>
        )
    }
}
