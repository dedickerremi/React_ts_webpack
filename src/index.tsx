import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import CryptoCurrency from "./container/cryptocurrency";
import { API } from "./constants";
import { ACTIONS, CryptoContextProvider, useCryptoDispatch } from "./context/CryptoCurrenciesContext";

import './style/global'
import { GlobalStyle } from "./style/global";
import { Title } from "./style/generic";

const App = () => {

  const dispatch = useCryptoDispatch();
  
  useEffect( () => {
    fetch(API)
    .catch(err => console.error(err))
    .then((resp: Response | any) => resp.json())
    .then(data => {
      dispatch({ type: ACTIONS.SET_CRYPTOCURRENCIES, value: data.data});
    });      
  }, [dispatch])

  return (
    <React.Fragment>
        <GlobalStyle />
        <Title>Crypto Table</Title>
        <CryptoCurrency />
    </React.Fragment>
    
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