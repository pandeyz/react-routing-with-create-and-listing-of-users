// App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import AddUser from './AddUser';

class App extends Component {
    constructor() {
        super();

        // User related details are stored in state
        this.state = {
            users: [
                { name: 'Ajay Mishra', email: 'ajay@email.com', phone: '9632587410' },
                { name: 'Aman Singh', email: 'aman@email.com', phone: '9632587410' },
            ]
        }
    }

    // To remove user
    removeUser = (index) => {
        const newUsers = [...this.state.users];

        newUsers.splice(index, 1);

        this.setState({ users: newUsers });
    }

    // To add new user
    addUser = (user) => {
        // Using spread operator
        // this.setState({ states: [...this.state.states, newState] });
        this.setState({ users: [...this.state.users, user] });
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to='/' className="nav-link">List</Link></li>
                            <li><Link to='/add_user' className="nav-link">Add User</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        {/*<Route exact path='/' component={Home}></Route>*/}
                        <Route exact path='/' render={(props) => <Home {...props} users={this.state.users} removeUser={this.removeUser} />}></Route>
                        <Route path='/add_user' render={(props) => <AddUser {...props} addUser={this.addUser} />}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
