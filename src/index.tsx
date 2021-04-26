import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import { API } from "./constants";
import { ACTIONS, CryptoContextProvider, useCryptoDispatch } from "./context/CryptoCurrenciesContext";

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
    <>
      <h1>DowJones Crypto</h1>
      <Home />
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