import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import Info from './Info';

class App extends Component {

  myFirstCol = "rgb(83, 85, 87)";
  mySecondCol = "rgb(218, 7, 7)";
  initialCellBackground = [this.myFirstCol, this.myFirstCol, this.myFirstCol, this.myFirstCol, this.myFirstCol, this.myFirstCol, this.myFirstCol, this.myFirstCol, this.myFirstCol];
  initialXOrO = ["", "", "", "", "", "", "", "", ""];

  state = {
    xOrO: [...this.initialXOrO],
    cellBackground: [...this.initialCellBackground],
    currentPlayer: "X",
    lastPlayer:null,
    winner: null,
    endOfGame: false
  }

  clickCell = (index) => {

    if (this.state.xOrO[index] !== "" || this.state.endOfGame)
      {return}

    const newXOrO = this.state.xOrO;
    let nextPlayer, formerPlayer;

    if (this.state.currentPlayer === "X") {
      newXOrO[index] = "X";
      nextPlayer = "O";
      formerPlayer = "X";

    } else {
      newXOrO[index] = "O";
      nextPlayer = "X";
      formerPlayer = "O"
    }

    this.setState({
      xOrO: newXOrO,
      currentPlayer: nextPlayer,
      lastPlayer: formerPlayer
    })
  }

  end = (winner, cell1, cell2, cell3) => {
      let newCellBackground= [...this.state.cellBackground];
      newCellBackground[cell1] = this.mySecondCol;
      newCellBackground[cell2] = this.mySecondCol;
      newCellBackground[cell3] = this.mySecondCol;
      this.setState({winner: winner,
                    endOfGame: true,
                    cellBackground: newCellBackground
      })
  }


  reset = () => {
    this.setState({
      xOrO: [...this.initialXOrO],
      currentPlayer: "X",
      lastPlayer:null,
      winner: null,
      endOfGame: false, 
      cellBackground: [...this.initialCellBackground]
    })
  }

  compare = (ind1, ind2, ind3) => {
    if (!(this.state.endOfGame) && (this.state.xOrO[ind1] !== "" && this.state.xOrO[ind1] === this.state.xOrO[ind2] && this.state.xOrO[ind1] === this.state.xOrO[ind3])) {
      return true;
    } else {return false;}
  }

  empty = () => {
    let counter = 0;
    for (let elem of this.state.xOrO) {
      if (elem !=="") {
        counter++;
      }
    } 
    return (counter===9 ? true : false)
  }

  componentDidUpdate() {
  
    if (this.compare(0, 1, 2)) {
          this.end(this.state.lastPlayer, 0, 1, 2)
        } else if (this.compare(3, 4, 5)) {
          this.end(this.state.lastPlayer, 3, 4, 5)
        } else if (this.compare(6, 7, 8)) {
          this.end(this.state.lastPlayer, 6, 7, 8)
        } else if (this.compare(0, 3, 6)) {
          this.end(this.state.lastPlayer, 0, 3, 6)
        } else if (this.compare(1, 4, 7)) {
          this.end(this.state.lastPlayer, 1, 4, 7)
        } else if (this.compare(2, 5 ,8)) {
          this.end(this.state.lastPlayer, 2, 5, 8)
        } else if (this.compare(0, 4, 8)) {
          this.end(this.state.lastPlayer, 0, 4, 8)
        } else if (this.compare(2, 4, 6)) {
          this.end(this.state.lastPlayer, 2, 4, 6)
        } else if (!(this.state.endOfGame) && this.empty()) {
          this.end("Nobody has won!")
        }
  }

  render() {
    return (
    <div className = "complete" >
      <h1 > TicTacToe with <span className = "propsInHeadline"> props drilling </span></h1>

      <div className = "main" >
      <Board stateFromApp = {this.state} functionFromApp = {this.clickCell}/>
      <Info stateFromApp = {this.state} resetFromApp = {this.reset}/>
      </div >
      </div>
    );
  }
}
export default App;