import React from "react";
import "./App.css";
import { Routes, store } from "../config";
import { Provider } from "react-redux";

function App() {
  return (
    // provider diinput dari react-redux
    // untuk menambahkan sebuah props bernama store yang berisi seluruh state global
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
