import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    radios: [
      false, true, false, false
    ] 
  }

  selectRadio = (index) => {
    const newRadios = this.state.radios.map((element, elementIndex) => elementIndex===index? true : false)
    this.setState({
      radios:newRadios
    })
  }

  render (){
    return (
      <div>
        {this.state.radios.map((element, index) => 
        <div key={index}><label htmlFor={index} ><input id={index} name="radioButtons" type="radio" value={index} onChange={()=>this.selectRadio(index)} checked={element}/>Option {index+1}</label></div>)}
 
      </div>
    );
  }
}
export default App;
