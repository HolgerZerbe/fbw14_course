import React, {Component} from 'react';
import './App.css';


class App extends Component {
  colorArray = ["green", "orange", "red", "yellow", "purple", "gray", "olive", "cyan", "yellowgreen", "darkblue", "brown"];
  lastInsertId= 6;

state = {
  fruits : [
    {name: 'apple', color : 'green', id: 1},
    {name: 'apple', color : 'red', id:2},
    {name: 'pineapple', color : 'green', id:3},
    {name: 'lemon', color : 'yellow', id:4},
    {name: 'orange', color : 'orange', id:5},
    {name: 'mango', color : 'orange', id: 6}
    ],
    newFruitName:""
}

onChangeTextHandler=(e) => {
  this.setState({
    [e.target.name] : e.target.value
  });
}
    addFruit =() =>{
      if(this.state.newFruitName==="") {
        alert(`Du Flasche musst was eingeben`);
        return
      }
    const newFruits = [...this.state.fruits];
    this.lastInsertId++;

    newFruits.unshift({
      name: this.state.newFruitName,
      color : this.colorArray[Math.floor(Math.random() * this.colorArray.length)],
      id : this.lastInsertId
    })
    
    this.setState({
      fruits: newFruits,
      newFruitName:""
    })

    
  }
      showId=(id) => {
        alert(id)
      }

render (){

  return (
    <div>
        <h2>Some nice fruits</h2>

        <input type="text" name="newFruitName" onChange= {this.onChangeTextHandler} placeholder="new Fruit here" value={this.state.newFruitName}></input>
        <button onClick={this.addFruit}>Add Fruit</button>

        <table>
          <thead>
            <tr style={{textAlign:"left"}}>
              <td>Type</td>
              <td>Color</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
          {
            this.state.fruits.map(element => <tr key={element.id} style = {{backgroundColor: element.color}}><td>{element.name}</td><td>{element.color}</td><td><button onClick={this.showId.bind(this, element.id)}>Show Id</button></td></tr>)
          }
          </tbody>
        </table>
       
      </div>
    );
  }
}
export default App;
