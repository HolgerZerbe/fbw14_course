import React, { Component } from 'react'
import { connect } from 'react-redux';


 class E extends Component {
    render() {
        return (
            <div>
               E 
               b = {this.props.b}
               <button onClick={this.props.incrementA}>Increment A</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    b: state.reducer2.b
})

const mapDispatchToProps = (dispatch) => ({
    incrementA: () => dispatch({ type: 'INCREMENT_A'})
})


export default connect(mapStateToProps, mapDispatchToProps)(E);