import React, { FC } from 'react';
import { ACTIONS, useCryptoDispatch } from '../context/CryptoCurrenciesContext';
import { useFavoriteCrypto } from '../hooks/useFavoriteCrypto';
import { CryptoCurrencyType } from '../types/CryptoCurrencyTypes';

interface Props {
    crypto: CryptoCurrencyType;
}

const CryptoCurrencyRow: FC<Props> = ({ crypto, }) => {

    const isFavorite = useFavoriteCrypto(crypto)
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
                <button onClick={handleFavorite} disabled={isFavorite}>
                    add on favorite
                </button>
            </td>
        </tr>
    )
}

export default CryptoCurrencyRow