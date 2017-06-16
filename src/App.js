import React, { Component } from 'react';
import './App.css';
import UserList from './userList';

class App extends Component {
  render() {
    return (
      <div className='App container'>
        <div className='App-header'>
          <h2>Caseonizate</h2>
        </div>
        <p className='App-intro'>
          Mira las imagenes que han subido tus compañeros
        </p>
        <UserList/>
      </div>
    );
  }
}

export default App;
