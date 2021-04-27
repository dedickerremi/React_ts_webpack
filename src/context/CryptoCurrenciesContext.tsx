import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { CryptoCurrencyType } from '../types/CryptoCurrencyTypes';

export enum ACTIONS {
    SET_CRYPTOCURRENCIES = 'SET_CRYPTOCURRENCIES',
    TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
    RESET_FAVORITE = 'RESET_FAVORITE'
}

export type CryptoState = {
  cryptoCurrencies: CryptoCurrencyType[];
  totalVolumeUsd: number;
}
const CryptoStateContext = createContext<CryptoState | undefined>(undefined);

type Action =
  | { type: ACTIONS.SET_CRYPTOCURRENCIES; value: CryptoCurrencyType[] }
  | { type: ACTIONS.TOGGLE_FAVORITE; value: CryptoCurrencyType }
  | { type: ACTIONS.RESET_FAVORITE; };

type CryptoDispatch = Dispatch<Action>;
const CryptoDispatchContext = createContext<CryptoDispatch | undefined>(
  undefined
);

function cryptoReducer(state: CryptoState, action: Action): CryptoState {
  let cryptoCurrencies: any = [];

  switch (action.type) {
    // Initialize state with fetched crypto currencies
    case ACTIONS.SET_CRYPTOCURRENCIES:
      cryptoCurrencies = action.value.map(elem => {
          return { ...elem, isFavorite: false }
      });
      const totalVolumeUsd = cryptoCurrencies.reduce((acc, value) => {     
        return acc + (Math.round(Number(value.volumeUsd24Hr) * 100) / 100)
      }, 0)
      return { ...state, cryptoCurrencies, totalVolumeUsd }
    // Toggle Crypto mark as favorites
    case ACTIONS.TOGGLE_FAVORITE:
      
      cryptoCurrencies = state.cryptoCurrencies.map(crypto =>
        crypto.id === action.value.id ? { ...crypto, isFavorite: !crypto.isFavorite } : crypto
      );
      return { ...state, cryptoCurrencies }
    // Reset to false all crypto marked as favorites
    case ACTIONS.RESET_FAVORITE:
      cryptoCurrencies = state.cryptoCurrencies.map(crypto => {
        return { ...crypto, isFavorite: false }          
      });
      return { ...state, cryptoCurrencies }

    default:
      throw new Error('Unhandled action');
  }
}

export function CryptoContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(cryptoReducer, { cryptoCurrencies: [], totalVolumeUsd: 0 });

  return (
    <CryptoDispatchContext.Provider value={dispatch}>
      <CryptoStateContext.Provider value={state}>
        {children}
      </CryptoStateContext.Provider>
    </CryptoDispatchContext.Provider>
  );
}

export function useCryptoState(): CryptoState {
  const state = useContext(CryptoStateContext);
  if (!state) throw new Error('CryptoProvider not found');
  return state;
}

export function useCryptoDispatch(): CryptoDispatch {
  const dispatch = useContext(CryptoDispatchContext);
  if (!dispatch) throw new Error('CryptoProvider not found');
  return dispatch;
}