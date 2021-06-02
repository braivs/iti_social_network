import React from 'react';
import {usersType} from '../../types/entities';
import s from './Users.module.css'
import defaultAva from '../../img/ava_orange.png';

type UsersPropsType = {
  users: Array<usersType>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<usersType>) => void
}

let Users: React.FC<UsersPropsType> = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
        {
          id: 1, photoUrl: defaultAva, followed: false, fullName: 'Dmitry', status: 'I am boss',
          location: {city: 'Minsk', country: 'Belarus'}
        },
        {
          id: 2, photoUrl: defaultAva, followed: true, fullName: 'Sasha', status: 'I am boss too',
          location: {city: 'Moscow', country: 'Russia'}
        },
        {
          id: 3, photoUrl: defaultAva, followed: false, fullName: 'Andrew', status: 'I am boss too',
          location: {city: 'Kiew', country: 'Ukraine'}
        }
      ]
    )
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img src={u.photoUrl} className={s.userPhoto}/>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {
                props.unfollow(u.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(u.id)
              }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;