import React, {Component} from 'react';
import './App.css';
import Fruit from './Fruit';


class App extends Component {
  
  state = {buttonText: "Randomize Fruit"};

  color = ['red', 'blue', 'green', 'black', 'yellow', 'pink', 'fuchsia', 'grey']
  fruits = ['Apple', 'Banana', 'Kiwi', 'Orange', 'Strawberry', 'Mango', 'Pineapple', 'Pear']

  changecolor = () => {
      let newButtonText=""
      for (let i=0; i<this.state.buttonText.length; i++) {
        if (Math.random()>0.5) {
              newButtonText += this.state.buttonText[i].toUpperCase();
        } else {
          newButtonText += this.state.buttonText[i].toLowerCase();
        }
      }
      this.setState({buttonText: newButtonText});
  }
  
  render (){
    

    return (
      <>
      <Fruit kindOfFruit={this.fruits[Math.floor(Math.random()*this.fruits.length)]} background={this.color[Math.floor(Math.random()*this.color.length)]}/>
      <Fruit kindOfFruit={this.fruits[Math.floor(Math.random()*this.fruits.length)]} background={this.color[Math.floor(Math.random()*this.color.length)]}/>
      <Fruit kindOfFruit={this.fruits[Math.floor(Math.random()*this.fruits.length)]} background={this.color[Math.floor(Math.random()*this.color.length)]}/>
      <hr />
      <button className = "btn" onClick={this.changecolor}>{this.state.buttonText}</button>
      </>
    );
  }
}
export default App;
