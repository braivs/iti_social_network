import React from 'react';
import s from './ProfileInfo.module.css'
import {profileDataType} from '../Profile';

type ProfileInfoType = {
  profileData: profileDataType
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
  return (
    <>
      {/*{props.profileData.imgSrc}*/}
      <img src={props.profileData.imgSrc} alt=""/>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </>
  )
}