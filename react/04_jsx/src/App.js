import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render (){

const name = `Harry-Larry`;
const showHalloWorldTrue = true;
const showHalloWorldFalse = false;
const hwJsx = <h2>Hallo World als Konstante</h2>

// Aufgabe:
// Füge eine persönliche Begrüßung hinzu, z.B. in einem H2-Tag

// Wenn die aktuelle Zeit zwischen 05.00 und 11.59 . "Guten Morgen"
// Wenn die aktuelle Zeit zwischen 12.00 und 16.59 . "Guten Tag"
// Wenn die aktuelle Zeit zwischen 17.00 und 23.59 . "Guten Abend"
// Wenn die aktuelle Zeit zwischen 00.00 und 04.59 . "Gute Nacht"

// let hours = (new Date).getHours().toString();
// if (hours<10) {hours = "0" + hours};
// let  minutes =(new Date).getMinutes().toString();
// if (minutes<10) {minutes = "0" + minutes};
// const time = hours + minutes; 

// let morgen, tag, abend, nacht;

// if (time >= "0500" && time <= "1159") { morgen = true};
// if (time >= "1200" && time <= "1659") { tag = true};
// if (time >= "1700" && time <= "2359") { abend = true};
// if (time >= "0000" && time <= "0459") { nacht = true};


let hours = (new Date).getHours();

let morgen, tag, abend, nacht;

if (hours >= 5 && hours < 12) { morgen = true};
if (hours >= 12 && hours < 17) { tag = true};
if (hours >= 17 && hours < 24) { abend = true};
if (hours >= 0 && hours < 5) { nacht = true};


    return (
      <div>
        Hallo World<br />
        <h2>Hallo {name}</h2>
        <h2>Hallo {name.toUpperCase()}</h2>
        <h2>1 + 1 = {2}</h2>
        <h2>1 + 1 = {1+1}</h2>
        <h2>name.toUpperCase()+'-GERRY' = {name.toUpperCase()+'-GERRY'}</h2>
        <h2>{ <span>Hallo Welt im Span</span>}</h2>
        <h2>{ true ? <span>true ist true</span>: <span>True ist false ? gibt es nicht </span>}</h2>
        <h2>{showHalloWorldTrue ? <span>Hallo World</span> : null }</h2>
        <h2>{showHalloWorldFalse ? <span>Hallo World</span> : null }</h2>
        {hwJsx}
        <h2>{morgen ? <span>Guten Morgen!</span> : null }</h2>
        <h2>{tag ? <span>Guten Tag!</span> : null }</h2>
        <h2>{abend ? <span>Guten Abend!</span> : null }</h2>
        <h2>{nacht ? <span>Gute Nacht!</span> : null }</h2>

      </div>
    );
  }
}
export default App;
