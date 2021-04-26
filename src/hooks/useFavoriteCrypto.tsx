import { useState, useEffect } from 'react';
import { useCryptoState } from '../context/CryptoCurrenciesContext';
import { CryptoCurrencyType } from '../types/CryptoCurrencyTypes';

export const useFavoriteCrypto = (crypto: CryptoCurrencyType): boolean => {  
    const [isFavorite, setFavorite] = useState(false);
    const {cryptoCurrencies} = useCryptoState();

    useEffect(() => {
        const cryptoFound = cryptoCurrencies.filter(elem => elem.id === crypto.id)
        if (cryptoFound.length > 0 && cryptoFound[0].isFavorite) {
            setFavorite(true);
        } else {
            setFavorite(false);
        }
    }, [crypto, cryptoCurrencies]);

  return isFavorite;
}