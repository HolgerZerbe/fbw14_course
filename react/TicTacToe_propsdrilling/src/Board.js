import React from 'react'
import Cell from './Cell';


export default function Board(props) {
    return (
        <div className="board">
           {props.stateFromApp.xOrO.map((element, index) => <Cell key={index} color= {props.stateFromApp.cellBackground} index={index} contain={element} functionFromBoard ={props.functionFromApp} containIndex={index}/>)}      
        </div>
    )
}
