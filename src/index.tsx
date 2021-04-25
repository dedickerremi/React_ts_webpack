import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import CryptoCurrencyList from "./components/CryptoCurrencyTable";
import { API } from "./constants";
import { ACTIONS, CryptoContextProvider, useCryptoDispatch, useCryptoState } from "./context/CryptoCurrenciesContext";

const App = () => {

  const dispatch = useCryptoDispatch();
  const crypto = useCryptoState();
  
  console.log(crypto);

  useEffect( () => {
    fetch(API)
    .catch(err => console.error(err))
    .then((resp: Response | any) => resp.json())
    .then(data => {
      console.log('data', data.data)
      dispatch({ type: ACTIONS.SET_CRYPTOCURRENCIES, value: data.data});
    });      
  }, [])

  return (
    <>
      <h1>Failed</h1>
      <CryptoCurrencyList />  
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <CryptoContextProvider>
      <App />
    </CryptoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);