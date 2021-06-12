import React from 'react';
import s from './Profile.module.css'
import {ProfileInfoContainer} from './ProfileInfo/ProfileInfoContainer';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

export const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfoContainer/>
      <MyPostsContainer />
    </div>
  )
}