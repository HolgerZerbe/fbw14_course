import React from 'react'

export default function User(props) {
    return (
        <tr className = "row">
            <td>{props.elem.id}</td><td>{props.elem.name}</td><td><a href={"mailto:"+ props.elem.email}>{props.elem.email}</a></td>
            </tr>
    )
}
