import React, { Component } from 'react'
import { connect } from 'react-redux';




class B extends Component {
    render() {
        return (
            <div>
                B
        
                <button onClick={this.props.randomstring}>Generate Randomstring</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    a: state.reducer1.a
})

const mapDispatchToProps = (dispatch) => ({
    randomstring: () => dispatch({ type: 'GENERATE_RANDOMSTRING'})
})

export default connect(mapStateToProps, mapDispatchToProps)(B); //