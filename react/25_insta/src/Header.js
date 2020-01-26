import React from 'react'

export default function Header() {
    return (
        
    <div className="header">

        <div className="header-left"><img style={{margin: "13px 5px 0 0"}} src="./instagram.png" /><span> | </span><img style={{marginTop: "15px"}} src="./instagram_logo.png" /></div>
        <input type="text" placeholder="Search"></input>
        <div className="header-right">
        <img src="./compass.png"></img>
        <img src="./heart.png"></img>
        <img src="./user.png "></img>
        </div>

    </div>
      
    )
}
