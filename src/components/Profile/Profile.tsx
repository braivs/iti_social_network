import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export type postsType = {
  id: number
  message: string
  likesCount: number
}
let posts:Array<postsType> = [
  {id: 1, message: 'I will be React Developer', likesCount: 12},
  {id: 2, message: 'It\'s my first post', likesCount: 11},
  {id: 3, message: 'Bugaga', likesCount: 5},
  {id: 4, message: 'Dada', likesCount: 1}
]

export type profileDataType= {
  imgSrc : string
  imgAlt : string
  description: string
}
let profileData:profileDataType = {
  imgSrc: "img/main.jpg",
  imgAlt: "",
  description: "ava + description"
}

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfo profileData={profileData} />
      <MyPosts posts={posts}/>
    </div>
  )
}

export default Profile;