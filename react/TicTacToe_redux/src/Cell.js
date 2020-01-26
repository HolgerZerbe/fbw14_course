import React, { Component } from 'react'
import { connect } from 'react-redux';

class Cell extends Component {

    render() {
        return (
            <div className="cell" style = {{backgroundColor: this.props.cellBackground[this.props.containIndex]}} onClick={()=>this.props.clickSet(this.props.containIndex)}>
                {this.props.contain}    
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cellBackground: state.cellBackground
})

const mapDispatchToProps = (dispatch) => ({
    clickSet: (i) => dispatch({ type: 'CLICKSET', value: i})
})


export default connect(mapStateToProps, mapDispatchToProps)(Cell);
