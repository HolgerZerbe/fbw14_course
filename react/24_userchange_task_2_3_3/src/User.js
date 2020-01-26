import React from 'react'

export default function User(props) {
    return (
            <div className="user"><label htmlFor={props.id} ><input id={props.id} name="radioButtons" type="radio" value={props.id} onChange={()=> props.selectUserHandler(props.id)} checked={props.checked}/><span>{props.name}</span></label></div>
    )
}

