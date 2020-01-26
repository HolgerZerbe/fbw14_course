import React, { Component } from 'react'
import { connect } from 'react-redux';




class B extends Component {
    render() {
        return (
            <div>
                B
                x = {this.props.x}
                <button onClick={this.props.incrementY}>Increment Y</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    x: state.x
})

const mapDispatchtToProps = (dispatch) => ({
    incrementY: () => dispatch({ type: 'INCREMENT_Y'})
})

export default connect(mapStateToProps, mapDispatchtToProps)(B); // erstellt eine zweite Klasse B