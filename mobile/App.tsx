if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

import React from "react";

import Reactotron from "reactotron-react-native";

import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import AppRoute from "./src/routes";

import { store } from "./src/store";

export default function App() {
  if (Reactotron && Reactotron.log) Reactotron.log("hello rendering world");

  return (
    <>
      <Provider store={store}>
        <AppRoute />
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}
