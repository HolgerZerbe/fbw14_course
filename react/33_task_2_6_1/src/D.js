import React, { Component } from 'react';


export default class D extends Component {

    constructor(props) {
        super(props)

    }
    
    state = {product : null
    
    }
    

    static getDerivedStateFromProps(nextProps, 
        prevState 
        ) {
            console.log(`calling getDerivedStateFromProps with
            nextProps = ${JSON.stringify(nextProps)}
            prevState = ${JSON.stringify(prevState)}`);


        return { 
             product : Math.floor(Math.random()*10) * nextProps.randomnumber
        };
}

    render() {
        return (
            <div>
               {this.state.product} 
            </div>
        )
    }
}
