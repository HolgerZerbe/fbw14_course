import React, { Component } from 'react'
import User from './User'
import {connect} from 'react-redux';
//import {loadUsers} from './actions'


const style1 = {
    boxSizing: "border-box",
    background : "lightgrey",
    border: "3px solid cornflowerblue"
}

const style2 = {
    width: "70%",
    margin: "20px auto",
    fontSize: "20px"
}

const style3 = {
    background: "rgb(139, 139, 212)",
    color: "white"
}

class Users extends Component {

    // state = {
    //     users: [
    //         {id: 1, name:"Testperson 1", email: "TestEmail 1"},
    //         {id: 2, name:"Testperson 2", email: "TestEmail 2"},
    //         {id: 3, name:"Testperson 3", email: "TestEmail 3"},
    //         {id: 4, name:"Testperson 4", email: "TestEmail 4"},
    //         {id: 5, name:"Testperson 5", email: "TestEmail 5"},
    //     ]
    // }
    // async componentDidMount() {
    //     try {
    //         const result = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const obj = await result.json();

    //         console.log(obj);
    //         this.setState({
    //             users: obj
    //         })
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }


    render() {
        return (
            <div style={style1}>
                <table style={style2}>
                    <thead>
                        <tr style={style3}><td>Id</td><td>Name</td><td>Email</td></tr>
                    </thead>
                    <tbody>
                          {this.props.users.map(element => <User key = {element.id} elem={element} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users : state.users
})


//export default connect(mapStateToProps, {loadUsers})(Users);
export default connect(mapStateToProps, null)(Users);