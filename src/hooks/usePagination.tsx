import { useState, useEffect } from 'react';
import { CryptoCurrencyType } from '../types/CryptoCurrencyTypes';

/*
** Custom Hooks which return an array of cryptoCurrency to display
*/
export const usePagination = (crypto: CryptoCurrencyType[], currentPage: number, cryptoPerPage: number)
: CryptoCurrencyType[] | undefined => {  
    const [cryptoPageSelected, setSelected] = useState<CryptoCurrencyType[] | undefined>(undefined);

    useEffect(() => {
    const indexOfLastTodo = currentPage * cryptoPerPage;
    const indexOfFirstTodo = indexOfLastTodo - cryptoPerPage;
    const currentTodos = crypto.slice(indexOfFirstTodo, indexOfLastTodo);
    setSelected(currentTodos);
    }, [currentPage, crypto, cryptoPerPage]);

  return cryptoPageSelected;
}