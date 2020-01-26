import React from 'react'

export default function Fruit(props) {

    return (
        <div className="fruit" style={{backgroundColor: props.background}}>
            {props.kindOfFruit}
        </div>
    )
}
