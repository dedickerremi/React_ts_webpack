import React, { FC, useState } from 'react';

import { usePagination } from '../../hooks/usePagination';
import { CryptoCurrencyType } from '../../types/CryptoCurrencyTypes';
import CryptoCurrencyRow from './CryptoCurrencyRow';
import CryptoCurrencyRowAsFavorite from './CryptoCurrencyRowAsFavorite';
import { Pagination } from './../Pagination';
import { Table, Th, Tr } from './styled';

interface Props {
    cryptoCurrencies: CryptoCurrencyType[],
    isFavoriteTable?: boolean
}

const CryptoCurrencyTable: FC<Props> = ({ cryptoCurrencies, isFavoriteTable = false }) => {
    
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [cryptoPerPage, setCryptoPerPage] = useState<number>(5)
    const cryptoToDisplay = usePagination(cryptoCurrencies, currentPage, cryptoPerPage);

    return (
        <>
            <Table>
                <thead>
                    <Tr>
                        <Th> rank </Th>
                        <Th> name </Th>
                        <Th> market cap </Th>
                        <Th> actions </Th>
                    </Tr>
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
            </Table>
            {
                cryptoCurrencies.length > 0 && 
                    <Pagination
                        totalItems={cryptoCurrencies.length}
                        itemsPerPage={cryptoPerPage}
                        currentPage={currentPage}
                        updatePage={setCurrentPage}
                    />
            }
        </>
    )
}

export default CryptoCurrencyTable