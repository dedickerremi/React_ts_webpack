import React, { FC, useState } from 'react';
import { ACTIONS, useCryptoDispatch } from '../context/CryptoCurrenciesContext';

import { usePagination } from '../hooks/usePagination';
import { CryptoCurrencyType } from '../types/CryptoCurrencyTypes';
import CryptoCurrencyRow from './CryptoCurrencyRow';
import CryptoCurrencyRowAsFavorite from './CryptoCurrencyRowAsFavorite';
import { Pagination } from './Pagination';

interface Props {
    cryptoCurrencies: CryptoCurrencyType[],
    isFavoriteTable?: boolean
}

const CryptoCurrencyList: FC<Props> = ({ cryptoCurrencies, isFavoriteTable = false }) => {
    
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [cryptoPerPage, setCryptoPerPage] = useState<number>(20)
    const dispatch = useCryptoDispatch()
    const cryptoToDisplay = usePagination(cryptoCurrencies, currentPage, cryptoPerPage);

    const handleClick = () => {
        dispatch({ type: ACTIONS.RESET_FAVORITE });
    }

    return (
        <>
            {
                isFavoriteTable &&
                    <button onClick={handleClick} disabled={cryptoToDisplay?.length === 0}>Delete them All</button>
            }
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> RANK </th>
                        <th> MARKET CAP </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isFavoriteTable ?
                        cryptoToDisplay  && cryptoToDisplay.map((elem, i) => {
                            return <CryptoCurrencyRow crypto={elem} key={`elem-${i}`} />
                        })
                        :
                        cryptoToDisplay  && cryptoToDisplay.map((elem, i) => {
                            return <CryptoCurrencyRowAsFavorite crypto={elem} key={`elem-${i}`} />
                        })
                    }
                </tbody>
            </table>
            
            <Pagination totalItems={cryptoCurrencies.length} itemsPerPage={cryptoPerPage} updatePage={setCurrentPage} />
        </>
    )
}

export default CryptoCurrencyList