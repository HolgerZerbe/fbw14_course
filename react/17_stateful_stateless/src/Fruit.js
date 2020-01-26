import React from 'react'

function Fruit(props){
    return (
        <div>
            Ich bin eine {props.type}!
        </div>
    )
}

// ES6-Schreibweise als arrow-function

// const Fruit = (props) => {
//     return (
//         <div>
//             Ich bin eine {props.type}!
//         </div>
//     )
// }

export default Fruit;