import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: ''
        }
    }

    // Method starts
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    
    onSubmit(e) {
        e.preventDefault();
    
        const user = {
            username: this.state.username
        }
    
        console.log(user);
        
        // check users.js file (in routes folder). Sends a POST request.
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }
    // Method ends

    render() {
        return(
            <div>
                <h3>Create User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}