import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="img/main.jpg" alt=""/>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;