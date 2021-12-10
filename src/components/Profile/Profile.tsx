import React from 'react';
import s from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainer";


export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profilePage.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}