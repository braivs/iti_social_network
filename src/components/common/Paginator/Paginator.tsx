import React from 'react';
import s from "./Paginator.module.scss";

type PropsType = {
    onPageChanged: (p: number) => void
    currentPage: number
    pageSize: number
    totalUsersCount: number
}

// todo: here need to fix any
export const Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    // let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pagesCount = 25; // временно захардкодил количество, если найду время, то переделаю

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.pagesContainer}>
        {pages.map((p: any) => {
            return <div onClick={() => {
                onPageChanged(p)
            }}>
                <div className={`${s.circle} ${currentPage === p ? s.selectedPage : ""}`}>{p}</div>
            </div>
        })}
    </div>


}