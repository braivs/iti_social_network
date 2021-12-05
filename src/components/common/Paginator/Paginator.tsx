import React, {useState} from 'react';
import s from "./Paginator.module.scss";

type PropsType = {
    onPageChanged: (p: number) => void
    currentPage: number
    pageSize: number
    totalItemsCount: number
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({
                                                   totalItemsCount,
                                                   pageSize,
                                                   currentPage,
                                                   onPageChanged,
                                                   portionSize = 15 /*порция которая видна в пагинации*/,
                                               }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize); //количество страниц (всех!) до пагинатора

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize) // количество порций по 10 страниц
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={s.pagesContainer}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV </button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p: any) => {
                return <div className={`${s.circle} ${currentPage === p ? s.selectedPage : ""}`}
                            onClick={() => {
                                onPageChanged(p)
                            }}>{p}</div>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
    </div>


}

// todo: need to fix any