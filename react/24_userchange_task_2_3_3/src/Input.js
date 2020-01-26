import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input className="input" name="input" type="text" autoFocus = {props.autFoc} value= {props.givenValue} 
            placeholder ="Hier Namen ändern" onChange = {(e) => props.inputListenerHandler(e)}></input>
        </div>
    )
}
