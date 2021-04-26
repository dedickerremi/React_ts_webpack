import React, { FC } from 'react';
import { ACTIONS, useCryptoDispatch } from '../context/CryptoCurrenciesContext';
import { useFavoriteCrypto } from '../hooks/useFavoriteCrypto';
import { CryptoCurrencyType } from '../types/CryptoCurrencyTypes';

interface Props {
    crypto: CryptoCurrencyType;
}

const CryptoCurrencyRowAsFavorite: FC<Props> = ({ crypto, }) => {
    const dispatch = useCryptoDispatch()

    const handleFavorite = () => {
        dispatch({ type: ACTIONS.TOGGLE_FAVORITE, value: crypto })
    }

    return (
        <tr>
            <td>{ crypto.id }</td>
            <td>{ crypto.rank }</td>
            <td>{ crypto.marketCapUsd }</td>
            <td> 
                <button onClick={handleFavorite}>
                    delete from favorite
                </button>
            </td>
        </tr>
    )
}

export default CryptoCurrencyRowAsFavorite