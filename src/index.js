import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, { initialState } from "./data/reducer";
import StateProvider from "./data/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
