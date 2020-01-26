import React, {Component} from 'react';
import './App.css';
import User from './User';

class App extends Component {

  state = {
    // users: null
    users: [
      {name:"paul", id:1},
      {name:"bob", id:2},
      {name:"rebecca", id:3},
      {name:"peter", id:4},
      {name:"sandra", id:5}
  ] 
  }

  delete = (id) => {
    const newUsers = this.state.users.filter(element => element.id !== id);
    this.setState({
      users: newUsers
    })
  }


  render (){
    return (
      <div>
        {this.state.users && this.state.users.map(element => <User id={element.id} name={element.name}key={element.id} deleteHandler={this.delete}/>)}

      </div>
    );
  }
}
export default App;
