import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.scss";
import {PhotosType} from "../../types/types";


type UserType = {
    id: number
    photos: PhotosType
    name: string
    status: string | null
}

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    followed: boolean
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const User: React.FC<UserPropsType> = ({user, followed, followingInProgress, unfollow, follow}) => {
    return (<div>
        <div key={user.id}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt={'userPhoto'}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {followed
                        ? <button disabled={followingInProgress
                            .some((id: number) => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some((id: number) => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <div>id: {user.id}</div>
                </div>
            </div>
        </div>
    </div>)
}