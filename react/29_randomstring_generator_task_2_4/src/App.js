import React, {Component} from 'react';
import './App.css';
import RandomStringGenerator from './RandomStringGenerator'

class App extends Component {

  state = {randomStringLength : [4, 5,6]}
  
  newStringLength =() => {
    const exampleArray = [4,5,6];
    const newStringLengthArray = [];
    for (let i = 0; i < this.state.randomStringLength.length; i++) {
      newStringLengthArray.push(exampleArray[Math.floor(Math.random()*3)])
    }
    console.log(newStringLengthArray)
    this.setState({randomStringLength: newStringLengthArray})

  }

    render (){
    return (
      <div>
        <button onClick={this.newStringLength}>Generate New Random String Length</button>

        {this.state.randomStringLength && this.state.randomStringLength.map((element, index) => 
        <RandomStringGenerator key = {index} stringLength={element} />
        )}
        
      </div>
    );
  }
}
export default App;
