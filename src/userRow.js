import React, { Component } from 'react';
import logo from './logo.svg';

class UserRow extends Component{
  render(){
    return(
      <div>
        <img className='avatarImg' src={logo} alt= 'avatar mockup'/>
        <h3>Inyeccion de userRow</h3>
      </div>
    );
  }
}
export default UserRow;
