import React from 'react';
import s from './FriendsItem.module.scss'

type FriendItemType = {
  id: number
  name: string,
  avatar: string
}

export const FriendItem:React.FC<FriendItemType> = (props) => {
  return <div className={s.friendContainer}>
    <img src={props.avatar} alt="" className={s.avatar}/>
    {props.name}
  </div>
}