import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
  text: "Hier wird Ihr Morsecode angezeigt"
  }

  
  onChangeHandler = (e) => {
    let result="";
    const alpha = "abcdefghijklmnopqrstuvwxyz0123456789 \n";
    const morse = ["· −", "− · · ·", "− · − ·", "− · ·", "·", "· · − ·", "− − ·", "· · · ·", "· ·", "· − − −", "− · −", "· − · ·", "− −", "− ·", "− − −", "· − − ·", "− − · −", "· − ·", "· · ·", "−", "· · −", "	· · · −", "	· − −", "− · · −", "− · − −", "	− − · ·", "− − − − −", "· − − − −", "· · − − −", "· · · − −", "· · · · −", "· · · · ·", "− · · · ·", "	− − · · ·", "− − − · ·", "− − − − ·", " ", "\n"];

    // Eingabefeld wird ausgelesen und auf Kleinschreibung umgewandelt
    let input = e.target.value.toLowerCase(); 

    // Eingabe wird gesplittet und jeder einzelne Buchstabe als Item in einen Array "inputArray" geschrieben
    let inputArray = input.split(''); 

    // inputarray wird durchmapt, dafür wird für jedes einzelne Item (Buchstabe) die Indexnummer im String 
    // alpha ermittelt und als Item in den Array inputIndexArray geschrieben
    let inputIndexArray = inputArray.map((element) => alpha.indexOf(element)); 


    // inputIndexArray wird durchlaufen und für jedes Item wird das entsprechende Item
    // aus dem Array morse herausgesucht und dem String result zugefügt
    for(let i = 0; i< inputIndexArray.length; i++) {
      result += "  "+morse[inputIndexArray[i]];
    }

    // result wird dem Key text im state zugeordnet und es wird neu gerendert 
    this.setState({text: result})
  }

  render() {


    return (
      <div className = "main">
        <h1 className = "headline">Translate to Morse</h1>
        <h3 className = "inputHeadline"> Input Message</h3>
        <textarea className="textareaField" rows="10" onChange={this.onChangeHandler}></textarea>

        <h3 className = "inputHeadline"> Output Message</h3>
        <textarea className="textareaField" rows="10" value={this.state.text} readOnly></textarea>
      </div>
    );
  }
}
export default App;
