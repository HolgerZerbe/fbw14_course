import React, { Component } from 'react'
import {MyContext} from './context'
export default class D extends Component {
    render() {
        return (
                            <MyContext.Consumer>
                {
                    (context) => (
                    <div style={{border:"1px solid black", padding: "10px", margin: "5px"}}>
                        D
                        context = {JSON.stringify(context)
                         }
                        
                    </div>
                    )
                }
            </MyContext.Consumer>

        )
    }
}
