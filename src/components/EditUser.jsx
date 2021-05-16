import React, { Component } from 'react';
import axios from "axios";

class EditUser extends Component {

    constructor(props){
        super();
        this.state = {
            username: "",
            password: "",
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    password: res.data.password
                })
            })
            .catch(function (error){
                console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0) {
                    this.setState({ 
                        users: response.data.map(user => user.username)
                    });
                }
            })
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value})
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(user);

        axios.post('http://localhost:5000/users/update/'+this.props.match.params.id, user)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit User Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />

                        </div>
                        <div className="form-group">

                        <label>Password: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditUser;