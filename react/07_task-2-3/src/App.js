import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render (){

    const letters = "abcdefghijklmnop";
    const lettersArray = letters.split('');


    return (
      <>
        <div className = "header">header
        </div>
        <div className = "main">
        {lettersArray.map(element => <div className="box">{element}</div> )}

        </div>
      </>
    );
  }
}
export default App;
