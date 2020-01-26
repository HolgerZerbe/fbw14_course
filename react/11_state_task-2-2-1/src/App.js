import React, {Component} from 'react';
import './App.css';
const color = ["yellow", "green", "blue", "cyan", "yellowgreen", "whitesmoke", "brown", "red","orangered", "pink"];
const color2 = ["orange", "lightgreen", "lightblue", "rosybrown", "goldenred", "darkred", "lightslategray", "black","orange", "grey"];

class App extends Component {
  
  state = {randomstringsArray:[]};

  
  componentDidMount() {
    
    
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ß,.;:-_=#+*/?';
    const randomnumber = () => {
      return(Math.floor(Math.random()*20)+1);
    }
    
    const randomstringFunc = (randomnumber) => {
      let singlestring = ""
      for (let i = 0; i<randomnumber; i++) {
        singlestring += letters.charAt(Math.floor(Math.random()*letters.length));
      }
      return singlestring;
    } 



    setInterval(()=>{
      let helpingStr = randomstringFunc(randomnumber());
      let helpingCol = color[Math.floor(Math.random()*10)];
      let helpingBack = color2[Math.floor(Math.random()*10)];

      this.setState({randomstringsArray: [...this.state.randomstringsArray, {str: helpingStr, col : helpingCol, back : helpingBack}]
    })},1000
  )
}

  
  
  
  
  
  render(){
    
    return (
      <div>
        {this.state.randomstringsArray.map(element => <div style={{color: element.col, backgroundColor:element.back}}>{element.str}</div>)}
      </div>
    );
  }
  
}
export default App;
