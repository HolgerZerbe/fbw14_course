import React, {Component} from 'react';
import './App.css';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Start from './components/Start'
import Users from './components/Users';
import Userdetails from './components/Userdetails';


class App extends Component {
  render (){
    return (
      <Router>
     
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/userdetails/:id" component={Userdetails} />
      </Switch>
    </Router>

    );
  }
}
export default App;
