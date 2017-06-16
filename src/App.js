import React, { Component } from 'react';
import './App.css';
import UserList from './userList';

class App extends Component {
  constructor(props) {
  super(props)
  this.state = { users: [] }
}
componentWillMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState({ users: users })
      })
  }
  render() {
    if(this.state.users.length >0){

      return (
        <div className='App container'>
          <div className='App-header'>
            <h2>Caseonizate</h2>
          </div>
          <p className='App-intro'>
            Mira las imagenes que han subido tus compañeros
          </p>
          <UserList userList={ this.state.users }/>
        </div>
      );
    }else {
      return <p className="text-center">Cargando usuarios...</p>
    }
  }
}

export default App;
