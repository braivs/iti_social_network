import React from "react";
import s from "./ProfileInfo.module.scss";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

export const ProfileDataFormPre: React.FC<InjectedFormProps<ProfileFormValuesType>> = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div><button onClick={() => {}}>save</button></div>
        <div>
            <b>Full Name</b>: {createField('placeholder', 'fullName', [], Input)}
        </div>
        <div className={s.jobContainer}>
            <b>Looking for a job:</b> {createField('placeholder', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills:</b>
            {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About Me</b>:
            {createField('About Me', 'aboutMe', [], Textarea)}
        </div>

    </form>
}

export type ProfileFormValuesType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

 const ProfileDataFormReduxForm = reduxForm<ProfileFormValuesType>({form: 'edit-profile'})(ProfileDataFormPre)

type PropsType = {
    onSubmit: (formData: ProfileFormValuesType) => void
}

export const ProfileDataForm: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: ProfileFormValuesType) => {
        props.onSubmit(formData)
    }

    return <ProfileDataFormReduxForm onSubmit={onSubmit}/>
}

