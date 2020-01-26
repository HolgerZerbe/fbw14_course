import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    color : "rgb(50,50,50)"
  }

changeBackground = () => {
  const randomColor = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
  return randomColor;
}

componentDidMount() {
  setInterval(() => {
    this.setState({color: this.changeBackground()})
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
