import React from 'react';
import s from './ProfileInfo.module.css'
import {profileType, TopType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
  // top: TopType
  profile: profileType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <>
    {/*<img src={props.top.imgSrc} alt=""/>*/}
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} alt=""/>
      ava + description
    </div>
  </>;
}