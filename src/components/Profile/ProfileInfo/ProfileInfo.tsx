import React from 'react';
import s from './ProfileInfo.module.css'
import {profileInfoDataType} from '../../../index';

type ProfileInfoType = {
  profileInfoData: profileInfoDataType
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
  return (
    <>
      <img src={props.profileInfoData.imgSrc} alt=""/>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </>
  )
}