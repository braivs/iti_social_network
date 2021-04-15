import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {profileDataType} from '../../index';

type ProfileType = {
  profileData: profileDataType
}

const Profile:React.FC<ProfileType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo profileInfoData={props.profileData.profileInfoData} />
      <MyPosts posts={props.profileData.posts}/>
    </div>
  )
}

export default Profile;