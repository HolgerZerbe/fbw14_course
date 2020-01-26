import React, {Component} from 'react';
import './App.css';
import Test from './Test'

class App extends Component {

  state ={
    x:0,
    showTest: true
  }

  incrementX =() => {
    this.setState({
      x: this.state.x +1
    })
  }

  toggleTest = () => {
    this.setState({
      showTest: !this.state.showTest
    })
  }

  render (){
    return (
      <div>
        <h1>Component Lifecycle</h1>
        {this.state.showTest && <Test x={this.state.x} />}
        x = {this.state.x}
        <div style={{margin: "20px auto"}}>
        <button style= {{display:"inlineBlock", margin: "0 10px"}} onClick = {this.incrementX}>Increment X</button>
        <button style= {{display:"inlineBlock", margin: "0 10px"}} onClick = {this.toggleTest}>show / unshow Test</button>
        </div>
      </div>
    );
  }
}
export default App;
