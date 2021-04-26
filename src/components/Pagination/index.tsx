import React, { FC, useEffect, useState } from 'react'
import { Button, Line } from './styled'

interface Props {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    updatePage: (page: number) => void;
}

export const Pagination: FC<Props> = ({ totalItems, itemsPerPage, currentPage, updatePage }) => {
    const [pageNumber, setPageNumber] = useState<number>(0)

    useEffect(() => {
        setPageNumber(Math.ceil(totalItems / itemsPerPage))    
    }, [totalItems, itemsPerPage])

    if (pageNumber <= 1) return null;

    return (
        <Line>
            {
                [...Array(pageNumber)].map((e, i) => {
                    i += 1
                    return (<Button disabled={currentPage === i ? true : false} key={`pagination-${i}`} onClick={() => updatePage(i)}>{i}</Button> )
                })
            }
        </Line>
    )
}