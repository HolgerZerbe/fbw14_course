import React from 'react'

export default function B(props) {
    return (
        <div>
            <div>{JSON.stringify(props)}</div>
            <div>{props.someProp} {props.someOtherProp}</div>
        </div>
    )
}
