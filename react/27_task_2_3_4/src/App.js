import React, {Component} from 'react';
import './App.css';
import MyButton from './MyButton';

class App extends Component {


  buttonClick = (text) => {
    alert(text)
}


  render (){
    return (
      <div>
        <MyButton buttonClickHandler={this.buttonClick} txt="Hallo Word">Hallo World</MyButton>
        <MyButton buttonClickHandler={this.buttonClick} txt="Beach Life! Me gusta"><img src="beach.jpeg"></img></MyButton>
      </div>
    );
  }
}
export default App;
