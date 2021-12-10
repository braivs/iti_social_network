import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.scss'
import {Preloader} from "../../common/Preloader/Preloader";
import jobYes from '../../../assets/images/jobYes.png'
import jobNo from '../../../assets/images/jobNo.png'
import defaultAva from '../../../assets/images/default_ava.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ContactsType, PhotosType, ProfileType} from "../../../types/types";
import {ProfileDataForm, ProfileFormValuesType} from "./ProfileDataForm";

type ProfileInfoPropsType = {
    isOwner?: boolean
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => void
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                                profile,
                                                                status,
                                                                updateStatus,
                                                                isOwner,
                                                                savePhoto,
                                                                saveProfile
                                                            }) => {
    let [editMode, setEditMode] = useState(false);

    if (!Object.keys(profile).length) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileFormValuesType) => {
        let profileUpdated = {...profile, ...formData}
        saveProfile(profileUpdated)
    }

    return <>
        <div className={s.descriptionBlock}>
            <div className={s.left}>
                <img src={profile.photos.large ? profile.photos.large : defaultAva} alt="" className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div className={s.right}>
                {editMode
                    ? <ProfileDataForm onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}

            </div>
        </div>
    </>;
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean | undefined
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
          <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full Name</b>: {profile.fullName}
        </div>
        <div className={s.jobContainer}>
            <b>Looking for a job:</b>
            <img className={s.jobStatus} src={profile.lookingForAJob ? jobYes : jobNo} alt=""/>
        </div>
        {profile.lookingForAJob &&
          <div className={s.jobContainer}>
            <b>My professional skills:</b>: {profile.lookingForAJobDescription}
          </div>
        }
        <div>
            <b>About Me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>

        <div>Job Description: {profile.lookingForAJobDescription}</div>
    </div>
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}