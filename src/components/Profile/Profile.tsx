import React from 'react';
import s from './Profile.module.css'
import {ProfileInfoContainer} from './ProfileInfo/ProfileInfoContainer';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {Preloader} from "../common/Preloader/Preloader";


//@ts-ignore
export const Profile = (props) => {

  return (
    <div className={s.content}>
      {/*@ts-ignore*/}
      <ProfileInfoContainer profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}