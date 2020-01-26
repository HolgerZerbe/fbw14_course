import React from 'react'

export default function Info(props) {

    return (


        <div className="info">
            {props.stateFromApp.winner!==null ? <h2>Winner : {props.stateFromApp.winner}</h2> : <h2>Next Player: {props.stateFromApp.currentPlayer}</h2>}
            {props.stateFromApp.winner==="X" || props.stateFromApp.winner==="O"? <h2>Congratulations!</h2> : null}
            {props.stateFromApp.winner!==null ? <button className="resetBtn" onClick={()=>{props.resetFromApp()}}>Restart Game</button> : null}
        </div>
    )
}
