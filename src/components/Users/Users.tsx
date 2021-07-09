import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UsersAdditionalPropsType = {
  onPageChanged: (p: number) => void
}

type UsersPropsTypeUnion = UsersAdditionalPropsType & UsersPropsType

export const Users: React.FC<UsersPropsTypeUnion> = (props) => {

  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesCount = 25; // временно захардкодил количество, если найду время, то переделаю

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div className={s.pagesContainer}>
      {pages.map(p => {
        return <span className={props.currentPage === p ? s.selectedPage : ""}
                     onClick={() => {
                       props.onPageChanged(p)
                     }}>{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <div>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'userPhoto'}
                   className={s.userPhoto}/>
            </NavLink>
          </div>
          <div>
            {u.followed
              ? <button onClick={() => {

                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  {
                  withCredentials: true,
                  headers: {
                    'API-KEY': '06e9c310-f07c-441a-811c-ffc5ac00e636'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                  });



              }}>Unfollow</button>
              : <button onClick={() => {

                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                  withCredentials: true,
                  headers: {
                    'API-KEY': '06e9c310-f07c-441a-811c-ffc5ac00e636'
                  }
                })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id)
                    }
                  });

              }}>Follow</button>}
          </div>
        </div>
        <div>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
          <div>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
          </div>
        </div>
      </div>)
    }
  </div>
}