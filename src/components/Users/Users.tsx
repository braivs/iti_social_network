import React from 'react';
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import {User} from "./User";

type UsersAdditionalPropsType = {
    onPageChanged: (p: number) => void
}

type UsersPropsTypeUnion = UsersAdditionalPropsType & UsersPropsType

export const Users: React.FC<UsersPropsTypeUnion> = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 25; // временно захардкодил количество, если найду время, то переделаю

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.pagesContainer}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <User key={u.id}
                                       user={u}
                                       followingInProgress={props.followingInProgress}
                                       followed={u.followed}
                                       unfollow={props.unfollow}
                                       follow={props.follow}
            />
            )
        }
    </div>
}