import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    x:0
  }


  // beim instanziieren von APP 
  // const App = new App()
  constructor(props) {
    super(props)
    console.log('1 - contructor: App wird konstruiert');
  }

  // sollen wir unseren state vor den nächsten render() verändern?
  // der return-Value ist der neue state
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('2 - getDerivedStateFromProps')
    return {...prevState, a:2, c:10}
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('3 -shouldComponentUpdate')
    return true;
  }
 
  render (){
    console.log('4 - render')
    return (
      <div>
        Hallo World {this.state.x}
      </div>
    );
  }
  
  
  componentDidUpdate(nextProps, prevState) {
    console.log('5 - componentDidUpdate')
  }

  componentDidMount(nextProps, prevState) {
    console.log('5 - componentDidMount')
  }
  
}

export default App;
