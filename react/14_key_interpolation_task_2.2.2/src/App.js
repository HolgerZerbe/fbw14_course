import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
          txtBox1:"",
          txtBox2:"",          
          txtBox3:"",          
          txtBox4:"",          
          txtBox5:""          
    }

    onChangeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

  render() {
    return (
      <div className="main">

        <div className = "inOutputField">
          <input type='text' name ="txtBox1" onChange={this.onChangeHandler}></input>
          <input type='text' value = {this.state.txtBox1} readOnly></input>
        </div>
        <div className = "inOutputField">
          <input type='text' name ="txtBox2" onChange={this.onChangeHandler}></input>
          <input type='text' value = {this.state.txtBox2} readOnly></input>
        </div>
        <div className = "inOutputField">
          <input type='text' name ="txtBox3" onChange={this.onChangeHandler}></input>
          <input type='text' value = {this.state.txtBox3} readOnly></input>
        </div>
        <div className = "inOutputField">
          <input type='text' name ="txtBox4" onChange={this.onChangeHandler}></input>
          <input type='text' value = {this.state.txtBox4} readOnly></input>
        </div>
        <div className = "inOutputField">
          <input type='text' name ="txtBox5" onChange={this.onChangeHandler}></input>
          <input type='text' value = {this.state.txtBox5} readOnly></input>
        </div>

      </div>
    );
  }
}
export default App;
