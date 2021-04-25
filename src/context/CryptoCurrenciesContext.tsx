import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { CryptoCurrencyType } from '../types/CryptoCurrencyTypes';

export enum ACTIONS {
    SET_CRYPTOCURRENCIES = 'SET_CRYPTOCURRENCIES',
    TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
    RESET_FAVORITE = 'RESET_FAVORITE'
}

export type CryptoState = CryptoCurrencyType[];

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
  switch (action.type) {
    case ACTIONS.SET_CRYPTOCURRENCIES:
        const crypto = action.value.map(elem => {
            return { ...elem, isFavorite: false }
        })
        console.log('onsetlescryptos', crypto)
      return crypto
    case ACTIONS.TOGGLE_FAVORITE:
      return state.map(crypto =>
        crypto.id === action.value.id ? { ...crypto, isFavorite: !crypto.isFavorite } : crypto
      );
    case ACTIONS.RESET_FAVORITE:
      return state.map(crypto => {
        return { ...crypto }          
      }
    );
    default:
      throw new Error('Unhandled action');
  }
}

export function CryptoContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(cryptoReducer, []);

  return (
    <CryptoDispatchContext.Provider value={dispatch}>
      <CryptoStateContext.Provider value={state}>
        {children}
      </CryptoStateContext.Provider>
    </CryptoDispatchContext.Provider>
  );
}

export function useCryptoState() {
  const state = useContext(CryptoStateContext);
  if (!state) throw new Error('CryptoProvider not found');
  return state;
}

export function useCryptoDispatch() {
  const dispatch = useContext(CryptoDispatchContext);
  if (!dispatch) throw new Error('CryptoProvider not found');
  return dispatch;
}