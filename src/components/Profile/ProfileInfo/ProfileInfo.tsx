import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileInfoPropsType} from './ProfileInfoContainer';

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  return <>
    <img src={props.top.imgSrc} alt=""/>
    <div className={s.descriptionBlock}>
      ava + description
    </div>
  </>
}

export default ProfileInfo;