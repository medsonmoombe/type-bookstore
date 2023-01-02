import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import store from "./redux/store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
