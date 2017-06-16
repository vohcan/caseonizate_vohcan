import React, { Component } from 'react';
import UserRow from './userRow';


class UserList extends Component{
  render(){
    return(
      <div className = 'container'>
        <h1>inyect de list</h1>
        <UserRow/>

      </div>
    );
  }
}
 export default UserList;
