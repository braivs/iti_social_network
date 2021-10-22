import React from 'react';
import s from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";


export const Profile:React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profilePage.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}