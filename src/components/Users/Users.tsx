import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';

export class Users extends React.Component<UsersPropsType>{
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users', {withCredentials: true})
      .then(responce => {
        this.props.setUsers(responce.data.items)
      });
  }

  render() {
    return <div>
      {
        this.props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'userPhoto'} className={s.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                this.props.unfollow(u.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                this.props.follow(u.id)
              }}>Follow</button>}
          </div>
        </span>
          <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </span>
        </span>
        </div>)
      }
    </div>
  }
}
