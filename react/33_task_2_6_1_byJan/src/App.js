import React, {Component} from 'react';
import './App.css';
import B from './B.js';
import C from './C.js';

class App extends Component {

state = {
  randomNumberOfApp : null,
  isGreaterThan100: false
}

generateRandomNumber = () => {
  this.setState({
    randomNumberOfApp: Math.floor(Math.random()*10)
  })
}

greaterThan100 = (isIt) => {
    this.setState({isGreaterThan100:isIt})
  } 

// callMeWithParam = (p) => {
//   alert(" Hallo World");
//   alert('p = ' + p)
  
// }

// render (){
//   return (
//     <div>
//       Hallo World
//       <B callMeHandler={this.callMe} callMeWithParamHandler={this.callMeWithParam} />
//       x = {this.state.x}
//     </div>
//   );
// }
// }

  render (){
    return (
      <>
        <h1>
          App Component
        </h1>
        <button onClick = {this.generateRandomNumber}>Generate Random Number</button>

      <hr />
      <C randomNumber={this.state.randomNumberOfApp} greaterThan100= {this.greaterThan100} />
      <B isGreaterThan100={this.state.isGreaterThan100}/>
      </>
    );
  }
}
export default App;
