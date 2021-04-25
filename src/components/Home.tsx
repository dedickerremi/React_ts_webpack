import React, { FC } from 'react';
import { useCryptoState } from '../context/CryptoCurrenciesContext';

const CryptoCurrencyList: FC = () => {
    const cryptoCurrencies = useCryptoState()
    console.log('length', cryptoCurrencies.length);

    return (
        <div>
            Table
            {
                cryptoCurrencies.map((elem, i) => {

                    return <p key={`elem-${i}`}> Salut { elem.id }</p>
                })
            }
            Table Fin
        </div>
    )
}

export default CryptoCurrencyList