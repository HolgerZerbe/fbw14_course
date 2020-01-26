import React, {Component} from 'react';
import './App.css';
import UserTable from './Usertable'

class App extends Component {

  state =  { 
    loading: true,
    users: [ 
            {Id:1, username: "Bob", email: "bob@gmail.com"}, 
            {Id:2, username: "Pete", email: "pete@gmail.com"},
            {Id:3, username: "Sara", email: "sara@gmail.com"}
          ]
  }

  componentDidMount() {
    setTimeout (
      () => {
        this.setState({loading : false}) ;
      }, 
      3000
   )
  }

  render (){
    return (
      <div>
        <UserTable users={this.state.users} loading={this.state.loading}/>
      </div>
    );
  }
}
export default App;
// 1. Create a new React web app “task-2-8-2“
// 2. In the App‘s state, add two variables:
// 1. “loading“ which is initally set to true
// 2. “users“ which is an array and consists of the
// following user information
// Id:1, username: ‘Bob‘, email: ‘bob@gmail.com‘
// Id:2, username: ‘Pete‘, email: ‘pete@gmail.com‘
// Id:3, username: ‘Sara, email: ‘sara@gmail.com‘
// 3. Implement the following behaviour: 3 seconds
// after the App-component has mounted, loading
// must be set to false.
// 4. Create a new stateless component UserTable.
// 5. From App, pass state.users down to UserTable via
// props.
// 6. In UserTable, create a table that display the user
// information.
// 7. From App, also pass state.loading down to UserTable.
// 8. Create an Higher Order Component
// “UserTableWrapper“ that checks if loading is true or
// false. If true, then a div must be returned that say
// “Loading...“. Otherwise, show UserTable.