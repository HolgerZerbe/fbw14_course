import React, { Component } from 'react'
import {connect} from 'react-redux';
import {loadUsers, searchUsers} from './actions'

const style1 = {
    boxSizing:"border-box",
    height: "120px",
    background : "lightgrey",
    border: "3px solid cornflowerblue",
    borderBottom: "none"
}
const style2 = {
    display :"flex",
    justifyContent: "flex-end",
    height: "25px"
}

const style3 = {
    marginTop: "50px",
    paddingLeft: "20px"
}



class Header extends Component {


    onChange = (e) => {
        this.setState({
            searchTerm : e.target.value
        })
    }
   
    searchUsers = (e) => {
        this.props.searchUsers(e.target.value)
    }


    componentDidMount()
        {this.props.loadUsers()}
    render() {
        return (
            <div style={style1}> 
                <h3 style={style3}>UserSearch</h3>
                <div style={style2}>
                    <input type="text" placeholder="search for..." onChange={(e) => this.props.searchUsers(e.target.value)}></input>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users : state.users
})

export default connect(mapStateToProps, {loadUsers, searchUsers})(Header);
