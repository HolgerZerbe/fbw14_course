import React from 'react'

export default function TopPart() {
    return (
        <>
        <div className = "topPart">
          <div className= "topPartHead">
            <div className ="firstRoundPicCircle"><div className = "firstRoundPic"> <img src="./Dagobert.jpg" /> 
            </div></div>
          <div className ="topPartHeadRight">
            <div className = "username">
              <h1>Dagobert Duck</h1><img src = "instagram_checked.png"></img><button>Folgen</button>
            </div>
            <div className="aboData">
              <p><b>84,648</b> Beiträge</p>
              <p><b>185m</b> Abonnenten</p>
              <p><b>3</b> abonniert</p>
            </div>
              <h4>Dagobert Duck</h4>
              <p><a href = "https://de.wikipedia.org/wiki/Dagobert_Duck">Dagobert Duck</a>: Sein Leben und Wirken <a href="https://de.wikipedia.org/wiki/Onkel_Dagobert_%E2%80%93_Sein_Leben,_seine_Milliarden">und seine Milliarden.</a></p>
            </div>
          </div>
          <div className= "topPartGalery">
            <div className="roundPicCircle"><div className = "roundPic"> <img src="./Donald.jpeg" /> </div><h5>Donald is...</h5></div>
            <div className="roundPicCircle"><div className = "roundPic"> <img src="./Micky.jpeg" /> </div><h5>At the moment Micky...</h5></div>
          </div>
        </div>
        </>
    )
}
