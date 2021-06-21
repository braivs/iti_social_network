import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileInfoPropsType} from './ProfileInfoContainer';

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  let element = <>
    <img src={props.top.imgSrc} alt=""/>
    <div>111</div>

    <div className={s.descriptionBlock}>
      ava + description
    </div>
  </>;
  return element
}