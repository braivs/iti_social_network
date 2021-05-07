import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes, profilePageType} from '../../redux/state';

type ProfileType = {
  profilePage: profilePageType
  dispatch: (action: ActionTypes) => void
}

const Profile:React.FC<ProfileType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo top={props.profilePage.top} />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;