import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.scss'
import {Preloader} from "../../common/Preloader/Preloader";
import jobYes from '../../../assets/images/jobYes.png'
import jobNo from '../../../assets/images/jobNo.png'
import defaultAva from '../../../assets/images/default_ava.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileType} from "../../../types/types";

type ProfileInfoPropsType = {
    isOwner?: boolean
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return <>
        <div className={s.descriptionBlock}>
            <div className={s.left}>
                <img src={profile.photos.large || defaultAva} alt="" className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.right}>
                <div>Full Name: {profile.fullName}</div>
                <div>About Me: {profile.aboutMe}</div>
                <div>Contacts:</div>
                <ul className={s.contacts}>
                    <li>facebook: {profile.contacts.facebook}</li>
                    <li>vk: {profile.contacts.vk}</li>
                    <li>twitter: {profile.contacts.twitter}</li>
                    <li>instagram: {profile.contacts.instagram}</li>
                </ul>
                <div className={s.jobContainer}>
                    <div>Looking for a job:</div>
                    <img className={s.jobStatus} src={profile.lookingForAJob ? jobYes : jobNo} alt=""/>
                </div>
                <div>Job Description: {profile.lookingForAJobDescription}</div>
            </div>


        </div>
    </>;
}