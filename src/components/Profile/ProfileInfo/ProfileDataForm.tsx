import React from "react";
import {ContactsType, ProfileType} from "../../../types/types";
import s from "./ProfileInfo.module.scss";
import jobYes from "../../../assets/images/jobYes.png";
import jobNo from "../../../assets/images/jobNo.png";

type ProfileDataFormPropsType = {
    profile: ProfileType
    isOwner?: boolean | undefined
    goToEditMode?: () => void
}
export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile}) => {
    return <form>
        {/*<div><button onClick={goToEditMode}>save</button></div>
        <div><b>Full Name</b>: {profile.fullName}</div>
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

        <div>Job Description: {profile.lookingForAJobDescription}</div>*/}
    </form>
}