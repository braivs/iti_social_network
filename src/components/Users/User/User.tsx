import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";
import s from "../Users.module.css";

export const User = () => {
    return (<div>
        <div key={props.id}>
            <div>
                <div>
                    <NavLink to={'/profile/' + props.id}>
                        <img src={props.photos.small !== null ? props.photos.small : userPhoto} alt={'userPhoto'}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {props.followed
                        ? <button disabled={props.followingInProgress
                            .some(id => id === props.id)} onClick={() => {
                            props.unfollow(props.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                            props.follow(props.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div>
                <div>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                    <div>{props.id}</div>
                </div>
                <div>
                    <div>{'props.location.country'}</div>
                    <div>{'props.location.city'}</div>
                </div>
            </div>
        </div>
    </div>)
}