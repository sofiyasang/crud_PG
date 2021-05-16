import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const User = props => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.password}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/edit/"+props.user._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteUser(props.user._id) }}>Delete</button>
        </td>
    </tr>
)

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/' +id)
            .then(res => console.log(res.data));

        this.setState({ users: this.state.users.filter(el => el._id !== id)})
    }

    usersList() {
        return this.state.users.map(currentUser => {
            return <User user={currentUser} deleteUser={this.deleteUser} key={currentUser._id} />
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h3>Logged Users</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.usersList()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default UsersList;