import React, {Component} from 'react';
import './App.css';

class App extends Component {

state = {
  users: []
}

remove = (id) => {
  const newUsers = this.state.users.filter(element => element.id!==id);
  console.log(newUsers)
  this.setState({users: newUsers})
}

async componentDidMount() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const obj = await result.json();

    console.log(obj);
    this.setState({
      users: obj
    })
  }
  catch(e) {
    console.log(e)
  }
}

  render (){
    return (
      <div>
        <table>
          <thead>
            <tr><td>id</td><td>name</td><td>id</td><td></td></tr>
          </thead>
          <tbody>
        {this.state.users.map(element => <tr key = {element.id}><td>{element.id}</td><td>{element.name}</td><td>{element.email}</td><td><button onClick={() =>this.remove(element.id)} >Remove</button></td></tr>)}
        </tbody>
        </table>
      </div>
    );
  }
}
export default App;
