import React, {Component} from 'react';
import './App.css';
import {MyProvider} from './context';
import A from './A'
import C from './C'

class App extends Component {
  render (){
    return (
      <MyProvider >
      
          <div style={{border:"1px solid black", padding: "10px", margin: "5px"}}>

            <A />
            <C />
          </div>  
         
      </MyProvider>
    );
  }
}
export default App;
