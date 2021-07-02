import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPropsType} from "./UsersContainer";

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
            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'userPhoto'}
                 className={s.userPhoto}/>
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