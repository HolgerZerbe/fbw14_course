import React, { Component } from 'react'
import { connect } from 'react-redux';


 class D extends Component {
    render() {
        return (
            <div>
               D
               <button onClick={() => this.props.incrementB(3)}>Increment B um 3</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    incrementB: (i) => dispatch({ type: 'INCREMENT_B', value: i})
})


export default connect(null, mapDispatchToProps)(D);