import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    greeting1: 'Hallo World as greeting1'
  }
  constructor () {
    super();
    this.state.greeting2 = "Hallo World from Constructor"
    this.state.numbers = [1,2,3,4,5,6]
  }
  
// App hat fertig geladen

componentDidMount() {
  // Nach dem Fertigladen der App, erstelle einen Timer
  // der nach 2 Sekunden den State updatet
  setTimeout(
    () => {

      this.setState({greeting1 : "Changed Hallo World as greeting1",
                     greeting2 : "Changed Hallo World from Constructor"
    })
    },
    2000
  )
  setTimeout(
    () => {

      this.setState({
                     numbers : [...this.state.numbers, 7]
    })
    },
    4000
  )
}



  render (){
    return (
      <div>
        {this.state.greeting1}
        <br></br>
        {this.state.greeting2}
        <br></br>
        <ul>
        {this.state.numbers.map(element => <li>{element}</li>)}
        </ul>
      </div>
    );
  }
}
export default App;
