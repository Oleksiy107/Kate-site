
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./style/index.scss";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  rootEl
);
