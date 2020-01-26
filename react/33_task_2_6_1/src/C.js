import React, { Component } from 'react'
import D from './D.js';


export default class C extends Component {
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
             product : Math.floor(Math.random()*10) * nextProps.randomNumber
        };
}



    render() {
        return (
            <div>
                {this.props.randomNumber}
                <hr />  
                {this.state.product}
                <D randomnumber = {this.state.product} greaterThan100HandlerFromC= {this.props.greaterThan100Handler}/>
            </div>
        )
    }
}
