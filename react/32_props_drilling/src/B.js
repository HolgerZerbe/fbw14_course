import React from 'react'
import C from './C';

export default function B(props) {
    return (
        <div>
            B from B.js
            <br />
            {/* x from B = {props.x} */}
            <C x = {props.x} f={props.f}/>
        </div>
    )
}
