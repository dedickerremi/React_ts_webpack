import React, { FC } from 'react';
import { useCryptoState } from '../context/CryptoCurrenciesContext';
import CryptoCurrencyList from './CryptoCurrencyTable';

const Home: FC = () => {
    const {cryptoCurrencies} = useCryptoState()
    const cryptoCurrenciesAsFavorite = cryptoCurrencies && cryptoCurrencies.filter(e => e.isFavorite)

    return (
        <>
            <CryptoCurrencyList cryptoCurrencies={cryptoCurrencies} />
            <CryptoCurrencyList cryptoCurrencies={cryptoCurrenciesAsFavorite} isFavoriteTable={true} />
        </>
    )
}

export default Home