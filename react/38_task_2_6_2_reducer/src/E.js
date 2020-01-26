import React, { Component } from 'react'
import {MyContext} from './context'

export default class E extends Component {
    render() {
        return (
            <MyContext.Consumer>
            

                {
                    (context) => (
                        <div style={{border:"1px solid black", padding: "10px", margin: "5px"}}>
                        E
                    
                         y = {context.y}
                        
                        <button style={{marginLeft:"15px"}} onClick ={()=>context.dispatch({type: "DECREMENT_Y"})}>Decrement Y</button>
                    </div>
                    )
                }
    
            </MyContext.Consumer>
        )
    }
}
