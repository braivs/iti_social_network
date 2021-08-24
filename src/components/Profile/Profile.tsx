import React from 'react';
import s from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";


export const Profile:React.FC<ProfilePropsType> = (props) => {
  debugger
  return (
    <div className={s.content}>
      <ProfileInfo top={props.profilePage.top} profile={props.profilePage.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  )
}