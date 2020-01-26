import React from 'react'
import {connect} from 'react-redux';
import {deleteComment} from './actions';


function Comment(props) {
    const style1 = {
        border: "3px solid gray",
        background: "lightgray",
        padding: "5px",
        margin: "10px"
}
    const style2 = {
        width: "400px",
        minHeight: "50px"
        }    
    const style3 = {
        width: "100px",
        minHeight: "30px",
        fontStyle: "italic",
        color: "grey"
        }
    const style4 = {
        width: "100px",
        height: "20px"
        }
        
    return (

        <div style = {style1}>
            <div style={style2}>{props.singleComment.text}</div>
            <hr />
            <div style={style3}>{props.singleComment.name}</div>
            <div style={style4}><button onClick={()=>props.deleteComment(props.index)}>Delete this comment</button></div>
        </div>
    )
}

export default connect(null, {deleteComment}) (Comment)