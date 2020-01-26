import React, {Component} from 'react';
import './App.css';

class App extends Component {

  backgroundColorArray = ["yellow", "orange", "red", "greenyellow", "green", "lightblue", "darkblue"];
  state = {
    color : this.backgroundColorArray[0]
  }

  counter= 0;
  additionswert = null;

componentDidMount() {
  setInterval(() => {

    if (this.counter===0) {
      this.additionswert=1;
    }
    if (this.counter===this.backgroundColorArray.length-1) {
      this.additionswert=-1;
    }
    
    this.counter += this.additionswert

    this.setState({color: this.backgroundColorArray[this.counter]})
	},1000)

}



  render (){
    return (
      <div className="div" style={{backgroundColor:this.state.color}}>
        Hallo World
      </div>
    );
  }
}
export default App;
