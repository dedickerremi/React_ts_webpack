import React, { FC } from 'react';
import { useCryptoState } from '../context/CryptoCurrenciesContext';
import CryptoCurrencyRow from './CryptoCurrencyRow';



const CryptoCurrencyList: FC = () => {
    const cryptoCurrencies = useCryptoState()
    console.log('length', cryptoCurrencies.length);

    return (
        <div>
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
                        cryptoCurrencies.map((elem, i) => {
                            return <CryptoCurrencyRow crypto={elem} key={`elem-${i}`} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CryptoCurrencyList