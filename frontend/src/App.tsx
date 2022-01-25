import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store, persistor } from "./store";

import history from "./services/history";
import Routes from "./routes";

import CookieBar from "./components/CookieBar";

import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalStyle />
          <Header />
          <Routes />
          <CookieBar />
          <ToastContainer theme="colored" />
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
