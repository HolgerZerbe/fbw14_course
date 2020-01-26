import React, { Component } from 'react'
import {connect} from 'react-redux';
import Comment from './Comment.js';
import {loadComments} from './actions';

class Comments extends Component {

 componentDidMount() {

     this.props.loadComments()
    }

    render() {
        return (
            <div style= {{width:"45%", height: "100%", overflowY:"scroll"}}>

                {this.props.comments.map((element, index) => <Comment key={index} singleComment={element} index={index} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments
})

export default connect(mapStateToProps, {loadComments}) (Comments)