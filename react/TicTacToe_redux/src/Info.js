import React, { Component } from 'react'
import { connect } from 'react-redux';


class Info extends Component {
    render() {
        return (
            <div className="info">
            {this.props.winner!==null ? <h2>Winner : {this.props.winner}</h2> : <h2>Next Player: {this.props.currentPlayer}</h2>}
            {this.props.winner==="X" || this.props.winner==="O"? <h2>Congratulations!</h2> : null}
            {this.props.winner!==null ? <button className="resetBtn" onClick={this.props.reset}>Restart Game</button> : null}
        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    winner: state.winner,
    currentPlayer: state.currentPlayer
})

const mapDispatchToProps = (dispatch) => ({
    reset: () => dispatch({ type: 'RESET'})
})


export default connect(mapStateToProps, mapDispatchToProps)(Info);

