import React from 'react'

export default function Post(props) {
    return (
        <div className="post"><img src={props.url} alt={props.url}></img>
        </div>
    )
}
