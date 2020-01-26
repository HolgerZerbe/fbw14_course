import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import Info from './Info';
import { connect } from 'react-redux';

class App extends Component {

compare = (ind1, ind2, ind3) => {
  if (!(this.props.endOfGame) && (this.props.xOrO[ind1] !== "" && this.props.xOrO[ind1] === this.props.xOrO[ind2] && this.props.xOrO[ind1] === this.props.xOrO[ind3])) {
    return true
  }
}

  componentDidUpdate() {

    if (this.compare(0, 1, 2)) {
      this.props.end(this.props.lastPlayer, 0, 1, 2)
    } else if (this.compare(3, 4, 5)) {
      this.props.end(this.props.lastPlayer, 3, 4, 5)
    } else if (this.compare(6, 7, 8)) {
      this.props.end(this.props.lastPlayer, 6, 7, 8)
    } else if (this.compare(0, 3, 6)) {
      this.props.end(this.props.lastPlayer, 0, 3, 6)
    } else if (this.compare(1, 4, 7)) {
      this.props.end(this.props.lastPlayer, 1, 4, 7)
    } else if (this.compare(2, 5, 8)) {
      this.props.end(this.props.lastPlayer, 2, 5, 8)
    } else if (this.compare(0, 4, 8)) {
      this.props.end(this.props.lastPlayer, 0, 4, 8)
    } else if (this.compare(2, 4, 6)) {
      this.props.end(this.props.lastPlayer, 2, 4, 6)
    } else if ((!(this.props.endOfGame)) && this.props.xOrO[0] !== "" && this.props.xOrO[1] !== "" && this.props.xOrO[2] !== "" && this.props.xOrO[3] !== "" && this.props.xOrO[4] !== "" && this.props.xOrO[5] !== "" && this.props.xOrO[6] !== "" && this.props.xOrO[7] !== "" && this.props.xOrO[8] !== "") {
      this.props.end("Nobody has won!")
    }
  }

  render() {
    return (
    <div className = "complete" >
      <h1 > TicTacToe with <span className = "reduxInHeadline"> react and redux</span></h1>

      <div className = "main" >
      <Board/>
      <Info/>
      </div >
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  winner: state.winner,
  xOrO: state.xOrO,
  currentPlayer: state.currentPlayer,
  endOfGame: state.endOfGame,
  lastPlayer: state.lastPlayer,
  history: state.history
})

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch({ type: 'RESET'}),
  end: (winner, index1, index2, index3) => dispatch({ type: 'END', valueWinner: winner, valueIndex1: index1, valueIndex2: index2, valueIndex3 : index3})
})


export default connect(mapStateToProps, mapDispatchToProps)(App);