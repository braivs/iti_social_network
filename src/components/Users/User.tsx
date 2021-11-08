import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import s from "./Users.module.scss";
import {PhotosType} from "../../types/types";


type UserType = {
    id: number
    photos: PhotosType
    name: string
    status: string
}

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    followed: boolean
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const User: React.FC<UserPropsType> = (props) => {
    return (<div>
        <div key={props.user.id}>
            <div>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small !== null ? props.user.photos.small : userPhoto} alt={'userPhoto'}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {props.followed
                        ? <button disabled={props.followingInProgress
                            .some(id => id === props.user.id)} onClick={() => {
                            props.unfollow(props.user.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.follow(props.user.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div>
                <div>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                    <div>id: {props.user.id}</div>
                </div>
            </div>
        </div>
    </div>)
}