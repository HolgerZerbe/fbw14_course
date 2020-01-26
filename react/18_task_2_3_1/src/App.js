import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import RightSidebar from './RightSidebar';
import Main from './Main'

class App extends Component {
  render (){
    return (
      <div className="bodyDiv">
        <Header />
        <div className = "mainSide">
          <Main />
          <RightSidebar />
          </div> 
      </div>
    );
  }
}
export default App;
