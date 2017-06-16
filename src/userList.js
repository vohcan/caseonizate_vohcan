import React, { Component } from 'react';
import UserRow from './userRow';


class UserList extends Component{
  render(){
    return(
      <div className = 'container col-md-6'>
        <h1>Lista de Usuarios</h1>
        <ul className='media-list'>
          { this.props.userList.map((user) => {
            return <UserRow key={ user.id }
                            name={ user.name }
                            nickname={ user.username } />


            })
          }
        </ul>

      </div>
    );
  }
}
 export default UserList;
