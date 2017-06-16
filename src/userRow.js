import React, { Component } from 'react';
import logo from './logo.svg';

class UserRow extends Component{
  render(){
    return(
      <div className = 'list-group-item'>
        <div className= 'panel-body'>
          <img role= 'presentation' className='avatarImg' src={logo} alt= 'avatar mockup'/>
          <h2 className='userName'>{this.props.name}</h2>
          <h3 className='nickName'>{this.props.nickname}</h3>
        </div>
      </div>
    );
  }
}
export default UserRow;
