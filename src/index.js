import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";
import store from "./store/store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle", color: "#58b4ae" } }}
        >
          <App />
        </IconContext.Provider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
