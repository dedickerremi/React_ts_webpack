import React, { FC } from 'react';
import { useCryptoState } from '../context/CryptoCurrenciesContext';
import { CryptoCurrencyType } from '../types/CryptoCurrencyTypes';

interface Props {
    crypto: CryptoCurrencyType
}

const CryptoCurrencyRow: FC<Props> = ({ crypto }) => {
    return (
        <tr>
            <td>{ crypto.id }</td>
            <td>{ crypto.rank }</td>
            <td>{ crypto.marketCapUsd }</td>
            <td>Action</td>
        </tr>
    )
}

export default CryptoCurrencyRow