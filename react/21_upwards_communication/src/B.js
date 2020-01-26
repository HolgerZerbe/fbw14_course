import React from 'react'

export default function B(props) {
    return (
        <div>
            
            B from B.js

            <button onClick={props.callMeHandler}>Call CallMe</button>

            <button onClick={props.callMeWithParamHandler.bind(this, 7)}>Call CallMeWithParam(7)-bind</button>

            <button onClick={() =>          props.callMeWithParamHandler(7)}>Call CallMeWithParam(7) - arrow</button>

        </div>
    )
}
