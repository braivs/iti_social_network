import React from 'react';
import s from './ProfileInfo.module.css'
import {topType} from '../../../redux/state';

type ProfileInfoType = {
  top: topType
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
  return (
    <>
      <img src={props.top.imgSrc} alt=""/>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </>
  )
}