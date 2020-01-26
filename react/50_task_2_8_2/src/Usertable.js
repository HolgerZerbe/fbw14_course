import React from 'react'
import UserTableWrapper from './UserTableWrapper'

const Usertable = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Username</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(element =><tr>
                        <td>{element.Id}</td>
                        <td>{element.username}</td>
                        <td>{element.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UserTableWrapper(Usertable)