import React, { Component } from 'react'
import D from './D'
import E from './E'

export default class C extends Component {
    render() {
        return (
           
                    <div style={{border:"1px solid black", padding: "10px", margin: "5px"}}>
                        C
                       <D />
                       <E />
                    </div>
                
        )
    }
}
