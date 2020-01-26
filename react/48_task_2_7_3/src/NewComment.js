import React, { Component } from 'react'
import {connect} from 'react-redux';
import {postComment} from './actions';

class NewComments extends Component {

    state = {
        text: "",
        textValue:"",
        textPlaceholder:"new comment",
        name: "",
        nameValue:"",
        namePlaceholder:"your name"
    }

    style1 = {
        height: "150px",
        border: "3px solid gray",
        background: "lightgray",
        padding: "5px",
        width: "45%",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
        }

    style2 = {
        display: "block",
        width: "200px",
        margin: "0 auto"
    }

    nameInput = (e) => {
        this.setState({
            name: e, 
            nameValue: e
        })
    }

    textInput = (e) => {
        this.setState({
            text: e,
            textValue: e

        })
    }

    sendingAway = () => {
        
        if (this.state.text === "") {
            this.setState({textPlaceholder:"your comment is required"})
            return
        } else if (this.state.name === "") {
            this.setState({namePlaceholder:"your name is required"})
            return
        }


        this.props.postComment({
            name: this.state.name, 
            text:this.state.text
        });

        this.setState({
            name:"",
            nameValue:"",
            namePlaceholder:"your name",
            text:"",
            textValue:"",
            textPlaceholder:"new comment"
        })
    }

    render() {
        return (
            <div style = {this.style1}>
                <textarea rows="5" placeholder={this.state.textPlaceholder} value = {this.state.textValue} onChange={(e) => this.textInput(e.target.value)}></textarea>
                <input type="text" placeholder={this.state.namePlaceholder} value = {this.state.nameValue} onChange={(e) => this.nameInput(e.target.value)}></input>
                <button style={this.style2} onClick={()=>this.sendingAway()}> Create new comment</button>
            </div>
        )
    }
}

export default connect(null, {postComment})(NewComments)
