import React, { Component } from 'react'
import { connect } from 'react-redux';
import Minicell from './Minicell';

class Miniboard extends Component {
    render() {
            return (
            <div className=" miniboardPlusBtn">
            <div className="miniboard">
            {this.props.history[this.props.contain].map((element, index) => <Minicell key={index} index={index} contain={element} containIndex={index}/>)}  
            </div>
            <button className="backBtn" onClick = {()=>this.props.goBack(this.props.contain)}>go back to step no. {this.props.contain+1}</button>    
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    history: state.history
})
const mapDispatchToProps = (dispatch) => ({
    goBack: (i) => dispatch({ type: 'GOBACK', value: i})
})

export default connect(mapStateToProps, mapDispatchToProps)(Miniboard);
