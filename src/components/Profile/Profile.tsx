import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

type ProfileType = {
  // store: ReduxStoreType
}

const Profile:React.FC<ProfileType> = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfoContainer/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;