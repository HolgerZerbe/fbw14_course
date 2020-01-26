import React from 'react'

export default function User(props) {
    return (
        <div>
            {props.name} <button onClick={props.deleteHandler.bind(this, props.id)}>Remove</button>
        </div>
    )
}
