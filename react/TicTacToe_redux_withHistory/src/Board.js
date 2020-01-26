import React, { Component } from 'react'
import { connect } from 'react-redux';
import Cell from './Cell';

class Board extends Component {
    render() {
            return (
            <div className="board">
            {this.props.xOrO.map((element, index) => <Cell key={index} index={index} contain={element} containIndex={index}/>)}      
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    xOrO: state.xOrO, 
    cellBackground: state.cellBackground
})


export default connect(mapStateToProps, null)(Board);
