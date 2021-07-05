import React from 'react';
import s from './ProfileInfo.module.scss'
import {profileType, TopType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import jobYes from '../../../assets/images/jobYes.png'
import jobNo from '../../../assets/images/jobNo.png'

type ProfileInfoPropsType = {
  top: TopType
  profile: profileType
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <>
    <img src={props.top.imgSrc} alt=""/>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.small} alt=""/>
      <div>Full Name: {props.profile.fullName}</div>
      <div>About Me: {props.profile.aboutMe}</div>
      <div>Contacts:</div>
      <ul className={s.contacts}>
        <li>facebook: {props.profile.contacts.facebook}</li>
        <li>vk: {props.profile.contacts.vk}</li>
        <li>twitter: {props.profile.contacts.twitter}</li>
        <li>instagram: {props.profile.contacts.instagram}</li>
      </ul>
      <div className={s.jobContainer}>
        <div>Looking for a job:</div>
        <img className={s.jobStatus} src={props.profile.lookingForAJob ? jobYes : jobNo} alt=""/>
      </div>
      <div>Job Description: {props.profile.lookingForAJobDescription}</div>

    </div>
  </>;
}