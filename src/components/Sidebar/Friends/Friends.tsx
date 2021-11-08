import React from 'react';
import s from "../Sidebar.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {ProfileType} from "../../../types/types";
import {FriendItem} from "./FriendItem/FriendItem";
import {FriendsType} from "../../../redux/sidebar-reducer";

type PropsType = {
    friends: Array<FriendsType>
}

export const Friends: React.FC<PropsType>= (props) => {
    const profile = useSelector<AppRootStateType, ProfileType | null>(store => store.profilePage.profile)
    let FriendsElements = props.friends.map(f => <FriendItem key={f.id} id={f.id} name={f.name} avatar={f.avatar}/>)
    if (profile) {
        return <div>
            <div className={s.friends}>
                <h3>Friends</h3>
                <div className={s.friendsContainer}>{FriendsElements}</div>
            </div>
        </div>
    } else return <div></div>
}