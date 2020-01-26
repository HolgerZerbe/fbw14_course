import React, { Component } from 'react'
import B from './B';
import D from './D';

export default class A extends Component {
    render() {
        return (
            <div style={{border:"1px solid black", padding: "10px", margin: "5px"}}>
                A
                <B />
                <D />
            </div>
        )
    }
}
