import React, {Component} from 'react';
import './App.css';
import Fruit from './Fruit';
import FruitSF from './FruitSF';


class App extends Component {

state = {}

  render (){
    return (
      <div>
        <Fruit type = "Apfelsine"/>
        <Fruit type = "Khaki"/>
        <Fruit type = "Banane"/>
        <hr />
        <FruitSF type = "Limone"/>
        <FruitSF type = "Erdbeere"/>
        <FruitSF type = "Ananas"/>

      </div>
    );
  }
}
export default App;
