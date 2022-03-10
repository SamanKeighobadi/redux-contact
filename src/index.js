import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
