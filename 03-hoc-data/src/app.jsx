import React, { Component } from 'react';
import UserList from './components/user-list/user-list.jsx';


class App extends Component {

    render() {
        return (
            <div className="app">
                <h1>User list:</h1>
                <UserList />
            </div>
        );
    }
}


export default App;
