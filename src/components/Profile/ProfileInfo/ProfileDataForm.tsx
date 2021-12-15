import React from "react";
import s from "./ProfileInfo.module.scss";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ContactsType, ProfileType} from "../../../types/types";
import style from './../../common/FormsControls/FormsControls.module.css'

export const ProfileDataFormSlave: React.FC<InjectedFormProps<ProfileFormValuesType>> = ({
                                                                                             handleSubmit,
                                                                                             initialValues,
                                                                                             error
                                                                                         }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
        </div>
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
        <div>
            <b>Contacts</b>: {initialValues.contacts && Object.keys(initialValues.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

export type ProfileFormValuesType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
}

const ProfileDataFormReduxForm = reduxForm<ProfileFormValuesType>({form: 'edit-profile'})(ProfileDataFormSlave)

type PropsType = {
    onSubmit: (formData: ProfileFormValuesType) => void
    initialValues: ProfileFormValuesType
    profile: ProfileType
}

export const ProfileDataForm: React.FC<PropsType> = (props) => {
    const onSubmit = (formData: ProfileFormValuesType) => {
        props.onSubmit(formData)
    }

    return <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={props.initialValues}/>
}

