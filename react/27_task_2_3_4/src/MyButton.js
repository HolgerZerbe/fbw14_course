import React from 'react'

export default function MyButton(props) {

    const myButtonStyle = {
        backgroundColor: "cornflowerblue",
        fontSize: "20px",
        padding: "4px"

    }

    return (
        <div>
            <button onClick = {() => {props.buttonClickHandler(props.txt)}} style={myButtonStyle}>{props.children}</button>
        </div>
    )
}
