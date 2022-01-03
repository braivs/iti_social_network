import React, {useState} from 'react';
import s from "./Paginator.module.scss";
import cn from "classnames";

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

    return <div className={s.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV </button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span key={p} className={cn({[s.selectedPage]: currentPage === p}, s.circle)}
                            onClick={() => {
                                onPageChanged(p)
                            }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
    </div>


}