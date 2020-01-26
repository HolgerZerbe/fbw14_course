import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render (){

    const h2Style = {
      color: "red",
      backgroundColor: "blue"
    } 
    return (
      <div>
        <h2 style={{color: "white", backgroundColor:"red"}}>CSS Way 1 im JSX(HTML)</h2>
        <h2 style={h2Style}>CSS Way 2 per Variable</h2>
        <h2 className="h2Style">CSS Way 3 per CSS-Class</h2>
        <h2 id="h2Style">CSS Way 4 per id</h2>
      </div>
    );
  }
}
export default App;
