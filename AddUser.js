// Home.js
import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';

class AddUser extends Component {
    constructor(props) {
        super(props);

        // Form validation
        this.validator = new SimpleReactValidator();

        this.state = {
            name: '',
            email: '',
            phone: ''
        }
    }

    // To update state when input value changed
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // Form submit method
    submitHandler = (event) => {
        event.preventDefault();

        if (this.validator.allValid()) {
            const user = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
            }

            // Call the props method to save the user
            this.props.addUser(user);
        }
        else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>
                <div className="text-center"><h2>AddUser</h2></div>
                <form autoComplete="off" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" name="name" onChange={this.handleInput} />
                        {this.validator.message('name', this.state.name, 'required')}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" className="form-control" name="email" onChange={this.handleInput} />
                        {this.validator.message('email', this.state.email, 'required|email')}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" className="form-control" name="phone" onChange={this.handleInput} />
                        {this.validator.message('phone', this.state.phone, 'required|numeric')}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUser;
