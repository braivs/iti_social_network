import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import {User} from "./User";
import {Paginator} from "../common/Paginator/Paginator";

type UsersAdditionalPropsType = {
    onPageChanged: (p: number) => void
}

type UsersPropsTypeUnion = UsersAdditionalPropsType & UsersPropsType

export const Users: React.FC<UsersPropsTypeUnion> = ({
                                                         currentPage,
                                                         totalUsersCount,
                                                         pageSize,
                                                         onPageChanged,
                                                         users,
                                                         ...props
                                                     }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}  pageSize={pageSize}
                   totalItemsCount={totalUsersCount}/>
        <div>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingInProgress={props.followingInProgress}
                                     followed={u.followed}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}