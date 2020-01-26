import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Start from './components/Start';
import Products from './components/Products';
import Productdetails from './components/Productdetails';
import NotFound from './components/NotFound';


import './App.css';

class App extends Component {
  render (){
    return (
      <Router>
        <div>
        <div>
          <Link to="/">Start</Link>{' | '} 
          <Link to="/products">Products</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/productdetails/:id" component={Productdetails} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
