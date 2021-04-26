import React, { FC } from 'react';
import { ACTIONS, useCryptoDispatch } from '../../context/CryptoCurrenciesContext';
import { Button, Td, Tr } from './styled';
import { CryptoCurrencyType } from '../../types/CryptoCurrencyTypes';

interface Props {
    crypto: CryptoCurrencyType;
}

const CryptoCurrencyRow: FC<Props> = ({ crypto }) => {
    const dispatch = useCryptoDispatch()

    const handleFavorite = () => {
        dispatch({ type: ACTIONS.TOGGLE_FAVORITE, value: crypto })
    }

    return (
        <Tr>
            <Td>{ crypto.rank }</Td>
            <Td>{ crypto.id }</Td>
            <Td>{ crypto.marketCapUsd }</Td>
            <Td> 
                <Button onClick={handleFavorite} disabled={crypto.isFavorite}>
                    {crypto.isFavorite ? 'Marked' : 'Mark as favorite'}
                </Button>
            </Td>
        </Tr>
    )
}

export default CryptoCurrencyRow