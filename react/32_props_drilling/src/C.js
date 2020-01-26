import React from 'react'

export default function C(props) {
    return (
        <div>
           C from C.js 
           <br />
           x from C = {props.x}
           <button onClick = {props.f}>Click me</button>
        </div>
    )
}
