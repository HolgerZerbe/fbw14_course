import React from 'react'

export default function Productdetails(props) {
    return (
        <div>
            Product Details of {props.match.params.id}
        </div>
    )
}
