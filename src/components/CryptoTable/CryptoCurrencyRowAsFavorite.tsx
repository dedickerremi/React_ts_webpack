import React, { FC } from 'react';
import { ACTIONS, useCryptoDispatch } from '../../context/CryptoCurrenciesContext';
import { CryptoCurrencyType } from '../../types/CryptoCurrencyTypes';
import { Button, Td, Tr } from './styled';

interface Props {
    crypto: CryptoCurrencyType;
}

const CryptoCurrencyRowAsFavorite: FC<Props> = ({ crypto }) => {
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
                <Button onClick={handleFavorite}>
                    Unmark as favorite
                </Button>
            </Td>
        </Tr>
    )
}

export default CryptoCurrencyRowAsFavorite