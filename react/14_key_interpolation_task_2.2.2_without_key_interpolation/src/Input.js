import React, {Component} from 'react';
import './App.css';

class Input extends Component {

  state = {
  text:""
  }

  onChangeHandler = (e) => {
    this.setState({text: e.target.value})

    console.log(`Inputbox = ` + e.target.value)
  }

  render() {
    return (
      
        <div className = "inOutputField">
          <input type='text' onChange={this.onChangeHandler.bind(this)}></input>
          <input type='text' value = {this.state.text} readOnly></input>
        </div>
       
    );
  }
}
export default Input;