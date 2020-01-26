import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render (){

    const hallo = <div>Hallo JSX</div>
    const list2 = <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </ul>;
    const someItems =[<li>1</li>,<li>2</li>,<li>3</li>];
    someItems.push(<li>4</li>);
    const someNumbers = [ 1,2,3,4,5,6,7,8,9];
    const users = [
      {money: 150, name: "Paul", country: "Germany", born: 1995},
      {money: -50, name: "Sarah", country: "UK", born: 1990},
      {money: 20, name: "Bob", country: "Spain", born: 1988},
      {money: 550, name: "Hans", country: "Germany", born: 1982},
      {money: 5, name: "Julia", country: "Germany", born: 1972},
      {money: 1040, name: "Carl", country: "Denmark", born: 1999},
      {money: -500, name: "Peter", country: "Germany", born: 1991},
      {money: 0, name: "Julia", country: "Ireland", born: 1980}
    ]

    const germanUsers = users.filter(user => user.country==="Germany");
    const notGermanUsers = [];
        for (let elem of users) {
          if (elem.country !=="Germany") {
            notGermanUsers.push(elem);
          }
    }
    console.log(notGermanUsers);

    return (
      <div>
        {hallo}

        <h2>List</h2>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        <h2>List 2</h2>
        {list2}

        <h2>List 3</h2>
        <ul>
          {[<li>1</li>,<li>2</li>,<li>3</li>]}
        </ul>

        <h2>List 4</h2>
        <ul>
          {someItems}
        </ul>

        <h2>List 5</h2>
        <ul>
          {someItems.map(element => element)}
        </ul>

        <h2>List 6</h2>
        <ul>
          {someNumbers.map(number => <li>{number}</li>)}
        </ul>


        <h2>Tabelle Alle Nutzer</h2>
        <table>
          <tr>
            <th>Name</th><th>Finanzstatus</th><th>Land</th><th>Geburtsjahr</th>
          </tr>
            {users.map(user => <tr><td>{user.name}</td><td>{user.money}</td><td>{user.country}</td><td>{user.born}</td></tr> )} 
        </table>


        <h2>Tabelle deutscher Nutzer</h2>
        <table>
          <tr>
            <th>Name</th><th>Finanzstatus</th><th>Land</th><th>Geburtsjahr</th>
          </tr>
            {germanUsers.map(user => <tr><td>{user.name}</td><td>{user.money}</td><td>{user.country}</td><td>{user.born}</td></tr> )}
        </table>


        <h2>Tabelle Deutsche Nutzer per Map mit Bedingung</h2>
        <table>
          <tr>
            <th>Name</th><th>Finanzstatus</th><th>Land</th><th>Geburtsjahr</th>
          </tr>
            {users.map(user => {
              if (user.country === "Germany") {
              return <tr><td>{user.name}</td><td>{user.money}</td><td>{user.country}</td><td>{user.born}</td></tr>}})
            }
        </table>


      </div>
    );
  }
}
export default App;
