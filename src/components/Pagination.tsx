import React, { FC, useEffect, useState } from 'react'

interface Props {
    totalItems: number;
    itemsPerPage: number;
    updatePage: (page: number) => void;
}

export const Pagination: FC<Props> = ({ totalItems, itemsPerPage, updatePage }) => {
    const [pageNumber, setPageNumber] = useState<number>(0)

    useEffect(() => {
        setPageNumber(Math.ceil(totalItems / itemsPerPage))    
    }, [totalItems, itemsPerPage])

    if (pageNumber === 0) return null;

    return (
        <>
            {
                [...Array(pageNumber)].map((e, i) => {
                    i += 1
                    return (<button key={`pagination-${i}`} onClick={() => updatePage(i)}>Page {i}</button> )
                })
            }
        </>
    )
}