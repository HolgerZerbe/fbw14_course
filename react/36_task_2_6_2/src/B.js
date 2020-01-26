import React, { Component } from 'react'
import {MyContext} from './context'

export default class B extends Component {
    render() {
        return (
                <MyContext.Consumer>
            

                {
                    (context) => (
                        <div style={{border:"1px solid black", padding: "10px", margin: "5px"}}>
                        B
                         x = {context.state.x}
                        <button style={{marginLeft:"15px"}} onClick ={context.incrementX}>Increment X</button>
                        <button style={{marginLeft:"15px"}} onClick ={context.decrementX}>Decrement X</button>
                    </div>
                    )
                }
    
            </MyContext.Consumer>
        )
    }
}
